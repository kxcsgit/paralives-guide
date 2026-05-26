import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Paralives Guide Wiki — Tips, Tricks & Walkthroughs",
  description:
    "The ultimate fan-made guide wiki for Paralives — character creation, building, careers, relationships, and everything in between.",
  openGraph: {
    title: "Paralives Guide Wiki — Tips, Tricks & Walkthroughs",
    description:
      "The ultimate fan-made guide wiki for Paralives — character creation, building, careers, relationships, and everything in between.",
    type: "website",
    siteName: "ParalivesGuide.wiki",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ParalivesGuide.wiki",
              url: "https://paralivesguide.wiki/",
              description:
                "The ultimate fan-made guide wiki for Paralives — character creation, building, careers, relationships, and everything in between.",
            }),
          }}
        />
      </head>
      <body className="bg-cream font-nunito text-warm-brown min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
