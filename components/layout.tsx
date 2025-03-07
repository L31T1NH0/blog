import { Header } from "./header";
import ThemeSwitcher from "./ThemeSwitcher";

type LayoutProps = {
  title?: string;
  description?: string;
  url?: string;
  home?: boolean;
  children: React.ReactNode;
};

export function Layout({ home = false, children }: LayoutProps) {
  return (
    <div className="max-w-xl flex flex-col mx-auto px-4">
      <div>
        <ThemeSwitcher />
      </div>
      <Header home={home} />
      <main className={`${home ? "home" : ""} flex flex-col flex-1`}>
        {children}
      </main>
    </div>
  );
}
