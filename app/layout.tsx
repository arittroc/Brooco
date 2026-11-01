import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'BROOCO — Chocolaterie & Croissanterie, Kolkata',description:'A little luxury. Layer by layer. Discover Brooco’s chocolates, croissants, celebration cakes and thoughtful gifting in Kolkata.',icons:{icon:'/assets/favicon.svg'},openGraph:{title:'BROOCO — A little luxury. Layer by layer.',description:'Chocolates, croissants and little celebrations. From Kolkata, with love.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
