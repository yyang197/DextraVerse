import { assetUrl } from '@/lib/asset-url';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const il = [
 ['36.7 ± 3.3','16.7 ± 15.3','1.1 ± 1.9','4.00'],
 ['47.8 ± 1.9','11.1 ± 10.2','3.3 ± 0.0','2.67'],
 ['42.2 ± 18.4','18.9 ± 6.9','2.2 ± 3.9','2.67'],
 ['52.2 ± 12.6','7.8 ± 7.7','0.0 ± 0.0','4.33'],
 ['40.0 ± 11.6','11.1 ± 10.7','3.3 ± 0.0','3.33'],
 ['17.8 ± 6.9','10.0 ± 10.0','11.1 ± 3.9','4.00'],
];
const rl = [
 ['71.7 ± 11.5','89.5 ± 1.8','40.5 ± 38.5','4.67'],
 ['91.1 ± 1.3','89.4 ± 3.3','23.2 ± 34.8','4.00'],
 ['92.9 ± 0.7','93.6 ± 0.8','68.4 ± 16.4','1.67'],
 ['88.5 ± 2.8','88.2 ± 4.0','45.7 ± 38.7','4.33'],
 ['86.6 ± 7.8','84.5 ± 7.6','66.3 ± 23.9','4.67'],
 ['91.1 ± 1.1','93.8 ± 4.5','77.7 ± 4.0','1.67'],
];
function Results({kind}:{kind:'IL'|'RL'}) {
 const isIL=kind==='IL';
 const headers=isIL?['Pick-and-place','Handover','Cube stacking']:['Cube grasping','In-hand rotation','Bimanual rod lifting'];
 const best=isIL?[[3],[2],[5],[1,2]]:[[2],[5],[5],[2,5]];
 return <div className="policy-benchmark">
  <p className="policy-table-label">{isIL?'Task success':'Task performance'} (%) ↑ · Mean ± SD, 3 seeds</p>
  <Table className="policy-table" aria-label={`${kind} tactile representation benchmark`}>
   <TableHeader><TableRow><TableHead scope="col">Config.</TableHead>{headers.map(h=><TableHead scope="col" key={h}>{h}</TableHead>)}<TableHead scope="col">Rank ↓</TableHead></TableRow></TableHeader>
   <TableBody>{(isIL?il:rl).map((row,i)=><TableRow key={i}><TableHead scope="row"><strong>T{i}</strong></TableHead>{row.map((v,j)=><TableCell className={best[j].includes(i)?'policy-best':undefined} key={j}>{v}</TableCell>)}</TableRow>)}</TableBody>
  </Table>
  {!isIL&&<p className="policy-metric-note">Grasping / rod lifting: hold / lift fraction. Rotation: episode success.</p>}
 </div>;
}
const videos={IL:[['il-pick-place','Pick-and-place'],['il-handover','Handover'],['il-stacking','Cube stacking']],RL:[['rl-rotation','In-hand rotation'],['rl-rod','Bimanual rod lifting'],['rl-pen','Pen spinning']]};
export function PolicyLearning(){
 return <section className="section policy-section" id="policy-learning" aria-labelledby="policy-title">
  <h2 id="policy-title">Imitation & Reinforcement. <em>Shared Learning Interfaces.</em></h2>
  <p className="policy-intro">Reuse tasks, tactile observations, and evaluation pipelines across IL and RL.</p>
  {(['IL','RL'] as const).map(kind=><div className="policy-block" key={kind}>
   <div className="policy-block-heading"><h3><span>{kind}</span>{kind==='IL'?'Imitation Learning':'Reinforcement Learning'}</h3><p>{kind==='IL'?'Learn manipulation from demonstrations.':'Learn dexterous skills through interaction.'}</p></div>
   <div className="policy-videos">{videos[kind].map(([file,label])=><figure key={file}><video controls playsInline muted loop preload="none" src={assetUrl(`/media/policy/${file}.mp4`)} poster={assetUrl(`/media/policy/${file}.jpg`)} aria-label={`${kind}: ${label}`}/><figcaption>{label}</figcaption></figure>)}</div>
   <div className="policy-evidence"><Results kind={kind}/><aside className="policy-findings"><h4>Main results</h4>{kind==='IL'?<><p><strong>52.2%</strong> pick-and-place with deformation maps (T3), up from 36.7% without tactile input.</p><p><strong>11.1%</strong> cube stacking with all modalities (T5), up from 1.1%.</p><p>Force magnitude + direction (T2) improves mean success on all three tasks; map-based gains vary by task.</p></>:<><p><strong>92.9%</strong> cube grasping with force magnitude + direction (T2).</p><p><strong>77.7%</strong> bimanual rod lifting with all modalities (T5), up from 40.5% without tactile input.</p><p>T2 and T5 share the best mean rank (1.67). Richer tactile inputs do not consistently improve every task.</p></>}</aside></div>
  </div>)}
 </section>;
}
