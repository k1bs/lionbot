const TwitchBot = require('twitch-bot')

const LionBot = new TwitchBot({
  username: 'AOALionBot',
  oauth: 'oauth:ip7kzausrryqclqf8qvbfi0tft2enc',
  channel: 'k1bsTV'
})

LionBot.on('join', () => {
  LionBot.say('hello world!')
  LionBot.on('message', chatter => {
    console.log(chatter)
    if (chatter.message === '!test') {
      LionBot.say('test message')
    }
  })
})

LionBot.on('error', err => {
  console.log(err)
})
