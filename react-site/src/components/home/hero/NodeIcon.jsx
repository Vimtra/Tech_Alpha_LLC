import { Cloud, Cpu, GitMerge, Shield, Database, BarChart2, Settings } from 'lucide-react'

function NodeIcon({ name }) {
  const common = { size: 18, strokeWidth: 1.6, color: '#DCE6F5' }
  switch (name) {
    case 'brain':
      return (
        <g>
          <g transform="translate(-9 -9)">
            <Cpu {...common} />
          </g>
        </g>
      )
    case 'aws':
      return (
        <g>
          <g transform="translate(-9 -9)">
            <Cloud {...common} />
          </g>
        </g>
      )
    case 'infinity':
      return (
        <g>
          <g transform="translate(-9 -9)">
            <GitMerge {...common} />
          </g>
        </g>
      )
    case 'shield':
      return (
        <g>
          <g transform="translate(-9 -9)">
            <Shield {...common} />
          </g>
        </g>
      )
    case 'database':
      return (
        <g>
          <g transform="translate(-9 -9)">
            <Database {...common} />
          </g>
        </g>
      )
    case 'chart':
      return (
        <g>
          <g transform="translate(-9 -9)">
            <BarChart2 {...common} />
          </g>
        </g>
      )
    case 'gear':
      return (
        <g>
          <g transform="translate(-9 -9)">
            <Settings {...common} />
          </g>
        </g>
      )
    default:
      return null
  }
}

export default NodeIcon
