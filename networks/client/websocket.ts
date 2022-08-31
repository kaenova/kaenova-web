
export function webSocketInstance(path: string): WebSocket {
  let endpoint = `${process.env.NEXT_PUBLIC_KAENOVA_WEBSOCKET_ENDPOINT}${path}`
  var ws = new WebSocket(endpoint)
  return ws
}