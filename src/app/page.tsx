import GlassCard from "./components/icons/cards/glasscard";

import {
  BehanceIconGlass,
  DiscordIconGlass,
  DribbbleIconGlass,
  FacebookIconGlass,
  GitHubIconGlass,
  GmailIconGlass,
  InstagramIconGlass,
  LinkedInIconGlass,
  MediumIconGlass,
  PinterestIconGlass,
  TelegramIconGlass,
  TikTokIconGlass,
  WhatsAppIconGlass,
  YouTubeIconGlass,
} from "./components/icons/SocialGlassIcons";
import ThemeToggle from "./components/icons/ThemeToggle";

export default function Home() {
  return (
    <main className="">
      <div className="flex items-center justify-center pt-8">
        <ThemeToggle />
      </div>
      <div className="pt-8 flex items-center justify-center flex-wrap">
      <GlassCard className="max-w-md w-full flex flex-wrap gap-4 justify-center items-center pt-2">
        <h1 className="flex items-cenyer justify-center">Social:</h1>
        <div className="flex flex-wrap gap-4 items-center justify-center scale-70">
          <GitHubIconGlass />
          <DribbbleIconGlass />
          <DiscordIconGlass />
          <PinterestIconGlass />
          <MediumIconGlass />
          <FacebookIconGlass />
          <InstagramIconGlass />
          <GmailIconGlass />
          <TelegramIconGlass />
          <TikTokIconGlass />
          <LinkedInIconGlass />
          <YouTubeIconGlass />
          <TelegramIconGlass />
          <BehanceIconGlass />
          <WhatsAppIconGlass />
        </div>
      </GlassCard>
      </div>
    </main>
  );
}
