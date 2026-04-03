import { Youtube, Music, Headphones, Radio } from "lucide-react";

const platforms = [
  { label: "YouTube", icon: Youtube, href: "https://open.spotify.com/show/4hqbKVCld0K2RmHPaBaehE" },
  { label: "Spotify", icon: Music, href: "https://open.spotify.com/show/4hqbKVCld0K2RmHPaBaehE" },
  { label: "Apple", icon: Headphones, href: "https://podcasts.apple.com/us/podcast/beyond-the-grid/id1810456041" },
  { label: "Amazon", icon: Radio, href: "https://www.amazon.com/Beyond-the-Grid/dp/B0GP1RFCXR" },
];

const StreamBadges = ({ compact = false }: { compact?: boolean }) => {
  if (compact) {
    return (
      <div className="flex flex-col gap-2">
        {platforms.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 flex-wrap">
      <span className="text-xs tracking-widest uppercase text-muted-foreground">
        Stream now on
      </span>
      <div className="flex items-center gap-2">
        {platforms.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            className="flex items-center gap-1.5 border border-border rounded-full px-3.5 py-1.5 text-xs tracking-wide uppercase text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default StreamBadges;
