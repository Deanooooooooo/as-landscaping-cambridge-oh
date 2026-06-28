"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import {
  ArrowUpRight,
  CheckCircle2,
  Flower2,
  Leaf,
  MessageSquareText,
  Phone,
  Send,
  Shovel,
  Snowflake,
  Sparkles,
  Trees,
} from "lucide-react";
import { FormEvent, useEffect, useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assets = (name: string) => `${basePath}/assets/${name}`;

const businessName = "A&S Landscaping";
const facebookUrl = "https://www.facebook.com/people/AS-landscaping/61587562415537/";
const location = "Cambridge, OH";
const serviceArea = "Cambridge and nearby Ohio homes";
const phoneDisplay = "740-801-2718";
const phoneHref = "tel:7408012718";

const services = [
  {
    icon: Leaf,
    title: "Lawn mowing",
    body: "Regular cuts that keep the yard tidy, even and easier to maintain through the growing season.",
  },
  {
    icon: Sparkles,
    title: "Trimming and edging",
    body: "Clean edges around walks, drives, beds and fence lines so the whole property looks sharper from the street.",
  },
  {
    icon: Trees,
    title: "Bush and shrub trimming",
    body: "Overgrowth cut back, entryways opened up and shrubs shaped so the house looks cared for again.",
  },
  {
    icon: Snowflake,
    title: "Snow removal",
    body: "Winter help for driveways and walkways when a clean path matters before the day gets moving.",
  },
];

const gallery = [
  {
    src: "hero-lawn.png",
    title: "Fresh lawn cuts",
    body: "Mowing, clean lines and weekly upkeep for homes that need a dependable local hand.",
  },
  {
    src: "edgework.png",
    title: "Sharper edges",
    body: "Driveway, path and curb edges kept crisp so the yard feels finished, not just cut.",
  },
  {
    src: "shrub-trim.png",
    title: "Bush trimming",
    body: "Shrubs shaped back around paths, porches and windows for a cleaner first impression.",
  },
  {
    src: "fall-cleanup.png",
    title: "Seasonal cleanup",
    body: "Leaf cleanup and yard resets when the season changes and the outside needs a proper tidy.",
  },
  {
    src: "snow-removal.png",
    title: "Winter paths",
    body: "Driveways and walkways cleared after snow so the property stays usable in cold weather.",
  },
];

const proof = [
  "Mowing, trimming, bush work and snow removal are easy to request from one place.",
  "A clear request gives A&S the job type, address area, timing and details from the start.",
  "The offer stays focused on practical outdoor help for Cambridge homes.",
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {
  const main = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.32], [0, -54]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false });
    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".gsap-rise", {
        y: 40,
        opacity: 0,
        duration: 0.78,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".services-grid", start: "top 72%" },
      });

      const stage = document.querySelector<HTMLElement>(".gallery-stage");
      const track = document.querySelector<HTMLElement>(".gallery-track");
      if (stage && track && window.matchMedia("(min-width: 768px)").matches) {
        const travel = () => Math.max(0, track.scrollWidth - stage.clientWidth);
        gsap.to(track, {
          x: () => -travel(),
          ease: "none",
          scrollTrigger: {
            trigger: ".gallery-pin",
            start: "top top",
            end: () => `+=${travel() + 620}`,
            scrub: 0.75,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      }
    }, main);
    return () => ctx.revert();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "A&S Landscaping quote request",
      "",
      `Name: ${data.get("name") || ""}`,
      `Best contact: ${data.get("contact") || ""}`,
      `Location: ${data.get("location") || ""}`,
      `Service: ${data.get("service") || ""}`,
      `Timing: ${data.get("timing") || ""}`,
      `Details: ${data.get("details") || ""}`,
    ];
    const message = lines.join("\n");
    void navigator.clipboard?.writeText(message);
    window.location.href = `sms:7408012718?&body=${encodeURIComponent(message)}`;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    image: assets("hero-lawn.png"),
    url: "https://deanooooooooo.github.io/as-landscaping-cambridge-oh/",
    telephone: phoneDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cambridge",
      addressRegion: "OH",
      addressCountry: "US",
    },
    areaServed: ["Cambridge", "Guernsey County", "Ohio"],
    sameAs: [facebookUrl],
  };

  return (
    <main ref={main} className="min-h-screen overflow-hidden text-[#172116]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/12 bg-[#132015]/92 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-lg bg-white shadow-sm">
              <Image src={assets("as-profile.jpg")} alt="A&S Landscaping profile image" fill className="object-cover" />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-base font-black uppercase">A&amp;S Landscaping</span>
              <span className="text-sm font-bold text-white/68">Cambridge lawn care</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-base font-black text-white/86 md:flex">
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#gallery">Gallery</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
          <a href={phoneHref}>
            <Button className="min-h-11 rounded-lg bg-[#9ed15d] px-4 text-[#132015] hover:bg-white">
              <Phone size={17} /> <span className="hidden sm:inline">Call {phoneDisplay}</span><span className="sm:hidden">Call</span>
            </Button>
          </a>
        </div>
      </header>

      <section id="top" className="hero-clip relative min-h-[1050px] bg-[#132015] pt-24 text-white md:min-h-[870px]">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image src={assets("hero-lawn.png")} alt="Freshly mowed residential lawn with clean edging" fill priority className="object-cover opacity-90" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#132015] via-[#132015]/88 to-[#132015]/38" />
        <div className="room-vignette absolute inset-0" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-28 pt-16 sm:px-6 md:grid-cols-[1.02fr_0.98fr] md:items-center md:pt-24">
          <div>
            <div className="max-w-4xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/18 bg-black/58 px-4 py-2 text-xs font-black uppercase tracking-normal text-white shadow-[0_14px_40px_rgba(0,0,0,0.35)] backdrop-blur">
                <Flower2 size={16} /> Lawn care and yard help in {location}
              </p>
              <h1 className="max-w-4xl text-[clamp(2.75rem,5.45vw,5.55rem)] font-black leading-[0.97]">
                Cleaner lawns, sharper edges and less weekend yard stress.
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/80">
                A&amp;S Landscaping helps Cambridge homeowners keep grass, bushes, walkways and winter access under control with straightforward outdoor work.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={phoneHref}>
                  <Button className="rounded-lg bg-[#9ed15d] text-[#132015] hover:bg-white">
                    <Phone size={18} /> Call {phoneDisplay}
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="secondary" className="rounded-lg border-white/18 bg-white/10 text-white hover:bg-white/18">
                    <MessageSquareText size={18} /> Start a quote request
                  </Button>
                </a>
                <a href="#gallery">
                  <Button variant="secondary" className="rounded-lg border-white/18 bg-white/10 text-white hover:bg-white/18">
                    View services <ArrowUpRight size={18} />
                  </Button>
                </a>
              </div>
              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                {["Mowing", "Bush trimming", "Snow removal"].map((item) => (
                  <span key={item} className="rounded-lg border border-white/14 bg-black/34 px-4 py-3 text-sm font-black text-white/84 backdrop-blur">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <aside className="rounded-2xl border border-white/14 bg-[#132015]/90 p-5 shadow-[0_32px_110px_rgba(0,0,0,0.48)] backdrop-blur-2xl">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase text-[#9ed15d]">Quick quote request</p>
                  <h2 className="mt-1 text-3xl font-black leading-tight">Send the details before the yard gets away from you.</h2>
                </div>
                <MessageSquareText className="text-[#9ed15d]" size={30} />
              </div>
              <form onSubmit={handleSubmit} className="grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-sm font-black text-white/78">Name<input className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-[#172116] outline-none ring-[#9ed15d]/45 transition placeholder:text-[#172116]/42 focus:ring-4" name="name" placeholder="Your name" required /></label>
                  <label className="grid gap-1.5 text-sm font-black text-white/78">Best contact<input className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-[#172116] outline-none ring-[#9ed15d]/45 transition placeholder:text-[#172116]/42 focus:ring-4" name="contact" placeholder="Phone or email" required /></label>
                </div>
                <label className="grid gap-1.5 text-sm font-black text-white/78">Location<input className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-[#172116] outline-none ring-[#9ed15d]/45 transition placeholder:text-[#172116]/42 focus:ring-4" name="location" placeholder="Street or area in Cambridge" /></label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-sm font-black text-white/78">Service<select className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-[#172116] outline-none ring-[#9ed15d]/45 transition focus:ring-4" name="service" defaultValue="Lawn mowing"><option>Lawn mowing</option><option>Trimming and edging</option><option>Bush trimming</option><option>Yard cleanup</option><option>Snow removal</option><option>Multiple jobs</option></select></label>
                  <label className="grid gap-1.5 text-sm font-black text-white/78">Timing<input className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-[#172116] outline-none ring-[#9ed15d]/45 transition placeholder:text-[#172116]/42 focus:ring-4" name="timing" placeholder="This week, ASAP..." /></label>
                </div>
                <label className="grid gap-1.5 text-sm font-black text-white/78">Details<textarea className="min-h-28 rounded-lg border border-white/12 bg-white px-3 py-3 text-base font-bold text-[#172116] outline-none ring-[#9ed15d]/45 transition placeholder:text-[#172116]/42 focus:ring-4" name="details" placeholder="Tell them what needs cutting, trimming, clearing or shovelling." required /></label>
                <Button className="min-h-13 rounded-lg bg-[#9ed15d] text-base font-black text-[#132015] hover:bg-white">
                  <Send size={18} /> Copy details and text A&amp;S
                </Button>
                <p className="text-sm font-semibold leading-6 text-white/62">This copies your request and opens a text to {phoneDisplay}. You can also call if the job is urgent.</p>
              </form>
            </aside>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f3f5eb] px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase text-[#53751e]">Outdoor services</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">The jobs that make a yard feel handled.</h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-[#172116]/68">
              Good yard work is visible before anyone reaches the door: even grass, clean edges, shaped bushes and paths that stay usable when the weather turns.
            </p>
          </Reveal>
          <div className="services-grid mt-12 grid gap-5 md:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="gsap-rise rounded-lg border-0 bg-white shadow-premium">
                <CardContent className="p-6">
                  <service.icon className="mb-7 text-[#53751e]" size={34} />
                  <h3 className="text-2xl font-black">{service.title}</h3>
                  <p className="mt-4 text-base font-semibold leading-7 text-[#172116]/64">{service.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery-pin bg-[#132015] px-4 py-24 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase text-[#9ed15d]">Service gallery</p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">A premium look at the work customers actually ask for.</h2>
            </div>
            <a href="#contact">
              <Button variant="secondary" className="rounded-lg bg-white text-[#132015] hover:bg-[#9ed15d]">
                Request a quote <ArrowUpRight size={18} />
              </Button>
            </a>
          </Reveal>
          <div className="gallery-stage mt-12 overflow-hidden">
            <div className="gallery-track flex flex-col gap-5 md:w-max md:flex-row md:gap-6">
              {gallery.map((item) => (
                <article key={item.src} className="group relative min-h-[420px] overflow-hidden rounded-lg bg-white text-white shadow-[0_26px_80px_rgba(0,0,0,0.32)] md:h-[590px] md:w-[430px]">
                  <Image src={assets(item.src)} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132015]/92 via-[#132015]/20 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-3xl font-black">{item.title}</h3>
                    <p className="mt-3 max-w-sm text-base font-semibold leading-7 text-white/78">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="bg-white px-4 py-24 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.92fr_1.08fr] md:items-center">
          <Reveal>
            <div className="relative min-h-[560px] overflow-hidden rounded-lg bg-[#132015] shadow-premium">
              <Image src={assets("shrub-trim.png")} alt="Neatly trimmed shrubs beside a home" fill className="object-cover opacity-92" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#132015]/82 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-sm font-black uppercase text-[#9ed15d]">Cambridge yard care</p>
                <h2 className="mt-2 text-4xl font-black">A cleaner property starts with the small outdoor jobs getting done.</h2>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase text-[#53751e]">Why it works</p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">The fastest path from messy yard to booked job.</h2>
              <p className="mt-5 text-lg font-semibold leading-8 text-[#172116]/68">
                Homeowners do not need a complicated process. They need to say what is overgrown, where it is and when they want it handled.
              </p>
              <div className="mt-8 grid gap-4">
                {proof.map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-[#172116]/10 bg-[#f3f5eb] p-4">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#53751e]" size={22} />
                    <p className="font-bold leading-7 text-[#172116]/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="bg-[#e8efdc] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
              <div>
                <p className="text-sm font-black uppercase text-[#53751e]">Contact</p>
                <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">Ask A&amp;S Landscaping about yard work in Cambridge.</h2>
              </div>
              <div className="grid gap-3">
                <a className="flex items-center justify-between gap-4 rounded-lg bg-white p-5 font-black shadow-premium" href={phoneHref}>
                  <span className="flex items-center gap-3"><Phone className="text-[#53751e]" size={24} /> Call {phoneDisplay}</span>
                  <ArrowUpRight size={22} />
                </a>
                <a className="flex items-center justify-between gap-4 rounded-lg bg-white p-5 font-black shadow-premium" href={`sms:7408012718`}>
                  <span className="flex items-center gap-3"><MessageSquareText className="text-[#53751e]" size={24} /> Text for a quote</span>
                  <ArrowUpRight size={22} />
                </a>
                <div className="flex items-center gap-3 rounded-lg bg-white p-5 font-black shadow-premium">
                  <Shovel className="text-[#53751e]" size={24} /> {serviceArea}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#132015] px-4 py-10 text-white sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-lg bg-white">
              <Image src={assets("as-profile.jpg")} alt="A&S Landscaping profile image" fill className="object-cover" />
            </span>
            <div>
              <p className="text-lg font-black">{businessName}</p>
              <p className="text-sm font-semibold text-white/58">{location} · Lawn care and yard help</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a aria-label="Call A&S Landscaping" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white hover:bg-[#9ed15d] hover:text-[#132015]" href={phoneHref}>
              <Phone size={20} />
            </a>
            <a aria-label="Back to quote form" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white hover:bg-[#9ed15d] hover:text-[#132015]" href="#contact">
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
