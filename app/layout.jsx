import "./globals.css";
import Header from "./header";
import { profile } from "./content";

export const metadata = {
  title: {
    default: profile.title,
    template: `%s — ${profile.title}`
  },
  description: profile.description
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
