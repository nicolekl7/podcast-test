import { ArrowRight, Youtube, Music } from "lucide-react";
import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import StreamBadges from "@/components/StreamBadges";
import SiteFooter from "@/components/SiteFooter";
import TranscriptSimple from "@/components/TranscriptSimple";
import heroImage from "@/assets/tile-james.jpg";
import heroEp3 from "@/assets/tile-ep3.jpg";
import heroEp4 from "@/assets/tile-ep4.jpg";

const SimpleVersion = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <ScrollProgressBar />

      {/* Sticky Breadcrumb + Title */}
      <div className="sticky top-[56px] z-30 bg-background">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 pb-4 pt-2">
          <nav className="text-xs tracking-widest uppercase text-muted-foreground pt-4 pb-3">
            <a href="https://www.endeavourii.com/news" className="hover:text-primary transition-colors">News</a>
            <span className="mx-2">/</span>
            <a href="/podcasts" className="hover:text-primary transition-colors">Podcast: Beyond the Grid</a>
            <span className="mx-2">/</span>
            <span className="text-foreground">James Feasey, Edged Infrastructure</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-4xl">
            The Multi-Gigawatt Reality of AI
          </h1>
        </div>
        {/* Mobile-only sticky horizontal chapter nav */}
        <div className="lg:hidden border-b border-border">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-2 flex gap-4 overflow-x-auto">
            <a href="#intro" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">Intro</a>
            <a href="#main-conversation" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">Main</a>
            <a href="#takeaways" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">Takeaways</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <aside className="hidden lg:block w-[200px] shrink-0 self-start sticky top-[160px]">
            <nav className="flex flex-col gap-4">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest text-left">Stream</button>
              <a href="#watch-now" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Watch Now</a>
              <div className="border-t border-border my-2" />
              <a href="#intro" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Intro</a>
              <a href="#main-conversation" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Main</a>
              <a href="#takeaways" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Takeaways</a>
            </nav>
          </aside>

          {/* Main content */}
          <div className="min-w-0 flex-1">
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
            <div id="stream-badges" className="mb-8 scroll-mt-[366px]">
              <StreamBadges />
            </div>

            {/* Summary */}
            <p className="text-base sm:text-lg text-foreground/85 leading-relaxed max-w-4xl mb-16">
              Beth Rattner sits down with James Feasey, who leads strategic sales and go-to-market strategy for AI infrastructure here at Endeavour. James discusses his fascinating career path—from his time as a British commando officer to leading go-to-market strategy at AWS—and unpacks the reality of AI scaling laws. He details the rapid transition to multi-gigawatt data center campuses, the leapfrog networking technologies poised to break the "copper ceiling," and why waterless cooling is the ultimate key to community approval.
            </p>

            {/* Divider */}
            <div className="border-t border-border mb-10" />

            {/* Watch Now */}
            <div id="watch-now" className="mb-16 scroll-mt-[166px]">
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

            {/* Transcript */}
            <div id="transcript-area" className="pb-16">
              <TranscriptSimple />
            </div>
          </div>
        </div>
      </div>

      {/* More Episodes */}
      <div className="bg-foreground text-background py-16">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="border-t border-background/20 mb-8" />
          <h2 className="text-sm tracking-[0.2em] uppercase mb-10">More Episodes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Episode 3 tile */}
            <Link to="/episode-3" className="group block">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-5">
                <img src={heroEp3} alt="Jonathan Rodriguez and Evan Metzner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full border border-background/60 flex items-center justify-center bg-background/10 backdrop-blur-sm group-hover:bg-background/30 transition-colors">
                  <ArrowRight className="h-4 w-4 text-background" />
                </div>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-background/60 mb-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 align-middle" />
                Beyond the Grid / Jonathan Rodriguez & Evan Metzner
              </p>
              <h3 className="text-lg font-semibold text-background group-hover:text-primary transition-colors">
                Exploring How Data is Transforming Critical Infrastructure
              </h3>
              <div className="flex gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
                <a href="https://open.spotify.com/show/4hqbKVCld0K2RmHPaBaehE" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-background/30 flex items-center justify-center hover:border-background/60 transition-colors"><Music className="h-3.5 w-3.5 text-background/60" /></a>
                <a href="https://www.youtube.com/playlist?list=PLsWiFDDO_WvTSJDO0W4JZrPeHYCAvcOsE" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-background/30 flex items-center justify-center hover:border-background/60 transition-colors"><Youtube className="h-3.5 w-3.5 text-background/60" /></a>
              </div>
            </Link>
            {/* Episode 4 tile */}
            <Link to="/episode-4" className="group block">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-5">
                <img src={heroEp4} alt="Wes Short" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full border border-background/60 flex items-center justify-center bg-background/10 backdrop-blur-sm group-hover:bg-background/30 transition-colors">
                  <ArrowRight className="h-4 w-4 text-background" />
                </div>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-background/60 mb-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 align-middle" />
                Beyond the Grid / Wes Short
              </p>
              <h3 className="text-lg font-semibold text-background group-hover:text-primary transition-colors">
                A New Vision for Data Centers and Grid Interconnects
              </h3>
              <div className="flex gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
                <a href="https://open.spotify.com/show/4hqbKVCld0K2RmHPaBaehE" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-background/30 flex items-center justify-center hover:border-background/60 transition-colors"><Music className="h-3.5 w-3.5 text-background/60" /></a>
                <a href="https://www.youtube.com/playlist?list=PLsWiFDDO_WvTSJDO0W4JZrPeHYCAvcOsE" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-background/30 flex items-center justify-center hover:border-background/60 transition-colors"><Youtube className="h-3.5 w-3.5 text-background/60" /></a>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
};

export default SimpleVersion;
