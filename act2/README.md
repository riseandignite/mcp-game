# MCP Resources Implementation Task

## Objective

Implement a Model Context Protocol (MCP) server and client that support the Resources capability, exposing specific market and prediction data.

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

Recent Financial News:
----------------------------------
FINANCIAL TIMES - Market volatility ahead, analysts warn
BLOOMBERG - Tech sector braces for potential correction
WSJ - Federal Reserve signals interest rate changes

Market Prediction:
----------------------------------
CASSANDRA PROTOCOL - PREDICTION ANALYSIS
========================================
Market Trend: DOWNWARD
Confidence: HIGH (83.7%)
Estimated S&P 500 movement: -15.3% in next 48 hours
Warning: MAJOR MARKET CORRECTION IMMINENT
========================================

AAPL Historical Data:
----------------------------------
2023-01: 150.25
2023-02: 155.74
2023-03: 160.01

MSFT Historical Data:
----------------------------------
2023-01: 240.35
2023-02: 255.78
2023-03: 275.23

AAPL Current Data:
----------------------------------
Current Price: 163.77
Volume: 47.8M
P/E Ratio: 27.5
```

## Implementation Tasks

### 1. Server Implementation

- Create an MCP server with Resources capability enabled
- Implement the `resources/list` handler that returns:
  - Direct resources:
    - `news://finance/recent` - Recent Financial News
    - `cassandra://prediction/market` - Market Prediction
  - Resource templates:
    - `market://historical/{symbol}` - Historical Market Data
    - `market://current/{symbol}` - Current Market Data
- Implement the `resources/read` handler that:
  - Parses the requested URI
  - Returns the appropriate content from the sample data
  - Handles errors for invalid URIs
- Initialize the server with a StdioServerTransport

### 2. Client Implementation

- Create an MCP client
- Connect to the resource server using StdioClientTransport
- List all available resources using `resources/list`
- Read each of the following resources using `resources/read`:
  1. `news://finance/recent`
  2. `cassandra://prediction/market`
  3. `market://historical/AAPL`
  4. `market://historical/MSFT`
  5. `market://current/AAPL`
- Format and display each resource's content with appropriate headers
- Implement proper error handling

## Testing Your Implementation

1. Run the client: `npm run start:challenge2`
2. Verify that your output matches the expected format shown above

## Notes

- To debug server side use the `console.error` function to print the error to the console.
