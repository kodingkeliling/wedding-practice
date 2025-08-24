import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Undangan Pernikahan Kalida & Jamjam",
  description: "Undangan pernikahan Kalida dan Jamjam. Kami mengundang Anda untuk hadir di hari bahagia kami.",
  keywords: "undangan pernikahan, wedding invitation, kalida, jamjam",
  authors: [{ name: "Kalida & Jamjam" }],
  openGraph: {
    title: "Undangan Pernikahan Kalida & Jamjam",
    description: "Undangan pernikahan Kalida dan Jamjam. Kami mengundang Anda untuk hadir di hari bahagia kami.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Undangan Pernikahan Kalida & Jamjam",
    description: "Undangan pernikahan Kalida dan Jamjam. Kami mengundang Anda untuk hadir di hari bahagia kami.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="wedding-body">
        {children}
      </body>
    </html>
  );
}
