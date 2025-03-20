// prompts-server.js
// Import the MCP SDK modules
import {Server} from '@modelcontextprotocol/sdk/server/index.js'
import {StdioServerTransport} from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
  ListPromptsRequestSchema,
  GetPromptRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'

// TODO: Create an MCP server with prompts capabilities

// TODO: Implement handler for resources/list requests (can reuse from Act 2)

// TODO: Implement handler for resources/read requests (can reuse from Act 2)

// TODO: Implement handler for prompts/list requests that defines:
//       1. "market-trend" prompt - takes "symbol" and optional "timeframe" arguments
//       2. "market-crash-prediction" prompt - takes optional "severity" argument

// TODO: Implement handler for prompts/get requests:
//       - "market-trend" prompt
//       - "market-crash-prediction" prompt

// TODO: Initialize and start the server
