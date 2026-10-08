import "./globals.css";
import Header from "./header";
import { profile } from "./content";

export const metadata = {
  metadataBase: new URL("https://lorre-portfolio.vercel.app"),
  title: {
    default: profile.title,
    template: `%s — ${profile.title}`
  },
  description: profile.description,
  openGraph: {
    type: "website",
    siteName: profile.title,
    title: profile.title,
    description: profile.description,
    images: ["/og/home.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: profile.title,
    description: profile.description,
    images: ["/og/home.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
