import { useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Clock3, MessageCircle, Phone, X } from "lucide-react";
import { site, whatsappHref } from "@/config/site";

export function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 ${inverted ? "text-[#fff8e9]" : "text-[#16353b]"}`}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-current">
        <span className="h-3 w-3 rounded-full bg-[#e8563d]" />
        <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#f3c94a]" />
      </span>
      <span className="font-display text-[1.35rem] font-extrabold tracking-[-0.07em]">{site.shortName}<i className="not-italic text-[#e8563d]">.</i></span>
    </span>
  );
}

export function OrderButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex ${compact ? "gap-2" : "flex-col gap-3 sm:flex-row"}`}>
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noreferrer"
        data-testid="link-order-whatsapp"
        className={`group inline-flex items-center justify-center gap-2 rounded-full bg-[#e8563d] px-5 py-3 font-mono-ui text-[11px] font-medium uppercase tracking-[0.08em] text-[#fff8e9] shadow-[4px_4px_0_#16353b] transition-transform hover:-translate-y-0.5 active:translate-y-0 ${compact ? "px-3 py-2 text-[10px]" : ""}`}
      >
        <MessageCircle className="h-4 w-4" />
        <span>Order on WhatsApp</span>
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
      <a
        href={`tel:${site.phoneE164}`}
        data-testid="link-call-order"
        className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#16353b] px-5 py-3 font-mono-ui text-[11px] font-medium uppercase tracking-[0.08em] text-[#16353b] transition-colors hover:bg-[#16353b] hover:text-[#fff8e9] ${compact ? "px-3 py-2 text-[10px]" : ""}`}
      >
        <Phone className="h-4 w-4" />
        <span>Call to Order</span>
      </a>
    </div>
  );
}

export function SiteHeader() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/contact", label: "Find us" },
  ];
  return (
    <header className="relative z-30 border-b border-[#d5cbb9] bg-[#fff8e9]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <Link href="/" data-testid="link-brand-home" aria-label={`${site.name} home`}><BrandMark /></Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`} className={`font-mono-ui text-[10px] font-medium uppercase tracking-[0.12em] transition-colors ${location === link.href ? "text-[#e8563d]" : "text-[#5b6b6a] hover:text-[#16353b]"}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block"><OrderButtons compact /></div>
        <button onClick={() => setMenuOpen((open) => !open)} data-testid="button-toggle-navigation" aria-label="Toggle navigation" className="rounded-full border-2 border-[#16353b] p-2 md:hidden">
          {menuOpen ? <X className="h-5 w-5" /> : <span className="block h-4 w-5 border-y-2 border-[#16353b] py-1"><span className="block border-t-2 border-[#16353b]" /></span>}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-[#d5cbb9] bg-[#fff8e9] px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} data-testid={`link-mobile-${link.label.toLowerCase().replace(" ", "-")}`} className="flex items-center justify-between border-b border-[#e5dccc] py-3 font-display text-2xl text-[#16353b]">
                {link.label}<ArrowUpRight className="h-5 w-5 text-[#e8563d]" />
              </Link>
            ))}
          </nav>
          <div className="mt-4"><OrderButtons /></div>
        </div>
      )}
    </header>
  );
}

function Concierge() {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const questions = [
    ["What time are you open?", "We’re open every day from 11 AM until 3 AM."],
    ["Where do you deliver?", "Fast Pizza is in Sitapura, Jaipur. For delivery availability, message us on WhatsApp with your location."],
    ["What should I try?", "Start with the creamy garlic bread stick, then pick a pizza from the menu. Ask us on WhatsApp about today’s best pairing."],
    ["Can I ask about something else?", "For anything outside the menu, hours or location, WhatsApp the team and they can help directly."],
  ];
  return (
    <>
      {open && (
        <section className="fixed bottom-24 right-4 z-50 w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-[1.5rem] border-2 border-[#16353b] bg-[#fff8e9] shadow-[8px_8px_0_#16353b]" aria-label="Fast Pizza concierge">
          <div className="flex items-start justify-between bg-[#16353b] p-5 text-[#fff8e9]">
            <div><p className="font-mono-ui text-[10px] uppercase tracking-[0.14em] text-[#f3c94a]">Tiny concierge</p><h2 className="mt-1 font-display text-2xl">Hungry questions?</h2></div>
            <button onClick={() => setOpen(false)} data-testid="button-close-concierge" aria-label="Close concierge" className="rounded-full p-1 hover:bg-[#2d5359]"><X className="h-5 w-5" /></button>
          </div>
          <div className="p-4">
            {answer ? (
              <div className="rounded-xl bg-[#f2eadb] p-4 text-sm leading-6 text-[#315054]">
                <p>{answer}</p>
                <button onClick={() => setAnswer("")} data-testid="button-back-concierge" className="mt-3 font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#e8563d]">Ask another</button>
              </div>
            ) : (
              <div className="grid gap-2">
                {questions.map(([question, response], index) => (
                  <button key={question} onClick={() => setAnswer(response)} data-testid={`button-concierge-question-${index}`} className="flex items-center justify-between rounded-xl border border-[#d5cbb9] px-3 py-3 text-left text-sm text-[#315054] transition-colors hover:border-[#e8563d] hover:bg-[#fff1d4]">
                    {question}<ArrowUpRight className="ml-3 h-4 w-4 shrink-0 text-[#e8563d]" />
                  </button>
                ))}
              </div>
            )}
            <a href={whatsappHref("Hi Fast Pizza, I have a question.")} target="_blank" rel="noreferrer" data-testid="link-concierge-whatsapp" className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#f3c94a] px-3 py-3 font-mono-ui text-[10px] uppercase tracking-[0.08em] text-[#16353b]">
              <MessageCircle className="h-4 w-4" /> WhatsApp the team
            </a>
          </div>
        </section>
      )}
      <button onClick={() => setOpen((value) => !value)} data-testid="button-open-concierge" aria-label="Open concierge" className="fixed bottom-5 right-4 z-40 flex items-center gap-2 rounded-full border-2 border-[#16353b] bg-[#f3c94a] px-4 py-3 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#16353b] shadow-[4px_4px_0_#16353b] transition-transform hover:-translate-y-1">
        <span className="pulse-dot h-2 w-2 rounded-full bg-[#e8563d]" /> Ask the counter
      </button>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#16353b] px-5 pb-28 pt-14 text-[#fff8e9] md:pb-14 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 border-b border-[#365960] pb-10 md:flex-row">
          <div><BrandMark inverted /><p className="mt-4 max-w-xs text-sm leading-6 text-[#b5c7c1]">{site.tagline} Built for Sitapura nights, quick breaks and hungry homes.</p></div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-[#b5c7c1]">
            <Link href="/menu" data-testid="link-footer-menu" className="hover:text-[#f3c94a]">Menu</Link>
            <Link href="/contact" data-testid="link-footer-contact" className="hover:text-[#f3c94a]">Find us</Link>
            <a href={`tel:${site.phoneE164}`} data-testid="link-footer-call" className="hover:text-[#f3c94a]">Call to Order</a>
            <a href={whatsappHref()} target="_blank" rel="noreferrer" data-testid="link-footer-whatsapp" className="hover:text-[#f3c94a]">WhatsApp</a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-5 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#8ca9a4] sm:flex-row">
          <span>© {new Date().getFullYear()} {site.name}</span><span>Prices shown are placeholders*</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return <div className="min-h-[100dvh] bg-[#fff8e9] text-[#16353b]"><SiteHeader />{children}<SiteFooter /><Concierge /><div className="fixed bottom-0 left-0 right-0 z-30 border-t border-[#16353b]/20 bg-[#fff8e9]/95 p-3 backdrop-blur-md md:hidden"><OrderButtons compact /></div></div>;
}

export function InfoPill({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center gap-2 rounded-full border border-[#d5cbb9] bg-[#fff8e9] px-3 py-2 font-mono-ui text-[10px] uppercase tracking-[0.09em] text-[#526b6d]">{children}</span>;
}

export function HoursPill() {
  return <InfoPill><Clock3 className="h-3.5 w-3.5 text-[#e8563d]" /> Open until 3 AM</InfoPill>;
}