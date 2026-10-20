import { assetUrl } from '@/lib/asset-url';
import { Activity, ArrowDown, Box, Fingerprint, Hand, Images, Move3D, SlidersHorizontal } from 'lucide-react';

const assets = assetUrl('/media/hardware/');
function Device({image, label}: {image: string; label: string}) {
  return <figure className="compact-device"><img src={`${assets}${image}.png`} alt="" loading="lazy"/><figcaption>{label}</figcaption></figure>;
}

export function HardwareAndData() {
  return <section className="section hardware-data" id="multimodal-sensing" aria-labelledby="hardware-title">
    <h2 id="hardware-title">Modular Hardware. <em>Shared Interfaces.</em></h2>
    <div className="hardware-overview">
      <figure className="robot-cutout">
        <img src={`${assets}vega-cube-cutout.png`} alt="Dexmate Vega with two Sharpa hands and a Rubik’s cube, isolated from the original photograph" loading="lazy"/>
        <figcaption>58 DoF · Bimanual manipulation</figcaption>
      </figure>
      <div className="hardware-overview-details">
        <div className="equipment-row">
          <div className="compact-hardware">
            <h3>Hardware</h3>
            <ul className="hardware-facts">
              <li><Move3D aria-hidden="true"/><div><strong>Dexmate Vega</strong><span>2 × 7-DoF arms</span></div></li>
              <li><Hand aria-hidden="true"/><div><strong>Sharpa hands</strong><span>2 × 22-DoF hands</span></div></li>
              <li><Fingerprint aria-hidden="true"/><div><strong>Fingertip sensing</strong><span>Visual-tactile feedback</span></div></li>
              <li><Box aria-hidden="true"/><div><strong>Isaac Lab</strong><span>Matched simulation model</span></div></li>
            </ul>
          </div>
          <div className="compact-controls">
            <h3>Control Interfaces</h3>
            <div className="compact-control-row"><h4>Wrist</h4><div className="compact-device-pair"><Device image="vive-tracker" label="Vive Tracker"/><Device image="spacemouse" label="SpaceMouse"/></div></div>
            <div className="compact-control-row"><h4>Hand</h4><div className="compact-device-pair"><Device image="vr-headset" label="VR tracking"/><Device image="glove" label="Data gloves"/></div></div>
          </div>
        </div>
        <div className="recording-connector"><ArrowDown size={17} aria-hidden="true"/><span>Shared recording interface</span></div>
        <div className="compact-collection">
          <h3>Data Collection</h3>
          <div className="compact-data-types">
            {[
              {icon:Images,title:'Vision',description:'Multi-view RGB'},
              {icon:Activity,title:'State',description:'Arm & hand joints'},
              {icon:Move3D,title:'Pose',description:'End-effector poses'},
              {icon:Fingerprint,title:'Tactile',description:'Force magnitude, direction & deformation'},
              {icon:SlidersHorizontal,title:'Actions',description:'Joint targets'},
            ].map(item=><div key={item.title}><item.icon size={23} strokeWidth={1.5} aria-hidden="true"/><h4>{item.title}</h4><p>{item.description}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  </section>;
}
