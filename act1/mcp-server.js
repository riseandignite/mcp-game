import {Server} from '@modelcontextprotocol/sdk/server/index.js'
import {StdioServerTransport} from '@modelcontextprotocol/sdk/server/stdio.js'

async function main() {
  // Create the server
  const server = new Server(
    {
      name: 'test-mcp-server',
      version: '1.0.0',
    },
    {
      capabilities: {}, // Basic capabilities only
    }
  )

  // Set up the transport
  const transport = new StdioServerTransport()

  // Connect the server to the transport

  await server.connect(transport)
}

// Start the server
main().catch((err) => {
  console.error('[SERVER] Error:', err)
  process.exit(1)
})
