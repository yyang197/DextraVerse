# Robot cutout

- Source: `Materials/Pictures/374C5BE1-C700-4D3F-9C4C-88BE700092DA_1_105_c.jpeg`
- Asset: `public/media/hardware/vega-cube-cutout.png`
- Method: built-in imagegen; transparent_background=true. This is an AI-edited visual, not a measurement image.

## Initial prompt

Use case: background-extraction. Edit target: the supplied photograph. Create a clean photorealistic cutout with actual transparent alpha for a robotics research website. Remove ONLY the black curtain/background and gray tabletop, along with table shadows and loose trailing cables extending onto the table/outside the robot. Preserve the exact white Dexmate Vega robot, head, torso, visible central metal support column (ending at its original table occlusion), both arms, detailed metallic Sharpa fingers/hands, small cables attached to the wrists, and colorful Rubik's cube, unchanged in pose, proportions, color, perspective and detail. Do not redraw or redesign the hardware or add hidden parts. Keep both hands and all visible fingertips intact. Transparent background including gaps between arms, fingers and body. No shadow, no backdrop, no text, no watermark. Frame the full visible robot and cube closely with a small transparent margin.

## Final prompt

Background extraction correction ONLY. The target already has a partial alpha cutout but incorrectly retains gray/brown blurry background and halos in the spaces between the arms and torso, around the cube, and outside the robot silhouette. Remove ALL of those retained background areas to fully transparent alpha=0. This is a precision mask correction, not image synthesis. Keep every robot and cube pixel unchanged; do not redraw, sharpen, relight, recolor, resize, reposition, or change any part of the robot or cube. Keep the full currently visible robot, metallic support column, two hands and cube. Only actual object surfaces should be opaque. Empty spaces between arms and body and between fingers must be transparent. No gray glow, no shadow, no feathered background cloud, no colored halo. Fine antialiasing only at true object edges. Output PNG with true alpha.
