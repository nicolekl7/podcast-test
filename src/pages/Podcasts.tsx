import { ArrowRight, Youtube, Music } from "lucide-react";
import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import heroJames from "@/assets/tile-james.jpg";
import heroEp3 from "@/assets/tile-ep3.jpg";
import heroEp4 from "@/assets/tile-ep4.jpg";

const episodes = [
  {
    slug: "/",
    image: heroJames,
    alt: "James Feasey",
    guest: "James Feasey",
    title: "The Multi-Gigawatt Reality of AI",
    number: "Ep 5",
  },
  {
    slug: "/episode-4",
    image: heroEp4,
    alt: "Wes Short",
    guest: "Wes Short",
    title: "A New Vision for Data Centers and Grid Interconnects",
    number: "Ep 4",
  },
  {
    slug: "/episode-3",
    image: heroEp3,
    alt: "Jonathan Rodriguez & Evan Metzner",
    guest: "Jonathan Rodriguez & Evan Metzner",
    title: "Exploring How Data is Transforming Critical Infrastructure",
    number: "Ep 3",
  },
];

const Podcasts = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-10 pb-6">
        <nav className="text-xs tracking-widest uppercase text-muted-foreground pb-3">
          <a href="https://www.endeavourii.com/news" className="hover:text-primary transition-colors">News</a>
          <span className="mx-2">/</span>
          <span className="text-foreground">Podcast: Beyond the Grid</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-4xl">
          Beyond the Grid
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mt-4 max-w-2xl leading-relaxed">
          Conversations at the frontier of critical infrastructure, energy, and AI.
        </p>

        {/* Stream links */}
        <div className="flex items-center gap-2 mt-6">
          <span className="text-xs tracking-widest uppercase text-muted-foreground mr-2">Stream on</span>
          <a
            href="https://open.spotify.com/show/4hqbKVCld0K2RmHPaBaehE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border border-border rounded-full px-3.5 py-1.5 text-xs tracking-wide uppercase text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <Music className="h-3.5 w-3.5" /> Spotify
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PLsWiFDDO_WvTSJDO0W4JZrPeHYCAvcOsE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border border-border rounded-full px-3.5 py-1.5 text-xs tracking-wide uppercase text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <Youtube className="h-3.5 w-3.5" /> YouTube
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <div className="border-t border-border" />
      </div>

      {/* Episodes Grid */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((ep) => (
            <Link key={ep.slug} to={ep.slug} className="group block">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-5">
                <img
                  src={ep.image}
                  alt={ep.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full border border-background/60 flex items-center justify-center bg-background/10 backdrop-blur-sm group-hover:bg-background/30 transition-colors">
                  <ArrowRight className="h-4 w-4 text-background" />
                </div>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2" style={{ marginBottom: '0.5px' }} />
                {ep.number} / {ep.guest}
              </p>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {ep.title}
              </h3>
              <div className="flex gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
                <a href="https://open.spotify.com/show/4hqbKVCld0K2RmHPaBaehE" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors">
                  <Music className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
                <a href="https://www.youtube.com/playlist?list=PLsWiFDDO_WvTSJDO0W4JZrPeHYCAvcOsE" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors">
                  <Youtube className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
};

export default Podcasts;
