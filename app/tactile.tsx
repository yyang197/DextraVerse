import { assetUrl } from '@/lib/asset-url';
import { Gauge, Move3d, Grid3X3 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
const inputs = [
 {title:'Force magnitude',text:'Contact strength at each fingertip.',shape:'1 value / fingertip',icon:Gauge},
 {title:'Force direction',text:'The direction of the contact force.',shape:'3D vector / fingertip',icon:Move3d},
 {title:'Deformation maps',text:'Spatial deformation across the fingertip surface.',shape:'24 × 24 map / fingertip',icon:Grid3X3},
];
const configurations=['No tactile input','Force magnitude','Force magnitude + direction','Deformation maps','Maps + force magnitude','Magnitude + direction + maps'];
const metrics=[['Episode success','204/256 (79.7%)','216/256 (84.4%)'],['All-four ever-contact','75/204 (36.8%)','204/216 (94.4%)'],['Pinky flexion offset','+0.525','−0.018'],['Onset spread (steps)','13.0','10.5']];
export function Tactile(){return <section className="section tactile-section" id="tactile" aria-labelledby="tactile-title">
 <h2 id="tactile-title">Tactile Observations <em>&amp; Rewards.</em></h2>
 <div className="tactile-inputs">{inputs.map(({title,text,shape,icon:Icon})=><article key={title}><Icon size={25} strokeWidth={1.5}/><h3>{title}</h3><p>{text}</p><span>{shape}</span></article>)}</div>
 <div className="tactile-configurations" aria-label="Six tactile input configurations">{configurations.map((text,i)=><div key={i}><strong>T{i}</strong><span>{text}</span></div>)}</div>
 <div className="tactile-reward-grid">
  <figure><img src={assetUrl("/media/grasp-comparison.png")} alt="Baseline grasp (a) and a more enclosing grasp with the five-finger tactile contact reward (b)"/><figcaption><p>A five-finger contact reward encourages the thumb and all four fingers to contact the object together.</p></figcaption></figure>
  <div className="tactile-results"><h4>Grasp configuration</h4>
   <Table className="tactile-table" aria-label="Simulation results with tactile contact reward"><TableHeader><TableRow><TableHead scope="col">Metric</TableHead><TableHead scope="col">Baseline</TableHead><TableHead scope="col">+ Full-cage</TableHead></TableRow></TableHeader><TableBody>{metrics.map(([metric,base,reward])=><TableRow key={metric}><TableHead scope="row">{metric}</TableHead><TableCell>{base}</TableCell><TableCell>{reward}</TableCell></TableRow>)}</TableBody></Table>
   <p className="tactile-result-summary"><strong>36.8% → 94.4%</strong> all-four ever-contact, with episode success increasing by <strong>4.7 percentage points</strong>.</p>
  </div>
 </div>
 </section>}
