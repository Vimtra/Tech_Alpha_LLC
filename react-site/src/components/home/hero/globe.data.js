// Compile-time globe geometry: viewBox, hub, node ring, pedestal, and the
// hand-authored 48x24 landmass mask projected as a dot-matrix earth.

export const VIEW = { w: 800, h: 840 }
export const HUB = { x: 400, y: 355 }
export const R = 205                     // sphere radius
export const NODE_R = 290                // node ring radius
export const PEDESTAL = { cx: 400, cy: 665, rx: 320, ry: 38 }
export const YAW = -0.3                  // rotate globe so Atlantic sits centered

// 48-col x 24-row land mask (0/1). Origin: top-left = 180°W / 90°N.
// prettier-ignore
export const LAND = [
  '000000000000000000000000000000000000000000000000',
  '000000000011111111111111111111000000000000000000',
  '000000001111111111111111111111100000000000000000',
  '000000011111111111111111110001100000000000000110',
  '000000111111111111111110000000000000000000001110',
  '000001111111111111100000000000000000000000000110',
  '000011111110111000000000000000000000000000011000',
  '000011111000000000000000110000000000000000110000',
  '000000011100000000001111111100000000000000110000',
  '000000011100000000011111111110001000000001110000',
  '000000000110000000011111111100011100000011110000',
  '000000000011000000001111111100011100000000000000',
  '000000000011000000000011111000011110000000000000',
  '000000000011100000000001111000000110000000000000',
  '000000000001100000000001111000000010000000000000',
  '000000000001100000000000110000000000000000000000',
  '000000000001100000000000110000000000000000000000',
  '000000000000100000000000110000000000000000000000',
  '000000000000100000000000110000000000000000000000',
  '000000000000000000000000010000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
  '000000000000000000000000000000000000000000000000',
].map((row) => row.split('').map((c) => c === '1'))

/**
 * Project the land mask onto the sphere. Points with z < 0 (back of globe)
 * are culled; near-terminator points fade so the edge reads soft.
 */
export const DOTS = (() => {
  const out = []
  const rows = LAND.length
  const cols = LAND[0].length
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (!LAND[r][c]) continue
      const lat = (0.5 - r / (rows - 1)) * Math.PI
      const lon = (c / cols - 0.5) * Math.PI * 2 + YAW
      const cosLat = Math.cos(lat)
      const x3 = cosLat * Math.sin(lon)
      const y3 = -Math.sin(lat)
      const z3 = cosLat * Math.cos(lon)
      if (z3 < 0.04) continue
      out.push({
        x: HUB.x + x3 * R,
        y: HUB.y + y3 * R,
        r: 1.4 + z3 * 1.8,
        a: 0.32 + 0.68 * Math.min(1, z3 * 1.35),
      })
    }
  }
  return out
})()

/**
 * Capability nodes floating around the globe. Positions are polar
 * (deg + dist from HUB). `label` can be one or two lines. `onPedestal`
 * shifts a node closer so it sits on the pedestal (Analytics).
 */
export const NODES = [
  { id: 'ai',        deg: -90,  dist: NODE_R - 15, label: ['AI & MACHINE', 'LEARNING'], accent: '#7FE3FF', icon: 'brain',    labelAbove: true },
  { id: 'aws',       deg: -145, dist: NODE_R,      label: ['AWS CLOUD'],                 accent: '#F89723', icon: 'aws',      labelAbove: true },
  { id: 'devops',    deg: -35,  dist: NODE_R,      label: ['DEVOPS'],                    accent: '#7FE3FF', icon: 'infinity', labelAbove: true },
  { id: 'security',  deg: 15,   dist: NODE_R + 10, label: ['CYBER', 'SECURITY'],         accent: '#F89723', icon: 'shield',   labelAbove: true },
  { id: 'data',      deg: 55,   dist: NODE_R + 12, label: ['DATA', 'ENGINEERING'],       accent: '#7FE3FF', icon: 'database', labelAbove: false },
  { id: 'analytics', deg: 90,   dist: 275,          label: ['ANALYTICS'],                accent: '#7FE3FF', icon: 'chart',    labelAbove: false, onPedestal: true },
  { id: 'automation',deg: 148,  dist: NODE_R,      label: ['AUTOMATION'],                accent: '#7FE3FF', icon: 'gear',     labelAbove: false },
].map((n) => {
  const a = (n.deg * Math.PI) / 180
  return { ...n, x: HUB.x + n.dist * Math.cos(a), y: HUB.y + n.dist * Math.sin(a) }
})
