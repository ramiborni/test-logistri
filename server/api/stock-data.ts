import { defineEventHandler } from 'h3'

const DATABLOCKS_API_URL =
  'https://widget.datablocks.se/api/rose/widgets/stock-table?token=9d72a50e-0c23-42d4-9d1c-63b8381d0b99&type=json'

export default defineEventHandler(async () => {
  try {
    const response = await fetch(DATABLOCKS_API_URL)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()

    if (!data.stocks || data.stocks.length === 0) {
      throw new Error('No stock data available')
    }

    const stockData = data.stocks[0] // Assuming we're only interested in the first stock

    return {
      stockPrice: stockData.latestPrice,
      changeAmount: stockData.deltaTodaySek,
      changePercentage: stockData.deltaToday * 100, // Convert to percentage
      yearHigh: stockData.maxPriceYear,
      yearLow: stockData.minPriceYear,
      symbol: stockData.stockSymbol,
      latestDate: stockData.latestDate,
      latestTime: stockData.latestTime,
      marketCap: stockData.mcap,
      allTimeHigh: stockData.ath,
    }
  } catch (error) {
    console.error('Error fetching stock data:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch stock data',
    })
  }
})
