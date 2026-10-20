import { Network, Braces, ListChecks } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
const features=[
 {title:'Repository Retrieval Maps (RRMs)',icon:Network,text:'Locate implementations, interfaces, and tests. Trace dependencies from the package index to subsystem maps.'},
 {title:'Interface definitions',icon:Braces,text:'Explicit observation shapes, coordinate frames, and joint orderings clarify component compatibility.'},
 {title:'Automated checks',icon:ListChecks,text:'Validate configurations and integration, with machine-readable settings and run metadata for reproducible experiments.'},
];
const results=[
 ['Sonnet 5','18/24 → 23/24','54.7','43.4','44.9'],
 ['Opus 5','22/24 → 24/24','55.0','26.3','40.8'],
 ['Fable 5','20/24 → 23/24','51.1','19.2','32.2'],
 ['GPT-5.6 Luna','19/24 → 21/24','54.5','24.3','29.0'],
 ['GPT-5.6 Terra','20/24 → 22/24','55.7','32.3','37.2'],
 ['GPT-5.6 Sol','24/24 → 24/24','50.5','29.6','35.1'],
 ['GPT-6 Astra','23/24 → 24/24','37.3','1.4','28.6'],
 ['Summary','146/168 → 161/168','51.3','25.2','35.4'],
];
export function AICoding(){return <section className="section ai-coding-section" id="ai-development" aria-labelledby="ai-coding-title">
 <h2 id="ai-coding-title">AI-Friendly by Design. <em>Less Searching. More Building.</em></h2>
 <div className="ai-design-features">{features.map(({title,icon:Icon,text})=><article key={title}><Icon size={25} strokeWidth={1.5}/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
 <div className="ai-evaluation">
  <div className="ai-results-table"><h3>Retrieval performance with RRMs</h3><Table className="ai-table" aria-label="Retrieval performance with and without Repository Retrieval Maps">
   <TableHeader><TableRow><TableHead rowSpan={2} scope="col">Model</TableHead><TableHead rowSpan={2} scope="col">Successful runs<span>Without → with RRMs</span></TableHead><TableHead colSpan={3} scope="colgroup">Reduction (%) ↑</TableHead></TableRow><TableRow><TableHead scope="col">Calls</TableHead><TableHead scope="col">Tokens</TableHead><TableHead scope="col">Time</TableHead></TableRow></TableHeader>
   <TableBody>{results.map((row,i)=><TableRow className={i===7?'ai-summary-row':undefined} key={row[0]}><TableHead scope="row">{row[0]}</TableHead>{row.slice(1).map((value,j)=><TableCell key={j} className={(i===0&&(j===2||j===3))||(i===4&&j===1)?'ai-best':undefined}>{value}</TableCell>)}</TableRow>)}</TableBody>
  </Table></div>
  <aside className="ai-highlights"><h3>Lower retrieval cost</h3><div className="ai-key-stat"><strong>51.3<span>%</span></strong><p>fewer inspection calls</p></div><div className="ai-secondary-stats"><div><strong>25.2<span>%</span></strong><p>fewer tokens</p></div><div><strong>35.4<span>%</span></strong><p>less time</p></div></div><p className="ai-success"><strong>146 → 161</strong> successful runs out of 168 per condition.</p></aside>
 </div>
 </section>}
