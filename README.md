## Hosting of the Project:
My portfolio: https://mohammedabdullah.pages.dev/

## Local development

```sh
npm install
npm run dev
npm run build
```

## Scroll-driven journey

The homepage opens with a five-chapter, procedural Three.js scene: school,
higher secondary, engineering, master's, and professional experience. The
vehicle stays mostly fixed while the road, campuses, and distant scenery move
at different speeds. Scroll backward to reverse the story, or use the chapter
buttons (also keyboard accessible) to jump directly to a milestone.

- `src/Components/Journey/journeyData.js`: chapter copy and references to the
  existing education/work data. Academic grades come from `src/data.js`.
- `src/Components/Journey/createJourneyScene.js`: original geometry for the
  bus, scooter, car, rider, stylized campuses, trees, road, and skyline. No Blender
  installation or external model downloads are needed.
- `src/Components/Journey/Journey.jsx`: native scroll progress, chapter controls,
  still mode, and illustrated fallback.
- `src/Components/Journey/Journey.css`: pinned stage and responsive layouts.

The artwork is a stylized interpretation, not an architectural reconstruction.
The renderer loads separately, caps pixel density, and renders on scroll/resize
rather than running a continuous animation loop. 3D scroll-driven travel is the default, including on short landscape screens.
The scene stays pinned while scrolling advances the scenery. Still mode is an
explicit visitor choice; system preferences do not silently disable travel.
WebGL failures use a compact illustrated journey.
Visitors can switch to still mode manually. Project navigation, the comparative
academic chart, and the embedded resume remain available below the journey.

## Browser checks

```sh
npm run test:journey
```

The Playwright suite uses installed Google Chrome by default. Set
`PLAYWRIGHT_CHANNEL=chromium` and install Playwright Chromium with
`npx playwright install chromium` to use that browser instead. The test server
uses port 5193. Checks cover forward/reverse scrolling, keyboard chapter jumps,
scene changes, still mode, reduced motion, missing/lost WebGL, mobile/tablet/
landscape layouts, and existing project, chart, and PDF access.
