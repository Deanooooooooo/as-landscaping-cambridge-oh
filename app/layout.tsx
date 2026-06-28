import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deanooooooooo.github.io/as-landscaping-cambridge-oh"),
  title: "A&S Landscaping | Lawn Care Cambridge OH",
  description:
    "Lawn mowing, trimming, bush work, yard cleanup and snow removal from A&S Landscaping in Cambridge, Ohio.",
  robots: "index, follow",
  alternates: {
    canonical: "https://deanooooooooo.github.io/as-landscaping-cambridge-oh/",
  },
  openGraph: {
    type: "website",
    title: "A&S Landscaping | Lawn Care Cambridge OH",
    description:
      "Lawn care, trimming, cleanup and snow removal help for homes around Cambridge, Ohio.",
    url: "https://deanooooooooo.github.io/as-landscaping-cambridge-oh/",
    images: ["/assets/hero-lawn.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "A&S Landscaping | Lawn Care Cambridge OH",
    description: "Mowing, trimming, cleanup and snow removal help in Cambridge, Ohio.",
    images: ["/assets/hero-lawn.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
