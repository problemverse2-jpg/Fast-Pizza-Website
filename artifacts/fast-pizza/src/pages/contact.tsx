import { useState } from "react";
import { ArrowUpRight, Check, Clock3, Copy, ExternalLink, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, mapsHref, whatsappHref } from "@/config/site";
import { OrderButtons } from "@/components/site-shell";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copyAddress = async () => {
    await navigator.clipboard?.writeText(site.address);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };
  return (
    <main>
      <section className="paper-grain overflow-hidden bg-[#e8563d] px-5 py-16 text-[#fff8e9] lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.16em] text-[#f8db85]">Come find the bright sign</p>
          <div className="mt-5 grid gap-8 md:grid-cols-[1fr_.7fr] md:items-end"><h1 className="font-display text-[clamp(4rem,11vw,9rem)] leading-[.78] tracking-[-0.1em]">Meet us<br /><span className="text-[#16353b]">in the</span><br />night.</h1><p className="max-w-sm text-lg leading-7 text-[#ffe9d4]">Fast Pizza is in Sitapura, Jaipur. Order direct, call ahead, or drop a pin to find your way here.</p></div>
        </div>
      </section>
      <section className="px-5 py-14 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-[1.5rem] border-2 border-[#16353b] bg-[#dce7df] p-7 shadow-[7px_7px_0_#16353b] md:p-10">
            <div className="flex items-start justify-between gap-4"><div><p className="font-mono-ui text-[10px] uppercase tracking-[0.15em] text-[#e8563d]">Location</p><h2 className="mt-3 max-w-lg font-display text-4xl leading-[.9] tracking-[-0.06em] text-[#16353b] md:text-6xl">{site.city}</h2></div><MapPin className="h-9 w-9 shrink-0 text-[#e8563d]" /></div>
            <p className="mt-8 max-w-md text-lg leading-7 text-[#315054]">{site.address}</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href={mapsHref} target="_blank" rel="noreferrer" data-testid="link-open-map" className="inline-flex items-center gap-2 rounded-full bg-[#16353b] px-5 py-3 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#fff8e9]">Open in Maps <ExternalLink className="h-4 w-4" /></a><button onClick={copyAddress} data-testid="button-copy-address" className="inline-flex items-center gap-2 rounded-full border-2 border-[#16353b] px-5 py-3 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#16353b]">{copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}{copied ? "Copied" : "Copy address"}</button></div>
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-[#9ab0a5] pt-6"><div><p className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#e8563d]">Call</p><a href={`tel:${site.phoneE164}`} data-testid="link-contact-phone" className="mt-2 block text-sm text-[#16353b] hover:text-[#e8563d]">{site.phone}</a></div><div><p className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#e8563d]">WhatsApp</p><a href={whatsappHref()} target="_blank" rel="noreferrer" data-testid="link-contact-whatsapp-number" className="mt-2 block text-sm text-[#16353b] hover:text-[#e8563d]">Message the team</a></div></div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-[1.5rem] bg-[#16353b] p-7 text-[#fff8e9] md:p-10"><div className="flex items-center gap-3"><span className="pulse-dot h-3 w-3 rounded-full bg-[#f3c94a]" /><p className="font-mono-ui text-[10px] uppercase tracking-[0.15em] text-[#f3c94a]">Hours</p></div><p className="mt-8 font-display text-4xl leading-[.9] tracking-[-0.06em]">{site.hours}</p><p className="mt-6 text-sm leading-6 text-[#b5c7c1]">Late shift? That’s the point. For holiday hours or delivery availability, ask on WhatsApp.</p></div>
            <div className="rounded-[1.5rem] border-2 border-[#d5cbb9] bg-[#fff8e9] p-7 md:p-10"><p className="font-mono-ui text-[10px] uppercase tracking-[0.15em] text-[#e8563d]">Direct is easy</p><h2 className="mt-3 font-display text-4xl leading-[.9] tracking-[-0.06em] text-[#16353b]">No form.<br />No waiting.</h2><div className="mt-7"><OrderButtons /></div></div>
          </div>
        </div>
      </section>
      <section className="bg-[#f3c94a] px-5 py-16 lg:px-10"><div className="mx-auto max-w-7xl"><div className="flex items-center gap-3"><Clock3 className="h-5 w-5 text-[#e8563d]" /><p className="font-mono-ui text-[10px] uppercase tracking-[0.15em] text-[#e8563d]">Before you message</p></div><div className="mt-8 grid gap-8 md:grid-cols-3"><div><p className="font-display text-3xl text-[#16353b]">01 / menu</p><p className="mt-2 text-sm leading-6 text-[#315054]">Pick what looks good, then send the item name on WhatsApp.</p></div><div><p className="font-display text-3xl text-[#16353b]">02 / location</p><p className="mt-2 text-sm leading-6 text-[#315054]">Share your area so the team can confirm delivery availability.</p></div><div><p className="font-display text-3xl text-[#16353b]">03 / confirm</p><p className="mt-2 text-sm leading-6 text-[#315054]">The team confirms current prices and availability directly.</p></div></div></div></section>
      <section className="bg-[#fff8e9] px-5 py-16 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 border-b-2 border-[#16353b] pb-10 sm:flex-row sm:items-end"><div><p className="font-mono-ui text-[10px] uppercase tracking-[0.15em] text-[#e8563d]">Still deciding?</p><h2 className="mt-3 font-display text-5xl leading-[.85] tracking-[-0.07em] text-[#16353b]">Send a hello.<br /><span className="text-[#e8563d]">We’ll take it from there.</span></h2></div><a href={whatsappHref("Hi Fast Pizza, I'm in Sitapura and would like to order.")} target="_blank" rel="noreferrer" data-testid="link-contact-final-whatsapp" className="inline-flex items-center gap-2 rounded-full bg-[#e8563d] px-5 py-3 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#fff8e9] shadow-[4px_4px_0_#16353b]">Start WhatsApp <MessageCircle className="h-4 w-4" /><ArrowUpRight className="h-4 w-4" /></a></div></section>
    </main>
  );
}