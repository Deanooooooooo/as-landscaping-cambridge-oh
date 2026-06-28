import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deanooooooooo.github.io/as-landscaping-cambridge-oh"),
  title: "A&S Landscaping | Lawn Care Cambridge OH",
  description:
    "Call A&S Landscaping for lawn mowing, trimming, bush work, yard cleanup and snow removal in Cambridge, Ohio.",
  robots: "index, follow",
  alternates: {
    canonical: "https://deanooooooooo.github.io/as-landscaping-cambridge-oh/",
  },
  openGraph: {
    type: "website",
    title: "A&S Landscaping | Lawn Care Cambridge OH",
    description:
      "Call A&S Landscaping for lawn care, trimming, cleanup and snow removal help around Cambridge, Ohio.",
    url: "https://deanooooooooo.github.io/as-landscaping-cambridge-oh/",
    images: ["/assets/hero-lawn.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "A&S Landscaping | Lawn Care Cambridge OH",
    description: "Call for mowing, trimming, cleanup and snow removal help in Cambridge, Ohio.",
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
