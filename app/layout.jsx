import "./globals.css";

export const metadata = {
  title: "Lorre Li | Software Engineer",
  description: "Software Engineer portfolio of Lorre Li.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
