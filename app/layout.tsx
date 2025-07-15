import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/query/QueryProvider";
import Layout from "@/features";
import FollowCursor from "@/components/follow-cursor-effect";
import ScrollProgress from "@/components/scroll-progress";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Niyazov Shohjahon",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/icon.jpg" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <FollowCursor />
                <ScrollProgress />
                <QueryProvider>
                    <Layout>{children}</Layout>
                </QueryProvider>
            </body>
        </html>
    );
}
