# MCP Prompts Implementation Challenge

## Objective

Implement a Model Context Protocol (MCP) server and client that support both Resources and Prompts capabilities, creating standardized templates for market analysis.

## Expected Output

When your client is run, it should produce output similar to:

```
Initializing MCP test client...
Connected to server successfully!

Available Prompts:
- market-trend: Analyze market trend for a specific symbol
  Arguments:
  - symbol (required): Stock symbol to analyze
  - timeframe: Analysis timeframe (days)
- market-crash-prediction: Predict potential market crashes or corrections
  Arguments:
  - severity: Severity threshold (1-10)

Executing market-trend prompt for AAPL...

Market Trend Analysis:
Description: Market trend analysis for AAPL over 7 days
Messages:
[user]: Analyze the market trend for AAPL over the next 7 days.

Executing market-crash-prediction prompt with severity 8...

Market Crash Prediction:
Description: Market crash prediction with severity threshold 8
Messages:
[user]: Analyze the likelihood of a market crash or significant correction with severity threshold 8 (on a scale of 1-10).
```

## Implementation Tasks

### 1. Server Implementation

- Create an MCP server with both Resources and Prompts capabilities enabled
- Implement the `prompts/list` handler that defines:
  - `market-trend` prompt with arguments:
    - `symbol` (required): Stock symbol to analyze
    - `timeframe` (optional): Analysis timeframe in days
  - `market-crash-prediction` prompt with arguments:
    - `severity` (optional): Severity threshold (1-10)
- Implement the `prompts/get` handler that:
  - For `market-trend` prompt:
    - Returns a sequence of messages including:
      - User question about the symbol and timeframe
  - For `market-crash-prediction` prompt:
    - Returns a multi-step conversation:
      - Initial user question about likelihood of crash
- Initialize the server with a StdioServerTransport

### 2. Client Implementation

- Create an MCP client
- Connect to the prompts server using StdioClientTransport
- List all available resources and prompts
- Execute the `market-trend` prompt for AAPL with a 7-day timeframe
- Execute the `market-crash-prediction` prompt with a severity of 8
- For each prompt execution:
  - Display the description and all messages
  - Format resources and text content appropriately
- Implement proper error handling

## Testing Your Implementation

1. Run the client: `npm run start:challenge3`
2. Verify that your output matches the expected format shown above

## Notes

- To debug server side, use the `console.error` function which will print to the console
