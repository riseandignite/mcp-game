# MCP Tools Implementation Challenge

## Objective

Implement two MCP tools: 'market-trend' and 'market-crash-prediction'. This challenge focuses on understanding how the Model Context Protocol Tools capability works.

## Expected Output

When your client is run, it should produce output similar to:

```
Initializing MCP test client...
Connected to server successfully!

Available Tools:
- market-trend: Analyze market trend for a specific stock symbol
  Parameters:
  - symbol (required): Stock symbol to analyze (e.g., AAPL, MSFT)
  - timeframe: Analysis timeframe in days

- market-crash-prediction: Predict potential market crashes or corrections
  Parameters:
  - severity: Severity threshold (1-10)

Executing market-trend tool for AAPL...

Market Trend Analysis:
Based on the current price of $163.77 and historical trends, I predict AAPL will rise over the next 7 days.
This analysis is supported by recent market news and technical indicators.

Executing market-crash-prediction tool with severity 8...

Market Crash Prediction:
Based on current market indicators and news analysis, I estimate a 90% probability of a significant market correction
(severity 8 or higher) within the next 48 hours. Key risk factors include increasing volatility, negative news sentiment,
and technical indicators suggesting overbought conditions.
```

## Testing Your Implementation

1. Run the client: `npm run start:challenge4`
2. Verify that your output matches the expected format shown above

## Notes

- To debug server side, use the `console.error` function which will print to the console
