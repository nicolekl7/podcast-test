import SiteNav from "@/components/SiteNav";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import StreamBadges from "@/components/StreamBadges";
import ChapterNav from "@/components/ChapterNav";
import TranscriptSection from "@/components/TranscriptSection";
import heroImage from "@/assets/hero-datacenter.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <ScrollProgressBar />

      {/* Sticky Breadcrumb + Title */}
      <div className="sticky top-[56px] z-30 bg-background pb-4 pt-2">
        <div id="stream-badges" className="max-w-[1200px] mx-auto px-6 sm:px-10 scroll-mt-10">
          <nav className="text-xs tracking-widest uppercase text-muted-foreground pt-4 pb-3">
            <a href="https://www.endeavourii.com/news" className="hover:text-primary transition-colors">News</a>
            <span className="mx-2">/</span>
            <a href="/podcasts" className="hover:text-primary transition-colors">Podcast: Beyond the Grid</a>
            <span className="mx-2">/</span>
            <span className="text-foreground">James Feasey, Edged Infrastructure</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-4xl">
            The Multi-Gigawatt Reality of AI with James Feasey
          </h1>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">

        {/* Hero Image */}
        <div className="w-full overflow-hidden rounded-sm mb-8 mt-6">
          <img
            src={heroImage}
            alt="Data center infrastructure with blue lighting"
            width={1920}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Stream Badges */}
        <div className="mb-8">
          <StreamBadges />
        </div>

        {/* Summary */}
        <p className="text-base sm:text-lg text-foreground/85 leading-relaxed max-w-4xl mb-16">
          In Episode 6 of <em>Beyond the Grid</em>, host Beth Rattner sits down with James Feasey, who leads strategic sales and go-to-market strategy for AI infrastructure here at Endeavour. James discusses his fascinating career path—from his time as a British commando officer to leading go-to-market strategy at AWS—and unpacks the reality of AI scaling laws, the transition to multi-gigawatt data center campuses, and why waterless cooling is the ultimate key to community approval.
        </p>

        {/* Divider */}
        <div className="border-t border-border mb-10" />

        {/* Watch Now */}
        <div id="watch-now" className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 items-start mb-16">
          <span className="text-xs tracking-widest uppercase text-muted-foreground pt-2">
            Watch now
          </span>
          <div className="aspect-video rounded-sm overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/nCLnAUsmUpE?si=cgsvfTtJQgwIBqCn"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-10" />

        {/* Transcript with sidebar nav */}
        <div id="transcript-area" className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 items-start pb-20">
          <nav className="lg:sticky lg:top-20 flex flex-row lg:flex-col gap-4">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest text-left">Stream</button>
            <a href="#watch-now" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Watch Now</a>
            <div className="border-t border-border my-2" />
            <a href="#intro" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Intro</a>
            <a href="#cutting-noise" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Cutting Through the Noise</a>
            <a href="#multi-gigawatt" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">The Multi-Gigawatt Reality</a>
            <a href="#ecotone" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Designing the Ecotone</a>
            <a href="#copper-ceiling" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Breaking the Copper Ceiling</a>
            <a href="#tldr" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Takeaways</a>
          </nav>
          <div>
            <TranscriptSection />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 text-center text-xs text-muted-foreground">
          © 2026 Endeavour. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
