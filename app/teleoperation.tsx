import { assetUrl } from '@/lib/asset-url';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const configurations = [
  { file: 'tracker-gloves', label: 'Vive Tracker + Gloves', comparison: 'Tracker + Gloves', ranks: [4, 3, 1, 3] },
  { file: 'tracker-vr', label: 'Vive Tracker + Quest', comparison: 'Tracker + VR', ranks: [3, 4, 2, 4] },
  { file: 'tracker-rl', label: 'Vive Tracker + RL Policy', comparison: 'Tracker + RL', ranks: [2, 2, 4, 2] },
  { file: 'spacemouse-rl', label: 'SpaceMouse + RL Policy', comparison: 'SpaceMouse + RL', ranks: [1, 1, 3, 1] },
];

export function Teleoperation() {
  return <section className="section teleoperation-section" id="teleoperation" aria-labelledby="teleoperation-title">
    <h2 id="teleoperation-title">Flexible Teleoperation. <em>Efficient Collection.</em></h2>
    <div className="teleoperation-overview">
      <div className="teleoperation-videos">
        {configurations.map(config => <figure className="teleoperation-video" key={config.file}>
          <video controls playsInline muted loop preload="none"
            src={assetUrl(`/media/teleoperation/${config.file}.mp4`)}
            poster={assetUrl(`/media/teleoperation/${config.file}.jpg`)}
            aria-label={`${config.label} real-world teleoperation demonstration`} />
          <figcaption>{config.label}</figcaption>
        </figure>)}
      </div>
      <div className="teleoperation-results">
        <div className="collection-efficiency">
          <h3>Collection efficiency</h3>
          <p className="collection-configuration">SpaceMouse + RL Policy</p>
          <div className="collection-rate"><strong>~75</strong><span>demonstrations<br/>per hour</span></div>
          <div className="collection-metrics">
            <div><strong>24.8 <small>s</small></strong><span>Mean demo</span></div>
            <div><strong>~47 <small>s</small></strong><span>Full cycle</span></div>
            <div><strong>98.9<small>%</small></strong><span>261 / 264 retained</span></div>
          </div>
        </div>
        <div className="teleoperation-comparison">
          <h3>Configuration comparison</h3>
          <Table className="teleoperation-table" aria-label="Qualitative teleoperation configuration rankings">
            <TableHeader><TableRow>
              <TableHead scope="col">Configuration</TableHead>
              <TableHead scope="col">Cost</TableHead>
              <TableHead scope="col"><abbr title="Collection efficiency">Eff.</abbr></TableHead>
              <TableHead scope="col"><abbr title="Controllability">Ctrl.</abbr></TableHead>
              <TableHead scope="col"><abbr title="User experience">Exp.</abbr></TableHead>
            </TableRow></TableHeader>
            <TableBody>{configurations.map(config => <TableRow key={config.file}>
              <TableHead scope="row">{config.comparison}</TableHead>
              {config.ranks.map((rank, i) => <TableCell key={i} className={rank === 1 ? 'best-rank' : undefined}>{rank}</TableCell>)}
            </TableRow>)}</TableBody>
          </Table>
        </div>
      </div>
    </div>
  </section>;
}
