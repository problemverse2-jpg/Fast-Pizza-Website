import { useEffect, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "@/components/error-boundary";
import { SiteShell } from "@/components/site-shell";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { site } from "@/config/site";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import Menu from "@/pages/menu";
import NotFound from "@/pages/not-found";
import { Route, Switch, useLocation, Router as WouterRouter } from "wouter";

const queryClient = new QueryClient();

function SiteMetadata() {
  useEffect(() => {
    document.title = `${site.name} — ${site.tagline}`;
    const description = `${site.name} in ${site.city}: hot pizza, proper sides and late-night ordering until 3 AM.`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", `${site.name} — ${site.tagline}`);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    const canonical = document.querySelector('link[rel="canonical"]');
    canonical?.setAttribute("href", window.location.origin + window.location.pathname);

    const structuredData = {
      "@context": "https://schema.org",
      "@type": ["Restaurant", "LocalBusiness"],
      name: site.name,
      description,
      telephone: site.phoneE164,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address,
        addressLocality: site.city,
        addressCountry: "IN",
      },
      areaServed: site.city,
      openingHours: "Mo-Su 11:00-03:00",
      priceRange: "₹₹",
      servesCuisine: "Pizza",
      url: window.location.origin + window.location.pathname,
    };
    let schema = document.getElementById("fast-pizza-schema") as HTMLScriptElement | null;
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "fast-pizza-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(structuredData);
  }, []);
  return null;
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <SiteShell>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </SiteShell>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <SiteMetadata />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
