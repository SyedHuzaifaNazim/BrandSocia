import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BrandSocia",
  description: "Develop the Future!",
  icons: {
    icon: [
      {
        url: '/WhatsApp_Image_2025-07-01_at_17.12.43_38099a7e-removebg-preview.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    shortcut: '/WhatsApp_Image_2025-07-01_at_17.12.43_38099a7e-removebg-preview.png',
    apple: '/WhatsApp_Image_2025-07-01_at_17.12.43_38099a7e-removebg-preview.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/WhatsApp_Image_2025-07-01_at_17.12.43_38099a7e-removebg-preview.png" />
        <link rel="apple-touch-icon" href="/WhatsApp_Image_2025-07-01_at_17.12.43_38099a7e-removebg-preview.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68c952d44be141192540b33c/1j596n4a3';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </script>
      </body>
    </html>
  );
}
