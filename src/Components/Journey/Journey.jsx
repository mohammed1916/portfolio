import { useEffect, useRef, useState } from "react";
import { chapters, chapterAt, clamp } from "./journeyData";
import "./Journey.css";

function ScenicFallback({ chapter }) {
  return (
    <svg
      className="journey-fallback"
      viewBox="0 0 1200 530"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <path
        d="M0 260 Q180 100 350 250 T700 230 T1200 200 V530 H0Z"
        fill="#c3d0b0"
      />
      <path d="M0 320 Q280 220 530 300 T1200 280 V530 H0Z" fill="#aebc96" />
      <rect y="400" width="1200" height="130" fill="#536451" />
      <path
        d="M0 466H1200"
        stroke="#f7e9bd"
        strokeWidth="4"
        strokeDasharray="45 35"
      />
      <g transform="translate(630 160)">
        <rect
          width="265"
          height="200"
          fill={chapter > 2 ? "#b57560" : "#e9d8b5"}
        />
        <path d="M-20 0L130-70 285 0Z" fill="#73554b" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect
              x={25 + i * 60}
              y="32"
              width="30"
              height="46"
              fill="#667e7c"
            />
            <rect
              x={25 + i * 60}
              y="100"
              width="30"
              height="46"
              fill="#667e7c"
            />
          </g>
        ))}
        <rect x="108" y="148" width="50" height="52" fill="#485952" />
      </g>
      <g transform="translate(300 362)">
        {chapter < 2 ? (
          <>
            <rect width="200" height="75" rx="12" fill="#efb844" />
            {[0, 1, 2, 3, 4].map((i) => (
              <rect
                key={i}
                x={12 + i * 34}
                y="10"
                width="26"
                height="28"
                rx="3"
                fill="#516d6b"
              />
            ))}
            <circle cx="38" cy="77" r="19" fill="#26332d" />
            <circle cx="160" cy="77" r="19" fill="#26332d" />
          </>
        ) : chapter === 4 ? (
          <g data-vehicle="car">
            <path d="M0 30H35L60-10H130L165 25L205 35V75H0Z" fill="#708eaf"/>
            <path d="M47 26L67 0H94V26ZM104 0H126L152 26H104Z" fill="#354e5a"/>
            <rect x="192" y="40" width="13" height="12" rx="3" fill="#fff1bf"/>
            <rect x="0" y="43" width="9" height="12" fill="#c4775c"/>
            <circle cx="40" cy="75" r="20" fill="#26332d"/>
            <circle cx="164" cy="75" r="20" fill="#26332d"/>
            <circle cx="40" cy="75" r="10" fill="#d7dfdb"/>
            <circle cx="164" cy="75" r="10" fill="#d7dfdb"/>
          </g>
        ) : (
          <>
            <circle cx="50" cy="75" r="20" fill="#26332d" />
            <circle cx="150" cy="75" r="20" fill="#26332d" />
            <path d="M50 60H130L145 0H165L154 68H50Z" fill="#468e81" />
            <path
              d="M90 50L78 0L120-20"
              fill="none"
              stroke="#26332d"
              strokeWidth="17"
            />
            <circle cx="116" cy="-45" r="20" fill="#efb844" />
          </>
        )}
      </g>
      <g fill="#6d865a">
        <circle cx="105" cy="300" r="50" />
        <circle cx="1030" cy="300" r="65" />
      </g>
    </svg>
  );
}

export default function Journey() {
  const sectionRef = useRef(null);
  const canvasHost = useRef(null);
  const sceneRef = useRef(null);
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [still, setStill] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const active = chapterAt(progress);
  const chapter = chapters[active];

  useEffect(() => {
    if (still || failed) return;
    let disposed = false;
    const unavailable = () => {
      if (disposed) return;
      const bounds = canvasHost.current.getBoundingClientRect();
      const wasVisible = bounds.bottom > 0 && bounds.top < window.innerHeight;
      setFailed(true);
      setReady(false);
      // Collapsing the pinned section must not strand the visitor below it.
      if (wasVisible)
        requestAnimationFrame(() =>
          sectionRef.current?.scrollIntoView({
            block: "start",
            behavior: "instant",
          }),
        );
    };
    // Three.js is a separate chunk. The story and direct links work while it loads.
    import("./createJourneyScene")
      .then(({ createJourneyScene }) => {
        if (disposed) return;
        sceneRef.current = createJourneyScene(canvasHost.current, unavailable);
        sceneRef.current.update(progressRef.current);
        setReady(true);
      })
      .catch(unavailable);
    return () => {
      disposed = true;
      sceneRef.current?.dispose();
      sceneRef.current = null;
      setReady(false);
    };
  }, [still, failed]);

  useEffect(() => {
    if (still || failed) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      const stage = section.firstElementChild;
      const top = parseFloat(getComputedStyle(stage).top) || 0;
      const distance = section.offsetHeight - stage.offsetHeight;
      const next = clamp(
        (top - section.getBoundingClientRect().top) / Math.max(1, distance),
      );
      progressRef.current = next;
      setProgress(next);
      sceneRef.current?.update(next);
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    const observer = new ResizeObserver(request);
    observer.observe(sectionRef.current);
    request();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }, [still, failed]);

  function toggleMotion() {
    const next = !still;
    setStill(next);
    requestAnimationFrame(() => {
      const section = sectionRef.current;
      if (!section) return;
      const stage = section.firstElementChild;
      const top =
        next || failed
          ? 0
          : parseFloat(getComputedStyle(stage).top) || 0;
      const distance =
        next || failed
          ? 0
          : progressRef.current * (section.offsetHeight - stage.offsetHeight);
      const navHeight =
        parseFloat(
          getComputedStyle(section).getPropertyValue("--nav-height"),
        ) || 88;
      window.scrollTo({
        top:
          window.scrollY +
          section.getBoundingClientRect().top -
          (next || failed ? navHeight : top) +
          distance,
        behavior: "instant",
      });
    });
  }

  function goTo(index) {
    const next = index / (chapters.length - 1);
    if (still || failed) {
      progressRef.current = next;
      setProgress(next);
      sceneRef.current?.update(next);
      return;
    }
    const section = sectionRef.current;
    const stage = section.firstElementChild;
    const top = parseFloat(getComputedStyle(stage).top) || 0;
    window.scrollTo({
      top:
        window.scrollY +
        section.getBoundingClientRect().top -
        top +
        next * (section.offsetHeight - stage.offsetHeight),
      behavior: "instant",
    });
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className={`journey ${still || failed ? "journey-still" : ""}`}
      aria-label="My journey from school to AI engineering"
    >
      <div
        className="journey-stage"
        style={{ "--chapter-accent": chapter.color }}
      >
        <div className="journey-canvas" ref={canvasHost} aria-hidden="true" />
        {!ready && <ScenicFallback chapter={active} />}
        <div className="journey-heading">
          <p className="eyebrow">MOHAMMED ABDULLAH / AI ENGINEER</p>
          <h1>
            A little curiosity.
            <br />A long <em>way to go.</em>
          </h1>
          <p className="journey-subtitle">
            From the school run to real-world AI.
            <br />
            This is the road that brought me here.
          </p>
          <a className="journey-skip" href="#projects">
            Skip to selected work <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
        <div className="journey-tools">
          <span>CHENNAI, INDIA</span>
          <button
            type="button"
            aria-pressed={still}
            disabled={failed}
            onClick={toggleMotion}
          >
            {failed
              ? "Still view"
              : still
                ? "Enable motion"
                : "Still mode"}
          </button>
        </div>
        <article
          className="journey-card"
          aria-label={`Chapter ${active + 1}: ${chapter.label}`}
        >
          <div className="journey-card-kicker">
            <span>{chapter.tag}</span>
            <strong>{chapter.year}</strong>
          </div>
          <h2>{chapter.title}</h2>
          <h3>{chapter.place}</h3>
          <p>{chapter.description}</p>
          <div className="journey-stat">
            <strong>{chapter.stat}</strong>
            <span>{chapter.statLabel}</span>
          </div>
          <a href={chapter.href}>
            {active === 4
              ? "Explore my experience"
              : active === 2
                ? "See what I built"
                : "View academic details"}{" "}
            <span aria-hidden="true">&#8599;</span>
          </a>
        </article>
        <div className="journey-road-caption" aria-hidden="true">
          <span>
            {active < 2
              ? "THE SCHOOL RUN"
              : active < 4
                ? "A ROAD OF MY OWN"
                : "NEXT STOP: WHAT IS POSSIBLE"}
          </span>
          <span>{String(active + 1).padStart(2, "0")} / 05</span>
        </div>
        <div className="journey-bottom">
          <div className="journey-scroll-hint">
            <span aria-hidden="true">&#8595;</span>
            {still || failed
              ? "CHOOSE A CHAPTER"
              : "SCROLL TO TRAVEL"}
            <small>{failed ? "Illustrated view" : "My journey."}</small>
          </div>
          <nav className="journey-chapters" aria-label="Journey chapters">
            {chapters.map((item, index) => (
              <button
                type="button"
                key={item.key}
                aria-current={active === index ? "step" : undefined}
                className={index <= active ? "chapter-reached" : ""}
                onClick={() => goTo(index)}
              >
                <span className="chapter-track">
                  <i />
                </span>
                <small>{item.year}</small>
                <strong>{item.label}</strong>
              </button>
            ))}
          </nav>
          <a className="journey-resume" href="#resume">
            View resume <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
        <div
          className="journey-progress"
          role="progressbar"
          aria-label="Journey progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
        >
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
      <div className="journey-accessible-story">
        {chapters.map((item) => (
          <article key={item.key}>
            <h2>
              {item.year}: {item.label}
            </h2>
            <p>
              {item.place}. {item.description} {item.stat} - {item.statLabel}.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
