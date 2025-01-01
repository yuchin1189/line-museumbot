import 'dotenv/config'
import linebot from 'linebot'
import commandUSD from './command/usd.js'
import commandMuseum from './command/museum.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
})

bot.on('message', (event) => {
  if (event.message.type === 'location') {
    commandMuseum(event)
    console.log('location sent')
  } else if (event.message.text === 'usd') {
    commandUSD(event)
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('🤖 啟動')
})
