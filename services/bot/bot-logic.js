const TwitchBot = require('twitch-bot')

function botBuilder (channel, commandArray) {
  const Bot = new TwitchBot({
    username: 'AOALionBot',
    oauth: 'oauth:ip7kzausrryqclqf8qvbfi0tft2enc',
    channel: channel
  })

  Bot.on('join', () => {
    console.log('joined!')
    commandArray.map(command => {
      console.log(command)
      if (command.enabled) {
        Bot.on('message', chatter => {
          if (chatter.message === command.keyword) {
            Bot.say(command.response)
          }
        })
      }
    })
  })
  Bot.on('restart', () => {
    console.log('restarting!')
    Bot.removeAllListeners('message')
    Bot.close()
  })
}

module.exports = botBuilder
