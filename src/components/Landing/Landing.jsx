import { useState, useEffect, useRef, useCallback } from "react";
import {
  PhoneCall,
  Zap,
  Settings2,
  ArrowRight,
  Stethoscope,
  Home,
  Wrench,
  Scale,
  Sparkles,
  Link2,
} from "lucide-react";
import Props from "../../components/Props/Props";
import "./Landing.css"; // Make sure the path matches where you save the CSS file

/* ---------------------------------------------------------
   Hooks
--------------------------------------------------------- */

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(node);
        }
      },
      { threshold },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* ---------------------------------------------------------
   Small building blocks
--------------------------------------------------------- */

function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const [ref, inView] = useInView(0.12);
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

function SplitHeading({
  text,
  as: Tag = "h2",
  className = "",
  highlight = [],
  muted = [],
}) {
  const [ref, inView] = useInView(0.25);
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((w, i) => {
        let colorClass = "";
        if (highlight.includes(w)) colorClass = "text-green";
        else if (muted.includes(w)) colorClass = "text-muted-heading";

        return (
          <span key={i}>
            <span className={`word ${colorClass}`}>
              <span
                className="word-inner"
                style={{
                  transform: inView ? "translateY(0)" : "translateY(110%)",
                  transitionDelay: `${i * 35}ms`,
                }}
              >
                {w}
              </span>
            </span>{" "}
          </span>
        );
      })}
    </Tag>
  );
}

function CountUp({ end, inView, suffix = "+" }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const duration = 1500;
    function tick(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);
  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function Stat({ value }) {
  const [ref, inView] = useInView(0.4);
  return (
    <div className="result-metric" ref={ref}>
      <CountUp end={value} inView={inView} />
    </div>
  );
}

function MagneticButton({ children, className = "", ...rest }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const canHoverRef = useRef(false);

  useEffect(() => {
    canHoverRef.current =
      typeof window !== "undefined" &&
      window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  }, []);

  const handleMove = useCallback((e) => {
    if (!canHoverRef.current || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - r.left - r.width / 2) * 0.3,
      y: (e.clientY - r.top - r.height / 2) * 0.3,
    });
  }, []);
  const handleLeave = useCallback(() => setPos({ x: 0, y: 0 }), []);

  return (
    <button
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: "transform .35s cubic-bezier(.65,0,.35,1)",
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

/* ---------------------------------------------------------
   Problem section
--------------------------------------------------------- */

const PROBLEMS = [
  {
    n: "01",
    title: "The calls you never hear",
    body: "Service businesses miss a large share of inbound calls during busy hours, lunch, and after close. Every missed call is a booked competitor.",
  },
  {
    n: "02",
    title: "The follow up that never lands",
    body: "A lead contacted in under 5 minutes is many times more likely to convert than one contacted an hour later. Most teams take hours.",
  },
  {
    n: "03",
    title: "The database nobody touches",
    body: "Every business is sitting on hundreds of old leads that went cold for one reason. Nobody followed up a second time.",
  },
];

function ProblemSection() {
  return (
    <section className="section" id="problem">
      <div className="container">
        <div className="section-head">
          <Props
            company="The real problem"
            title=""
            passage="Losing Deals. You Are "
            passage2=""
            highlightOne="You Are Not"
            highlightTwo="Losing Response Time."
            description="Most service businesses do not have a lead problem. They have a response problem. The leads are already there. Nobody picks up."
            buttonText=""
            id="AboutUs"
            showLine={false}
          />
        </div>
        <div className="problem-grid">
          {PROBLEMS.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 90}
              className="problem-card"
              as="article"
            >
              <div className="problem-num" aria-hidden="true">
                {p.n}
              </div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   Solution stack
--------------------------------------------------------- */

const SOLUTIONS = [
  {
    icon: PhoneCall,
    tag: "AI Front Desk",
    headline: "Answers every call in one ring",
    body: "A voice agent that picks up 24/7, answers questions, qualifies the caller, and books straight into your calendar. Missed calls get an instant text back before the caller reaches anyone else.",
    href: "https://calendly.com/jeffersonmeet/30min",
  },
  {
    icon: Zap,
    tag: "AI Lead Engine",
    headline: "Contacts every lead in under 60 seconds",
    body: "The moment a form is filled or an ad is clicked, the lead gets a call and a text. Then a structured follow up sequence that runs until they book or opt out. Old databases get reactivated on demand.",
    href: "https://calendly.com/jeffersonmeet/30min",
  },
  {
    icon: Settings2,
    tag: "AI Ops",
    headline: "Removes the admin behind the desk",
    body: "Intake forms, insurance and document handling, appointment reminders, no show recovery, and weekly reporting. Handled without adding headcount.",
    href: "https://calendly.com/jeffersonmeet/30min",
  },
];

function SolutionsSection() {
  return (
    <section className="section section-alt" id="solutions">
      <div className="container">
        <div className="section-head">
          <Props
            company="The solution stack"
            title=""
            passage="Nothing Slips Through."
            passage2=""
            highlightOne="Three Systems."
            highlightTwo="One Outcome."
            description="We do not sell software licences. We build, deploy, and run the system inside your business, then we optimise it every month."
            buttonText=""
            id="Solutions"
            showLine={false}
          />
        </div>
        <div className="solution-grid">
          {SOLUTIONS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.tag} delay={i * 90} as="div">
                <a href={s.href} className="solution-card">
                  <div className="solution-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <div className="solution-tag">{s.tag}</div>
                  <div className="solution-headline">{s.headline}</div>
                  <p>{s.body}</p>
                  <span className="solution-link">
                    <a
                      className="solution-link"
                      href="https://calendly.com/jeffersonmeet/30min"
                    >
                      Explore {s.tag}
                      <ArrowRight size={14} />
                    </a>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   Live demo
--------------------------------------------------------- */

const MAX_ATTEMPTS = 2;

function formatTime(s) {
  const m = String(Math.floor(s / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${m}:${sec}`;
}

// function DemoSection() {
//   const [status, setStatus] = useState("idle"); // idle | dialing | active
//   const [phone, setPhone] = useState("");
//   const [code, setCode] = useState("+1");
//   const [attempts, setAttempts] = useState(0);
//   const [error, setError] = useState("");
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     if (status !== "active") return;
//     setSeconds(0);
//     const id = setInterval(() => setSeconds((s) => s + 1), 1000);
//     return () => clearInterval(id);
//   }, [status]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     setError("");
//     const digits = phone.replace(/\D/g, "");
//     if (digits.length < 7) {
//       setError("Enter a valid phone number to try the call.");
//       return;
//     }
//     if (attempts >= MAX_ATTEMPTS) {
//       setError(
//         "You've already tried this twice today. Reach us directly instead — hello@insightblitz.io.",
//       );
//       return;
//     }
//     setAttempts((a) => a + 1);
//     setStatus("dialing");
//     setTimeout(() => setStatus("active"), 1600);
//   }

//   function reset() {
//     setStatus("idle");
//     setPhone("");
//   }

//   return (
//     <section className="section demo-section" id="demo">
//       <div className="demo-glow" aria-hidden="true" />
//       <div className="container demo-wrap">
//         <span className="eyebrow eyebrow--center">Try it right now</span>
//         <SplitHeading text="Do Not Take Our Word For It. Call It." />
//         <Reveal as="p" delay={80}>
//           Enter your number. Our AI agent calls you in ten seconds and books a
//           fake appointment. That is exactly what your customers will hear.
//         </Reveal>

//         <div className="demo-panel">
//           {status !== "active" ? (
//             <form className="demo-form" onSubmit={handleSubmit} noValidate>
//               <label
//                 htmlFor="phoneInput"
//                 style={{ position: "absolute", left: "-9999px" }}
//               >
//                 Your phone number
//               </label>
//               <div className="phone-field">
//                 <select
//                   aria-label="Country code"
//                   value={code}
//                   onChange={(e) => setCode(e.target.value)}
//                 >
//                   <option value="+1">🇺🇸 +1</option>
//                   <option value="+1">🇨🇦 +1</option>
//                   <option value="+44">🇬🇧 +44</option>
//                   <option value="+234">🇳🇬 +234</option>
//                   <option value="+61">🇦🇺 +61</option>
//                 </select>
//                 <input
//                   id="phoneInput"
//                   type="tel"
//                   placeholder="Your phone number"
//                   autoComplete="tel"
//                   inputMode="tel"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//               </div>
//               <MagneticButton
//                 type="submit"
//                 className="btn btn-primary"
//                 disabled={status === "dialing"}
//               >
//                 {status === "dialing" ? "Dialing…" : "Call Me Now"}
//               </MagneticButton>
//             </form>
//           ) : (
//             <div className="demo-success active" aria-live="polite">
//               <div className="ring-ui" aria-hidden="true">
//                 <PhoneCall size={26} strokeWidth={1.8} />
//               </div>
//               <div className="demo-status">Calling you now.</div>
//               <div className="demo-status-sub">
//                 Pick up and talk to it like a customer would.
//               </div>
//               <div className="waveform" aria-hidden="true">
//                 {[0, 0.1, 0.2, 0.3, 0.15, 0.05, 0.25].map((d, i) => (
//                   <span key={i} style={{ animationDelay: `${d}s` }} />
//                 ))}
//               </div>
//               <div className="call-timer">{formatTime(seconds)}</div>
//               <button type="button" className="demo-reset" onClick={reset}>
//                 Start over
//               </button>
//             </div>
//           )}
//           <p className="demo-error" role="status">
//             {error}
//           </p>
//         </div>
//         <p className="demo-micro">
//           One call. No sales pitch. We do not store your number.
//         </p>
//       </div>
//     </section>
//   );
// }

/* ---------------------------------------------------------
   How it works
--------------------------------------------------------- */

const STEPS = [
  {
    n: "1",
    title: "Audit",
    body: "We map where leads enter your business and where they die. You get the number in writing before you pay anything.",
  },
  {
    n: "2",
    title: "Build",
    body: "We write your agent on your scripts, your services, your pricing, and your objections. Not a generic bot.",
  },
  {
    n: "3",
    title: "Deploy",
    body: "We connect it to your phone line, your calendar, and your CRM. Your team keeps working the way it already works.",
  },
  {
    n: "4",
    title: "Optimise",
    body: "We review every call transcript monthly and tighten the system. You get a report with booked appointments and recovered revenue.",
  },
];

function ProcessSection() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head">
          <Props
            company="How it works"
            title=""
            passage="14 Days."
            passage2=""
            highlightOne="Live In"
            highlightTwo="Not 14 Weeks."
            description=""
            buttonText=""
            id="AboutUs"
            showLine={false}
          />
        </div>
        <div className="process-track">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="process-step" as="div">
              <div className="step-num" aria-hidden="true">
                {s.n}
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   Industries grid
--------------------------------------------------------- */

const INDUSTRIES = [
  {
    icon: Stethoscope,
    title: "Medical and Dental Clinics",
    body: "New patient calls answered and booked without pulling staff off the floor.",
    href: "/industries/medical-clinics",
  },
  {
    icon: Home,
    title: "Real Estate",
    body: "Every enquiry called back in under a minute, day or night.",
    href: "/industries/real-estate",
  },
  {
    icon: Wrench,
    title: "Home Services",
    body: "Emergency calls captured after hours instead of going to the next contractor.",
    href: "/industries/home-services",
  },
  {
    icon: Scale,
    title: "Legal",
    body: "Intake qualified and consultations booked before the caller tries another firm.",
    href: "/industries/legal",
  },
  {
    icon: Sparkles,
    title: "Med Spas and Aesthetics",
    body: "High ticket consultations booked from the first message.",
    href: "/industries/medical-clinics",
  },
  {
    icon: Link2,
    title: "Web3 and Crypto",
    body: "Community, growth, and go to market for token projects and protocols.",
    href: "/industries/web3",
  },
];

function IndustriesSection() {
  return (
    <section className="section section-alt" id="industries">
      <div className="container">
        <div className="section-head">
          <Props
            company="Who it's built for"
            title=""
            passage="Where One Missed Call"
            passage2=""
            highlightOne="Built For Businesses"
            highlightTwo="Costs Real Money."
            description="The higher your average customer value, the faster this pays for itself."
            buttonText=""
            id="AboutUs"
            showLine={false}
          />
        </div>
        <div className="industries-grid">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.title} delay={i * 70} as="div">
                <a href={ind.href} className="industry-tile">
                  <div className="industry-icon" aria-hidden="true">
                    <Icon size={30} strokeWidth={1.6} />
                  </div>
                  <h3>{ind.title}</h3>
                  <p>{ind.body}</p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   Results
--------------------------------------------------------- */

const RESULTS = [
  {
    vertical: "Medical",
    value: 312,
    label: "extra appointments booked",
    context: "From calls that previously went to voicemail.",
    timeframe: "First 90 days",
    client: "Multi-location dental group",
  },
  {
    vertical: "Real Estate",
    value: 189,
    label: "leads contacted within 60 seconds",
    context: "Up from an average 4-hour callback window.",
    timeframe: "First 60 days",
    client: "12-agent brokerage team",
  },
  {
    vertical: "Home Services",
    value: 47,
    label: "after-hours emergency calls captured",
    context: "That previously went to voicemail overnight.",
    timeframe: "First 45 days",
    client: "Multi-truck HVAC & plumbing co.",
  },
];

function ResultsSection() {
  return (
    <section className="section" id="results">
      <div className="container">
        <div className="results-head-row">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <Props
              company="Proof - Not promises"
              title=""
              passage="That Matters Is "
              passage2=""
              highlightOne="The Only Metric"
              highlightTwo="Appointments Booked."
              description="Numbers from live client deployments.Sample data shown below — final figures land before sprint 3."
              buttonText=""
              id="AboutUs"
              showLine={false}
            />
          </div>
        </div>

        <div className="results-grid">
          {RESULTS.map((r, i) => (
            <Reveal
              key={r.vertical}
              delay={i * 90}
              className="result-card"
              as="article"
            >
              <span className="result-vertical">{r.vertical}</span>
              <Stat value={r.value} />
              <div className="result-label">{r.label}</div>
              <p className="result-context">{r.context}</p>
              <div className="result-meta">
                <span>{r.timeframe}</span>
                <span>{r.client}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   Root
--------------------------------------------------------- */

export default function InsightblitzLanding() {
  return (
    <div id="top">
      <main>
        <ProblemSection />
        <SolutionsSection />
        {/* <DemoSection /> */}
        <ProcessSection />
        <IndustriesSection />
        <ResultsSection />
      </main>
    </div>
  );
}
