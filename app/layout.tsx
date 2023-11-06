import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Container from "@/components/ui/Container";
import { ThemeProvider } from "@/components/Theme-provider";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
       lang="en" suppressHydrationWarning className="dark" style={{colorScheme : 'dark'}}>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          <Container>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
