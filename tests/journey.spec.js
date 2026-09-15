import { test, expect } from '@playwright/test';

async function travel(page, progress) {
  await page.evaluate(progress => {
    const section = document.querySelector('.journey');
    const stage = document.querySelector('.journey-stage');
    const top = parseFloat(getComputedStyle(stage).top) || 0;
    window.scrollTo({ top: scrollY + section.getBoundingClientRect().top - top + progress * (section.offsetHeight - stage.offsetHeight), behavior: 'instant' });
  }, progress);
}
async function openJourney(page) {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('.journey-canvas canvas')).toBeVisible();
}

test('native scrolling advances and reverses all five chapters', async ({ page }) => {
  const errors = []; page.on('pageerror', error => errors.push(error.message));
  await openJourney(page);
  const labels = ['School', 'Higher secondary', 'Engineering', "Master's", 'Experience'];
  for (const index of [0,1,2,3,4,3,2,1,0]) {
    await travel(page,index/4);
    await expect(page.locator('.journey-card')).toHaveAttribute('aria-label', `Chapter ${index+1}: ${labels[index]}`);
    await expect(page.getByRole('progressbar',{name:'Journey progress'})).toHaveAttribute('aria-valuenow', String(index*25));
  }
  await page.mouse.wheel(0, 1000);
  await expect(page.locator('.journey-card')).toHaveAttribute('aria-label','Chapter 2: Higher secondary');
  await page.mouse.wheel(0,-1000);
  await expect(page.locator('.journey-card')).toHaveAttribute('aria-label','Chapter 1: School');
  expect(errors).toEqual([]);
});

test('chapter controls support keyboard navigation and render different scenes', async ({ page }) => {
  await openJourney(page);
  const first = await page.locator('.journey-canvas').screenshot();
  await page.getByRole('button',{name:'2023 Engineering'}).focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.journey-card')).toContainText('9.51 C.G.P.A');
  await expect(page.getByRole('button',{name:'2023 Engineering'})).toHaveAttribute('aria-current','step');
  const second = await page.locator('.journey-canvas').screenshot();
  expect(first.equals(second)).toBe(false);
});

test('still mode keeps the chosen chapter and can return to motion', async ({ page }) => {
  await openJourney(page);
  await page.getByRole('button',{name:'NOW Experience'}).click();
  await expect(page.locator('.journey-card')).toContainText('244M+');
  await page.getByRole('button',{name:'Still mode',exact:true}).click();
  await expect(page.locator('.journey')).toHaveClass(/journey-still/);
  await expect(page.locator('.journey-canvas canvas')).toHaveCount(0);
  await expect(page.locator('.journey-card')).toBeInViewport();
  await page.getByRole('button',{name:'2023 Engineering'}).click();
  await expect(page.locator('.journey-card')).toContainText('Panimalar');
  await page.getByRole('button',{name:'Enable motion'}).click();
  await expect(page.locator('.journey-canvas canvas')).toBeVisible();
  await expect(page.locator('.journey-card')).toContainText('Panimalar');
});

test('reduced motion starts in a compact illustrated journey', async ({ page }) => {
  await page.emulateMedia({ reducedMotion:'reduce' });
  await page.goto('/');
  await expect(page.locator('.journey')).toHaveClass(/journey-still/);
  await expect(page.locator('.journey-canvas canvas')).toHaveCount(0);
  await page.getByRole('button',{name:"2025 Master's"}).click();
  await expect(page.locator('.journey-card')).toContainText('First rank');
  await expect(page.locator('.journey-fallback')).toBeVisible();
});

test('unavailable WebGL leaves the story and chapter navigation usable', async ({ page }) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function(type,...args) {
      return String(type).includes('webgl') ? null : original.call(this,type,...args);
    };
  });
  await page.goto('/');
  await expect(page.locator('.journey')).toHaveClass(/journey-still/);
  await expect(page.locator('.journey-fallback')).toBeVisible();
  await page.getByRole('button',{name:'NOW Experience'}).click();
  await expect(page.locator('.journey-card')).toContainText('244M+');
});

test('WebGL context loss switches to an illustrated fallback', async ({ page }) => {
  await openJourney(page);
  await page.getByRole('button',{name:'NOW Experience'}).click();
  await expect(page.locator('.journey-card')).toContainText('244M+');
  await page.locator('.journey-canvas canvas').evaluate(canvas => canvas.getContext('webgl2').getExtension('WEBGL_lose_context').loseContext());
  await expect(page.locator('.journey')).toHaveClass(/journey-still/);
  await expect(page.locator('.journey-fallback')).toBeVisible();
  await expect(page.locator('.journey-card')).toBeInViewport();
  await page.getByRole('button',{name:'2023 Engineering'}).click();
  await expect(page.locator('.journey-card')).toContainText('9.51 C.G.P.A');
});

test('mobile, tablet and landscape retain visible controls without overflow', async ({ page }) => {
  for (const [width,height] of [[390,844],[320,568],[768,1024],[844,390]]) {
    await page.setViewportSize({width,height});
    await page.goto('/',{waitUntil:'domcontentloaded'});
    await expect(page.getByRole('button',{name:'NOW Experience'})).toBeVisible();
    if (height >= 600 || width < 761) await expect(page.locator('.journey-canvas canvas')).toBeVisible();
    await page.getByRole('button',{name:'NOW Experience'}).click();
    await expect(page.locator('.journey-card')).toContainText('244M+');
    expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)).toBe(false);
    if (height>=600 || width<761) {
      const controls=await page.locator('.journey-chapters').boundingBox();
      expect(controls.y+controls.height).toBeLessThanOrEqual(height+1);
    }
  }
});

test('direct work, grades, resume and detail routes remain accessible', async ({ page }) => {
  await openJourney(page);
  await page.getByRole('link',{name:'Skip to selected work'}).click();
  await expect(page.locator('#projects')).toBeInViewport();
  await expect(page.locator('.project-card')).toHaveCount(10);
  await page.getByRole('button',{name:'AI / Research',exact:true}).click();
  await expect(page.locator('.project-card')).toHaveCount(4);
  await page.locator('.project-card').first().click();
  await expect(page.getByText('Curriculum-Aware Multi-Agent RAG Platform',{exact:true}).first()).toBeVisible();
  await page.goto('/#education',{waitUntil:'domcontentloaded'});
  await expect(page.locator('.education-chart canvas')).toBeVisible();
  await page.goto('/#resume',{waitUntil:'domcontentloaded'});
  await expect(page.locator('#resume iframe')).toBeVisible();
  const source=await page.locator('#resume iframe').getAttribute('src');
  const response=await page.request.get(new URL(source.split('#')[0],page.url()).href);
  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('application/pdf');
  await page.goto('/');
  await expect(page.locator('.journey-canvas canvas')).toHaveCount(1);
});
