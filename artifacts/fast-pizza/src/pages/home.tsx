import { ArrowDown, ArrowUpRight, Clock3, MapPin, MessageCircle, MoveRight, Phone, Star } from "lucide-react";
import { Link } from "wouter";
import { menuItems, site, whatsappHref } from "@/config/site";
import { HoursPill, InfoPill, OrderButtons } from "@/components/site-shell";

const featured = menuItems.filter((item) => item.featured).slice(0, 3);

function PizzaGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-[min(76vw,440px)] float-slow">
      <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-[#f3c94a]/60" />
      <div className="absolute inset-[8%] rounded-full bg-[#f3c94a] shadow-[10px_12px_0_#e8563d]">
        <div className="absolute inset-[7%] rounded-full border-[3px] border-[#16353b]/20 bg-[#df7847]">
          <div className="absolute inset-[8%] rounded-full border-[18px] border-[#f7da74] bg-[#e7a249]">
            {["left-1/4 top-1/4", "right-1/4 top-[18%]", "left-[18%] bottom-1/4", "right-[22%] bottom-[20%]", "left-1/2 top-1/2"].map((position, index) => (
              <span key={index} className={`absolute ${position} h-8 w-8 rounded-full border-2 border-[#ba583d] bg-[#e8563d] shadow-[2px_2px_0_#ba583d] md:h-11 md:w-11`} />
            ))}
            <span className="absolute left-[46%] top-[15%] h-16 w-3 rotate-45 rounded-full bg-[#4e895c]" />
            <span className="absolute bottom-[18%] right-[39%] h-14 w-3 -rotate-[35deg] rounded-full bg-[#4e895c]" />
            <span className="absolute left-[30%] top-[52%] h-12 w-3 rotate-[75deg] rounded-full bg-[#4e895c]" />
          </div>
        </div>
      </div>
      <span className="absolute -right-2 top-1/4 rounded-full bg-[#16353b] px-3 py-2 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#f3c94a] shadow-[4px_4px_0_#e8563d] md:-right-8">hot & ready</span>
      <span className="absolute -bottom-2 left-1/4 rounded-full border-2 border-[#16353b] bg-[#fff8e9] px-3 py-2 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#16353b]">made for now</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="overflow-hidden border-b border-[#16353b] bg-[#e8563d] px-5 py-2.5 text-center font-mono-ui text-[10px] uppercase tracking-[0.15em] text-[#fff8e9]">
        <div className="marquee-track flex w-max gap-12"><span>Late night pizza in {site.city}</span><span>Garlic knots worth the detour</span><span>Open till 3 AM</span><span>Late night pizza in {site.city}</span><span>Garlic knots worth the detour</span><span>Open till 3 AM</span></div>
      </div>
      <section className="paper-grain relative overflow-hidden bg-[#16353b] px-5 pb-20 pt-16 text-[#fff8e9] lg:px-10 lg:pb-28 lg:pt-24">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div className="fade-up">
            <div className="mb-7 flex flex-wrap gap-2"><span className="inline-flex items-center gap-2 rounded-full bg-[#f3c94a] px-3 py-2 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#16353b]"><span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#e8563d]" /> Sitapura, Jaipur</span><span className="inline-flex items-center gap-2 rounded-full border border-[#6a8583] px-3 py-2 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#d1dfd5]"><Clock3 className="h-3.5 w-3.5 text-[#f3c94a]" /> Till 3 AM</span></div>
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-[#f3c94a]">The fast answer to “what are we eating?”</p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(4.7rem,13vw,10.5rem)] font-extrabold leading-[.78] tracking-[-0.1em] text-[#fff8e9]">FAST<br /><span className="text-[#e8563d]">PIZZA</span><i className="text-[#f3c94a]">.</i></h1>
            <p className="mt-8 max-w-md text-balance text-lg leading-7 text-[#c8d6ce]">Hot, loaded, and easy to order. For hostel runs, hospital shifts, local cravings and every “just one more slice” situation.</p>
            <div className="mt-8"><OrderButtons /></div>
            <p className="mt-4 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#8fa7a1]">Message or call to confirm today’s availability and prices.</p>
          </div>
          <div className="fade-up fade-up-delay-2 relative"><PizzaGraphic /><div className="absolute -bottom-12 left-0 hidden max-w-[170px] -rotate-6 rounded-xl border border-[#6a8583] p-3 font-mono-ui text-[10px] uppercase leading-4 tracking-[0.08em] text-[#c8d6ce] sm:block">Menu-board energy.<br /><span className="text-[#f3c94a]">No brochure talk.</span></div></div>
        </div>
        <a href="#quick-picks" data-testid="link-scroll-quick-picks" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[0.13em] text-[#9eb5ae] lg:flex">Scroll hungry <ArrowDown className="h-4 w-4" /></a>
      </section>

      <section className="border-b border-[#d5cbb9] bg-[#fff8e9] px-5 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <p className="max-w-lg text-sm leading-6 text-[#526b6d]">Built for the hours when hunger gets specific. We keep ordering simple: check the menu, then message or call.</p>
          <div className="flex flex-wrap gap-2"><HoursPill /><InfoPill><MapPin className="h-3.5 w-3.5 text-[#e8563d]" /> {site.city}</InfoPill></div>
        </div>
      </section>

      <section id="quick-picks" className="px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-mono-ui text-[10px] uppercase tracking-[0.16em] text-[#e8563d]">The quick picks</p><h2 className="mt-3 max-w-xl font-display text-5xl leading-[.9] tracking-[-0.06em] text-[#16353b] md:text-7xl">Don’t overthink<br /><span className="text-[#e8563d]">the first bite.</span></h2></div><Link href="/menu" data-testid="link-home-full-menu" className="group inline-flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#16353b] hover:text-[#e8563d]">See full menu <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featured.map((item, index) => (
              <article key={item.id} className={`lift relative overflow-hidden rounded-[1.25rem] border-2 border-[#16353b] p-6 ${index === 1 ? "bg-[#e8563d] text-[#fff8e9] md:translate-y-8" : index === 2 ? "bg-[#f3c94a]" : "bg-[#dce7df]"}`}>
                <div className="flex items-start justify-between"><span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] opacity-70">0{index + 1} / pick</span><Star className="h-5 w-5" /></div>
                <h3 className="mt-16 max-w-[13rem] font-display text-4xl leading-[.92] tracking-[-0.05em]">{item.name}</h3>
                <p className="mt-4 max-w-[16rem] text-sm leading-6 opacity-80">{item.description}</p>
                <div className="mt-7 flex items-center justify-between border-t border-current/20 pt-4"><span className="font-mono-ui text-sm">{item.price}</span><a href={whatsappHref(`Hi ${site.name}, I'd like to ask about ${item.name}.`)} target="_blank" rel="noreferrer" data-testid={`link-quick-pick-${item.id}`} className="inline-flex items-center gap-1 font-mono-ui text-[10px] uppercase tracking-[0.1em]">Ask about it <ArrowUpRight className="h-3.5 w-3.5" /></a></div>
              </article>
            ))}
          </div>
          <p className="mt-10 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#7d8c89]">* Every price shown is a placeholder pending confirmation with the client.</p>
        </div>
      </section>

      <section className="overflow-hidden bg-[#f3c94a] px-5 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><p className="font-mono-ui text-[10px] uppercase tracking-[0.15em] text-[#e8563d]">Why people remember it</p><h2 className="mt-4 font-display text-5xl leading-[.88] tracking-[-0.07em] text-[#16353b] md:text-7xl">Garlic<br />knots<br /><span className="text-[#e8563d]">first.</span></h2></div>
          <div className="lg:pb-2"><p className="max-w-2xl text-2xl leading-tight tracking-[-0.03em] text-[#315054] md:text-4xl">The pizzas are the main event. The garlic bread sticks are the reason the order gets repeated.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/menu#sides" data-testid="link-home-garlic-sides" className="inline-flex items-center gap-2 rounded-full bg-[#16353b] px-5 py-3 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#fff8e9]">Find the sides <MoveRight className="h-4 w-4" /></Link><a href={whatsappHref("Hi Fast Pizza, tell me about the garlic bread sticks.")} target="_blank" rel="noreferrer" data-testid="link-home-ask-garlic" className="inline-flex items-center gap-2 rounded-full border-2 border-[#16353b] px-5 py-3 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#16353b]">Ask on WhatsApp <MessageCircle className="h-4 w-4" /></a></div></div>
        </div>
      </section>

      <section className="bg-[#dce7df] px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div><p className="font-mono-ui text-[10px] uppercase tracking-[0.15em] text-[#e8563d]">One menu, many missions</p><h2 className="mt-4 max-w-xl font-display text-5xl leading-[.88] tracking-[-0.07em] text-[#16353b] md:text-7xl">Made for the<br /><span className="text-[#e8563d]">in-between.</span></h2><div className="mt-8 grid max-w-xl grid-cols-2 gap-x-8 gap-y-5 border-t border-[#9ab0a5] pt-6 text-sm text-[#315054]"><p><span className="mb-1 block font-mono-ui text-[10px] uppercase text-[#e8563d]">01 / students</span>Group order, one quick message, no ceremony.</p><p><span className="mb-1 block font-mono-ui text-[10px] uppercase text-[#e8563d]">02 / visitors</span>A warm meal between long hospital hours.</p><p><span className="mb-1 block font-mono-ui text-[10px] uppercase text-[#e8563d]">03 / locals</span>Reliable comfort, close to home in Sitapura.</p><p><span className="mb-1 block font-mono-ui text-[10px] uppercase text-[#e8563d]">04 / late shift</span>Open until 3 AM when most kitchens are quiet.</p></div></div>
          <div className="relative rounded-[2rem] border-2 border-[#16353b] bg-[#fff8e9] p-8 shadow-[8px_8px_0_#16353b]"><div className="absolute -right-4 -top-4 rounded-full bg-[#e8563d] p-4 text-[#fff8e9]"><Clock3 className="h-7 w-7" /></div><p className="font-mono-ui text-[10px] uppercase tracking-[0.16em] text-[#e8563d]">The late-night promise</p><p className="mt-8 font-display text-4xl leading-[.95] tracking-[-0.06em] text-[#16353b]">You bring the<br /><span className="text-[#e8563d]">craving.</span><br />We’ll bring the<br /><span className="text-[#f0b925]">hot stuff.</span></p><div className="mt-8 border-t border-[#d5cbb9] pt-5 font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#6c7c78]">Open every day<br /><strong className="mt-1 block text-[#16353b]">11 AM — 3 AM</strong></div></div>
        </div>
      </section>

      <section className="bg-[#fff8e9] px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border-y-2 border-[#16353b] py-10 md:flex-row md:items-center md:justify-between"><div><p className="font-mono-ui text-[10px] uppercase tracking-[0.16em] text-[#e8563d]">Ready when you are</p><h2 className="mt-3 font-display text-5xl leading-[.9] tracking-[-0.06em] md:text-6xl">The fastest route<br />to <span className="text-[#e8563d]">pizza.</span></h2></div><div className="flex flex-col gap-4"><OrderButtons /><p className="max-w-sm text-xs leading-5 text-[#6c7c78]">Ordering is handled directly by the team. Prices and availability are confirmed on WhatsApp or by phone.</p></div></div>
      </section>
    </main>
  );
}