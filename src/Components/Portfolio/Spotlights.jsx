import { useEffect } from 'react';
import preview from '../Projects/Images/commercial-visualizer.png';

export function useScrollReveals() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .section-top, .project-card, .experience-row');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    elements.forEach(el => { el.classList.add('scroll-reveal'); observer.observe(el); });
    return () => { observer.disconnect(); elements.forEach(el => el.classList.remove('scroll-reveal')); };
  }, []);
}

export function IdentityHero() {
  return <section id="home" className="identity-hero">
    <div className="hero-aurora" aria-hidden="true"><i/><i/><i/></div>
    <div className="wrap identity-content">
      <p className="eyebrow"><span className="tiny-square"/> AI ENGINEER · BUILDER · RESEARCHER</p>
      <h1 className="identity-name" aria-label="Mohammed Abdullah"><span>Mohammed</span><span>Abdullah<span className="name-period">.</span></span></h1>
      <div className="identity-bottom"><p>I build things that make<br/><strong>complexity feel simple.</strong></p><div><a className="button button-lime" href="https://visualizer.pro" target="_blank" rel="noreferrer">Explore Visualizer.pro <span aria-hidden="true">↗</span></a><a className="hero-research-link" href="#research">Follow my research ↗</a></div></div>
      <div className="identity-caption"><span>BASED IN CHENNAI, INDIA</span><a href="#featured">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a><span>CODE. QUESTION. CREATE.</span></div>
    </div>
  </section>;
}

export function FeaturedVisualizer() {
  return <section id="featured" className="featured-section wrap">
    <div className="section-top"><div><p className="eyebrow">IN THE SPOTLIGHT / MY PRODUCT</p><h2>Don’t just read code.<br/><span>See it think.</span></h2></div><a className="text-link" href="https://visualizer.pro" target="_blank" rel="noreferrer">VISUALIZER.PRO ↗</a></div>
    <a className="visualizer-feature reveal" href="https://visualizer.pro" target="_blank" rel="noreferrer"><div className="feature-copy"><span className="feature-pill">INDEPENDENTLY BUILT</span><h3>Visualizer<span>.pro</span></h3><p>Algorithms, made visible. Explore problems, trace execution step by step, and learn in an AI-assisted coding workspace.</p><span className="feature-cta">Step inside <span aria-hidden="true">↗</span></span><div className="algorithm-bars" aria-hidden="true">{[35,65,45,90,55,75,100,60,85,40,70,95].map((h,i)=><i key={i} style={{height:`${h}%`,'--delay':`${i * -.23}s`}}/>)}</div></div><div className="feature-screen"><div className="screen-bar"><span>● ● ●</span><span>visualizer.pro / playground</span><span>↗</span></div><img src={preview} alt="Visualizer algorithm learning and coding workspace" loading="lazy"/></div></a>
  </section>;
}

export function ResearchTrails() {
 return <section id="research" className="research-section wrap"><div className="section-top"><div><p className="eyebrow">RESEARCH TRAILS / QUESTIONS WORTH CHASING</p><h2>Build. Experiment.<br/><span>Question the result.</span></h2></div><p>From a preprint to the next experiment.<br/>Follow the questions, code, and evidence.</p></div><div className="research-grid">
 <article className="research-card reveal"><div className="research-meta"><span>01 / PREPRINT</span><span>arXiv · 2026</span></div><div className="research-glyph" aria-hidden="true">∴</div><h3>Understanding Context Sampling in TabPFN on Small Tabular Datasets</h3><p>How do context size and row selection affect prediction stability and accuracy? A study across 15 OpenML datasets exploring coverage, diversity, and sampling cost.</p><a href="https://arxiv.org/abs/2607.26628" target="_blank" rel="noreferrer">Read the preprint <span aria-hidden="true">↗</span></a></article>
 <article className="research-card reveal"><div className="research-meta"><span>02 / ONGOING EXPERIMENTS</span><span>Open research</span></div><div className="research-glyph" aria-hidden="true">↳</div><h3>Does boosting focus on the wrong hard examples?</h3><p>A continuation into gradient-based sampling in LightGBM. Explore the experiment code, research tracker, and tested hypotheses—including directions that didn’t hold up.</p><a href="https://github.com/mohammed1916/lightgbmz" target="_blank" rel="noreferrer">Explore lightgbmz on GitHub <span aria-hidden="true">↗</span></a></article>
 </div></section>;
}
