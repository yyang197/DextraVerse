import { assetUrl } from '@/lib/asset-url';
import { AICoding } from './ai-coding';
import { Tactile } from './tactile';
import { PolicyLearning } from './policy-learning';
import { Teleoperation } from './teleoperation';
import { HardwareAndData } from './hardware';
import {HeroMedia} from './experiences';
import { ArrowUpRight, Layers3, Cable, ScanLine, Fingerprint, Code2 } from 'lucide-react';

export default function Home() {
 return <><a className="skip" href="#platform">Skip to content</a>
 <main><nav className="hero-resource-links" aria-label="Project resources"><a href={assetUrl("/media/introduction.mp4")} target="_blank" rel="noreferrer">Watch the video <ArrowUpRight size={16}/></a><a href={assetUrl("/media/DextraVerse.pdf")} target="_blank" rel="noreferrer">Read the paper <ArrowUpRight size={16}/></a></nav><section className="hero hero-focused" id="platform"><div className="hero-copy"><img className="hero-logo" src={assetUrl("/media/logo-v2.svg")} alt="DextraVerse"/><h1>A Unified Platform for <span>Tactile-Rich Bimanual Dexterous Manipulation</span></h1></div><div className="hero-visual"><HeroMedia/></div></section>
 <nav className="topic-links" aria-label="Explore platform capabilities">{[{id:'multimodal-sensing',label:'Multimodal Sensing',icon:ScanLine},{id:'teleoperation',label:'Teleoperation',icon:Cable},{id:'tactile',label:'Tactile',icon:Fingerprint},{id:'policy-learning',label:'Policy Learning',icon:Layers3},{id:'ai-development',label:'AI-Coding',icon:Code2}].map(item=><a key={item.id} href={`#${item.id}`}><item.icon size={23} strokeWidth={1.5}/><span>{item.label}</span></a>)}</nav>
 <HardwareAndData/>
 <Teleoperation/>
 <Tactile/>
 <PolicyLearning/>
<AICoding/>

</main><footer className="site-footer"><div className="footer-bottom"><a className="brand" href="#">DextraVerse<span className="brand-dot">.</span></a><span>A unified platform for dexterous manipulation research.</span><div className="footer-links"><a href="#platform">Back to top ↑</a></div></div></footer></>
}
