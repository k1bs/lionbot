const TwitchBot = require('twitch-bot')

function botBuilder (channel, commandArray) {
  const bot = new TwitchBot({
    username: 'AOALionBot',
    oauth: 'oauth:ip7kzausrryqclqf8qvbfi0tft2enc',
    channels: [channel]
  })

  bot.mapArray = function (array) {
    array.map(command => {
      console.log(command)
      if (command.enabled) {
        this.on('message', chatter => {
          if (chatter.message === command.keyword) {
            this.say(command.response)
          }
        })
      }
    })
  }

  bot.updateCommandArray = function (array) {
    this.removeAllListeners('message')
    console.log('removing listeners')
    this.mapArray(array)
  }

  bot.on('join', () => {
    console.log('joined!')
    bot.mapArray(commandArray)
  })

  return bot
}

module.exports = botBuilder
