import GlassCard from "./components/icons/cards/glasscard";
import {
  ColorPaletteIconGlass,
  ComponentIconGlass,
  RulerIconGlass,
  StarIconGlass,
  TaskListIconGlass,
  TrophyIconGlass,
  TypographyIconGlass,
  WorkHistoryIconGlass,
} from "./components/icons/designGlassIcons";
import {
  BriefcaseIconGlass,
  CertificateIconGlass,
  ClientProfileIconGlass,
  ClockInIconGlass,
  ContractIconGlass,
  FeedbackIconGlass,
  FolderOpenIconGlass,
  LayoutIconGlass,
  PaperclipIconGlass,
  PortfolioIconGlass,
  PresentationIconGlass,
  ResumeIconGlass,
} from "./components/icons/PortfolioGlassIcons";

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
      <div className="pt-8 flex items-center justify-center flex-wrap px-4 sm:px-6 md:px-8">
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
      <div className="pt-8 flex items-center justify-center flex-wrap px-4 sm:px-6 md:px-8">
        <GlassCard className="max-w-md w-full flex flex-wrap gap-4 justify-center items-center pt-2">
          <h1 className="flex items-cenyer justify-center">Design:</h1>
          <div className="flex flex-wrap gap-4 items-center justify-center scale-70">
            <ColorPaletteIconGlass />
            <ComponentIconGlass />
            <StarIconGlass />
            <TaskListIconGlass />
            <TrophyIconGlass />
            <TypographyIconGlass />
            <WorkHistoryIconGlass />
            <RulerIconGlass />
          </div>
        </GlassCard>
      </div>
      <div className="pt-8 flex items-center justify-center flex-wrap px-4 sm:px-6 md:px-8">
        <GlassCard className="max-w-md w-full flex flex-wrap gap-4 justify-center items-center pt-2">
          <h1 className="flex items-cenyer justify-center">Portfolio:</h1>
          <div className="flex flex-wrap gap-4 items-center justify-center scale-70">
            <BriefcaseIconGlass />
            <FolderOpenIconGlass />
            <CertificateIconGlass />
            <ClientProfileIconGlass />
            <ClockInIconGlass />
            <ContractIconGlass />
            <FeedbackIconGlass />
            <PaperclipIconGlass />
            <PortfolioIconGlass />
            <PresentationIconGlass />
            <ResumeIconGlass />
            <LayoutIconGlass />
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
