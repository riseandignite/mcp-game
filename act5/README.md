# MCP Prompts Implementation Challenge

## Objective

Implement a Model Context Protocol (MCP) server and client that support Resources, Prompts and Tools capabilities.

## Expected Output

When your client is run, it should produce output similar to:

```
Initializing MCP test client...
Connected to server successfully!

Available Resources:
- Recent Financial News (news://finance/recent)
- Market Prediction (cassandra://prediction/market)

Resource Templates:
- Historical Market Data (market://historical/{symbol})
- Current Market Data (market://current/{symbol})

Available Prompts:
- market-trend: Analyze market trend for a specific symbol
  Arguments:
  - symbol (required): Stock symbol to analyze
  - timeframe: Analysis timeframe (days)
- market-crash-prediction: Predict potential market crashes or corrections
  Arguments:
  - severity: Severity threshold (1-10)

Available Tools:
- market-trend: Analyze market trend for a specific stock symbol
  Parameters:
  - symbol (required): Stock symbol to analyze (e.g., AAPL, MSFT)
  - timeframe: Analysis timeframe in days

- market-crash-prediction: Predict potential market crashes or corrections
  Parameters:
  - severity: Severity threshold (1-10)

Executing market-trend prompt for AAPL...
```

## Testing Your Implementation

1. Run the client: `npm run start:challenge5`
2. Verify that your output matches the expected format shown above

## Notes

- To debug server side, use the `console.error` function which will print to the console
