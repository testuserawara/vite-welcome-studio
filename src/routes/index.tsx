import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Velkommen" },
      {
        name: "description",
        content: "Et varmt og enkelt startpunkt for din nye app.",
      },
      { property: "og:title", content: "Velkommen" },
      {
        property: "og:description",
        content: "Et varmt og enkelt startpunkt for din nye app.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 text-foreground">
      {/* Myke, varme lyssirker i bakgrunnen */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--color-accent), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 right-[-6rem] h-[30rem] w-[30rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--color-chart-4), transparent)" }}
      />

      <div className="relative z-10 max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Nytt prosjekt
        </span>

        <h1 className="mt-8 font-display text-6xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          Velkommen<span className="text-primary">.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
          Dette er startpunktet for din nye app. Si fra hva du vil lage, så bygger
          vi det videre sammen — side for side.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#kom-i-gang"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Kom i gang
          </a>
          <a
            href="#slik-fungerer-det"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Slik fungerer det
          </a>
        </div>

        <p className="mt-16 font-display text-sm italic text-muted-foreground">
          «Alle store ting starter med en velkomstside.»
        </p>
      </div>
    </main>
  );
}
