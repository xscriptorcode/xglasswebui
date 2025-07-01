import { ComponentIconGlass } from "./components/icons/designGlassIcons";
import { FacebookIconGlass, GmailIconGlass, InstagramIconGlass } from "./components/icons/SocialGlassIcons";
import ThemeToggle from "./components/icons/ThemeToggle";


export default function Home() {
  return (
      <main className="">
        <div className="flex items-center justify-center ">
        <ThemeToggle />
        </div>
      <h1 className="flex items-cenyer justify-center pt-8">Lines:</h1>
      <div className="flex flex-wrap gap-4 items-center justify-center pt-8">
        <FacebookIconGlass / >
        <InstagramIconGlass />
        <ComponentIconGlass />
        <GmailIconGlass />
      </div>
      </main>
  );
}
