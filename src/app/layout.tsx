import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Next App",
  description: "Test Next App - new",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
        <Header />
        <main
          className={
            "flex flex-col grow px-4 pt-5 max-w-6xl m-auto w-full overflow-auto"
          }
        >
          {children}
        </main>
        {/*<Footer />*/}
      </body>
    </html>
  );
}
