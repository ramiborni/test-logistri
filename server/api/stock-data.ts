import { defineEventHandler } from 'h3'

const ALPHA_VANTAGE_API_KEY = 'XOX6GPQ4AS0MKM1E'
const MFN_FEED_URL =
  'https://feed.mfn.se/v1/feed/74dc4741-3d06-41bc-96b3-ac7f1353eccc.json'

export default defineEventHandler(async () => {
  try {
    // Fetch data from MFN feed
    const mfnResponse = await fetch(MFN_FEED_URL)
    const mfnData = await mfnResponse.json()

    // Extract tickers from the first item in the feed
    const firstItem = mfnData.items[0]
    if (!firstItem || !firstItem.author || !firstItem.author.tickers) {
      throw new Error('No tickers found in MFN data')
    }

    const tickers = firstItem.author.tickers
    if (tickers.length === 0) {
      throw new Error('No tickers found in MFN data')
    }

    // Assuming first ticker for simplicity
    const ticker = tickers[0].split(':')[1] // Remove 'XSAT:' prefix

    // Fetch stock data from Alpha Vantage
    const alphaVantageResponse = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&apikey=${ALPHA_VANTAGE_API_KEY}`,
    )
    const alphaVantageData = await alphaVantageResponse.json()

    console.log(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&apikey=${ALPHA_VANTAGE_API_KEY}`)

    console.log(alphaVantageData);

    const dailyData = alphaVantageData['Time Series (Daily)']
    const today = Object.keys(dailyData)[0]
    const yesterday = Object.keys(dailyData)[1]

    const todayData = dailyData[today]
    const yesterdayData = dailyData[yesterday]

    const stockPrice = parseFloat(todayData['4. close'])
    const previousClose = parseFloat(yesterdayData['4. close'])
    const changeAmount = stockPrice - previousClose
    const changePercentage = (changeAmount / previousClose) * 100

    const yearHigh = Math.max(
      ...Object.values(dailyData).map((day: any) => parseFloat(day['2. high'])),
    )
    const yearLow = Math.min(
      ...Object.values(dailyData).map((day: any) => parseFloat(day['3. low'])),
    )

    return {
      stockPrice,
      changeAmount,
      changePercentage,
      yearHigh,
      yearLow,
    }
  } catch (error) {
    console.error('Error fetching stock data:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch stock data',
    })
  }
})
