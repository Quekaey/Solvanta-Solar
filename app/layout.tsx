import type { Metadata } from "next";import "./globals.css";
export const metadata:Metadata={title:"Solvanta Energy — Two Website Concepts",description:"Two distinct customer journeys for one solar energy brand."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
