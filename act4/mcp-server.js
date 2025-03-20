// Sample market data and news content - already implemented for you
const marketData = {
  AAPL: {
    historical: '2023-01: 150.25\n2023-02: 155.74\n2023-03: 160.01\n',
    current:
      'Current Price: 163.77\nVolume: 47.8M\nP/E Ratio: 27.5\n',
  },
  MSFT: {
    historical: '2023-01: 240.35\n2023-02: 255.78\n2023-03: 275.23\n',
    current:
      'Current Price: 290.36\nVolume: 30.2M\nP/E Ratio: 32.1\n',
  },
  GOOG: {
    historical: '2023-01: 100.15\n2023-02: 105.78\n2023-03: 110.23\n',
    current:
      'Current Price: 115.36\nVolume: 25.1M\nP/E Ratio: 22.4\n',
  },
}

// Helpful utility functions
// Get current price for a stock symbol from marketData
function getCurrentPrice(symbol) {
  if (marketData[symbol] && marketData[symbol].current) {
    const priceMatch = marketData[symbol].current.match(
      /Current Price: ([\d.]+)/
    )
    if (priceMatch) {
      return priceMatch[1]
    }
  }
  return 'Unknown'
}

// Create an MCP server with tools capability

// TODO: Implement the handler for tools/list requests
// This should list two tools:
// 1. "market-trend" - Analyze market trend for a specific stock symbol
//    Parameters: symbol (required), timeframe (optional)
// 2. "market-crash-prediction" - Predict potential market crashes
//    Parameters: severity (optional)

// TODO: Implement the handler for tools/call requests
// This should handle calls to both tools:
//
// For "market-trend":
// - Take the symbol and timeframe parameters
// - Return an analysis of the stock's trend
// - Use the getCurrentPrice() helper function
//
// For "market-crash-prediction":
// - Take the severity parameter (1-10)
