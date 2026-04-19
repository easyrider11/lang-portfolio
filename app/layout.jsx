import "./globals.css";

export const metadata = {
  title: "Lorre Li | AI Builder & Software Engineer",
  description: "AI builder and software engineer shipping intelligent products — from on-device ML to LLM-powered systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
