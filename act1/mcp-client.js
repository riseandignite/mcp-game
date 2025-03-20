import {Client} from '@modelcontextprotocol/sdk/client/index.js'
import {StdioClientTransport} from '@modelcontextprotocol/sdk/client/stdio.js'

// TODO: Create a client instance with name "disrupt-client" and version "0.1.0"

// TODO: Create a stdio transport that connects to "./act1/mcp-server.js"

async function main() {
  try {
    // TODO: Connect the client to the server using the transport

    console.log('Connected to server successfully!')
  } catch (error) {
    console.error('Failed to connect:', error)
    process.exit(1)
  }
}

main().catch((err) => {
  console.error('Unrecoverable error:', err)
})
