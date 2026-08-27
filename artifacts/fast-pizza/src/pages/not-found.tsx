import { ArrowLeft, SearchX } from "lucide-react";
import { Link } from "wouter";
import { site } from "@/config/site";

export default function NotFound() {
  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-[#f3c94a] px-5 py-20">
      <div className="w-full max-w-xl rounded-[1.5rem] border-2 border-[#16353b] bg-[#fff8e9] p-8 shadow-[8px_8px_0_#16353b] md:p-12">
        <SearchX className="h-10 w-10 text-[#e8563d]" />
        <p className="mt-8 font-mono-ui text-[10px] uppercase tracking-[0.15em] text-[#e8563d]">Wrong turn</p>
        <h1 className="mt-3 font-display text-6xl leading-[.85] tracking-[-0.08em] text-[#16353b]">This slice<br />is missing.</h1>
        <p className="mt-6 max-w-sm text-sm leading-6 text-[#526b6d]">That page is not on the {site.name} board. Head back home or browse the menu instead.</p>
        <Link href="/" data-testid="link-not-found-home" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#16353b] px-5 py-3 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#fff8e9]"><ArrowLeft className="h-4 w-4" /> Back home</Link>
      </div>
    </main>
  );
}