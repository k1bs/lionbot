const botBuilder = require('./bot-logic')

const commandArray = [{
  keyword: '!1',
  response: 'Number One',
  enabled: true
},
{
  keyword: '!2',
  response: 'Number Two',
  enabled: false
},
{
  keyword: '!3',
  response: 'Number Three',
  enabled: true
}]

const falseArray = [{
  keyword: '!no',
  response: 'this shouldnt work',
  enabled: true
}]

let bot = botBuilder('k1bsTV', falseArray)

setTimeout(() => {
  bot.updateCommandArray(commandArray)
}, 1000)
