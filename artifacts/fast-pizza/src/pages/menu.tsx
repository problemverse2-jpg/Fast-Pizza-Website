import { useMemo, useState } from "react";
import { ArrowUpRight, Search, SlidersHorizontal } from "lucide-react";
import { Link } from "wouter";
import { menuCategories, menuItems, site, whatsappHref } from "@/config/site";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return menuItems.filter((item) => (activeCategory === "All" || item.category === activeCategory) && (!query || `${item.name} ${item.description}`.toLowerCase().includes(query)));
  }, [activeCategory, search]);
  return (
    <main>
      <section className="paper-grain overflow-hidden bg-[#16353b] px-5 py-16 text-[#fff8e9] lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[0.14em] text-[#9eb5ae]"><Link href="/" data-testid="link-menu-breadcrumb-home" className="hover:text-[#f3c94a]">Home</Link><span>/</span><span className="text-[#f3c94a]">Menu</span></div>
          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_.7fr] md:items-end"><div><p className="font-mono-ui text-[11px] uppercase tracking-[0.17em] text-[#f3c94a]">The full board</p><h1 className="mt-4 font-display text-[clamp(4rem,11vw,8.5rem)] leading-[.78] tracking-[-0.1em]">Pick<br /><span className="text-[#e8563d]">your</span><br />thing<i className="text-[#f3c94a]">.</i></h1></div><p className="max-w-sm text-lg leading-7 text-[#c8d6ce]">From simple veg classics to loaded specials, proper sides and something cold. Message or call to order — no checkout here.</p></div>
        </div>
      </section>
      <section className="sticky top-0 z-20 border-b border-[#d5cbb9] bg-[#fff8e9]/95 px-5 py-4 backdrop-blur-md lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
            <SlidersHorizontal className="h-4 w-4 shrink-0 text-[#e8563d]" />
            {["All", ...menuCategories].map((category) => <button key={category} onClick={() => setActiveCategory(category)} data-testid={`button-category-${category.toLowerCase().replaceAll(" ", "-")}`} className={`whitespace-nowrap rounded-full border px-3 py-2 font-mono-ui text-[10px] uppercase tracking-[0.08em] transition-colors ${activeCategory === category ? "border-[#16353b] bg-[#16353b] text-[#fff8e9]" : "border-[#d5cbb9] text-[#526b6d] hover:border-[#e8563d]"}`}>{category}</button>)}
          </div>
          <label className="flex items-center gap-2 rounded-full border border-[#d5cbb9] bg-[#fff8e9] px-3 py-2 lg:w-64"><Search className="h-4 w-4 text-[#e8563d]" /><input value={search} onChange={(event) => setSearch(event.target.value)} data-testid="input-menu-search" placeholder="Search the board" className="w-full bg-transparent text-sm text-[#16353b] outline-none placeholder:text-[#8b9994]" /></label>
        </div>
      </section>
      <section className="px-5 py-14 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-3 border-b-2 border-[#16353b] pb-5 sm:flex-row sm:items-end"><div><p className="font-mono-ui text-[10px] uppercase tracking-[0.14em] text-[#e8563d]">{filtered.length} things on the board</p><h2 className="mt-2 font-display text-4xl tracking-[-0.06em] text-[#16353b]">{activeCategory === "All" ? "Everything, in one place." : activeCategory}</h2></div><p className="max-w-xs text-right font-mono-ui text-[10px] uppercase leading-5 tracking-[0.08em] text-[#7d8c89]">* Prices are placeholders<br />and need client confirmation.</p></div>
          {filtered.length ? (
            <div className="grid gap-x-8 md:grid-cols-2">
              {filtered.map((item, index) => (
                <article id={item.category === "Sides" ? "sides" : undefined} key={item.id} className="group flex min-h-[150px] flex-col justify-between border-b border-[#d5cbb9] py-6 first:pt-0 md:even:pl-8">
                  <div className="flex items-start justify-between gap-5"><div><div className="flex flex-wrap items-center gap-2"><h3 className="font-display text-2xl tracking-[-0.04em] text-[#16353b] transition-colors group-hover:text-[#e8563d]">{item.name}</h3>{item.tag && <span className="rounded-full bg-[#f3c94a] px-2 py-1 font-mono-ui text-[9px] uppercase tracking-[0.08em] text-[#16353b]">{item.tag}</span>}</div><p className="mt-2 max-w-sm text-sm leading-6 text-[#667875]">{item.description}</p></div><span className="shrink-0 font-mono-ui text-sm text-[#e8563d]">{item.price}</span></div>
                  <div className="mt-5 flex items-center justify-between"><span className="font-mono-ui text-[9px] uppercase tracking-[0.1em] text-[#9ba8a0]">{String(index + 1).padStart(2, "0")} / {item.category}</span><a href={whatsappHref(`Hi ${site.name}, I'd like to ask about ${item.name} (${item.price}).`)} target="_blank" rel="noreferrer" data-testid={`link-menu-order-${item.id}`} className="inline-flex items-center gap-1 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#16353b] opacity-70 transition-opacity hover:text-[#e8563d] hover:opacity-100">Ask about it <ArrowUpRight className="h-3.5 w-3.5" /></a></div>
                </article>
              ))}
            </div>
          ) : <div className="rounded-2xl border-2 border-dashed border-[#b8c3ba] p-12 text-center"><p className="font-display text-3xl text-[#16353b]">Nothing by that name.</p><p className="mt-2 text-sm text-[#667875]">Try “paneer”, “garlic” or “burger”.</p><button onClick={() => setSearch("")} data-testid="button-clear-menu-search" className="mt-5 rounded-full bg-[#e8563d] px-4 py-2 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#fff8e9]">Clear search</button></div>}
        </div>
      </section>
      <section className="bg-[#f3c94a] px-5 py-14 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><p className="font-mono-ui text-[10px] uppercase tracking-[0.15em] text-[#e8563d]">Need a nudge?</p><h2 className="mt-2 font-display text-4xl leading-none tracking-[-0.06em] text-[#16353b]">Ask the counter.</h2></div><a href={whatsappHref("Hi Fast Pizza, I'm looking at the menu. What would you recommend?")} target="_blank" rel="noreferrer" data-testid="link-menu-recommendation" className="inline-flex items-center gap-2 rounded-full bg-[#16353b] px-5 py-3 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#fff8e9]">WhatsApp for a recommendation <ArrowUpRight className="h-4 w-4" /></a></div></section>
    </main>
  );
}