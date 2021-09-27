
import { AnalyticsPlugin } from 'analytics'

interface DebuggerPluginConfig {
  debug: boolean
}
interface DebuggerPluginData {
  config: DebuggerPluginConfig
}

function log (config: DebuggerPluginConfig, ...params: any[]) {
  if (!config.debug) return

  console.info('[analytics-plugin-debugger]', `[${process.env.NODE_ENV}]`, ...params)
}

export default function debuggerPlugin ({ debug = true }): AnalyticsPlugin {
  return {
    name: 'debugger',
    config: { debug },
    initialize: (data: DebuggerPluginData) => log(data.config, 'Initialize Call', data),
    page: (data: DebuggerPluginData) => log(data.config, 'Page Call', data),
    track: (data: DebuggerPluginData) => log(data.config, 'Track Call', data),
    identify: (data: DebuggerPluginData) => log(data.config, 'Identify Call', data)
  }
}
