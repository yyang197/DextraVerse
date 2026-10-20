import { assetUrl } from '@/lib/asset-url';
import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'DextraVerse — A Unified Platform for Dexterous Manipulation',description:'From integration to experimentation. Shared interfaces, reusable components, and repository retrieval maps for tactile-rich bimanual manipulation research.',icons:{icon:assetUrl('/media/logo-v2.svg')}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
