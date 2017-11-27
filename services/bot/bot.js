const EventEmitter = require('events').EventEmitter
const testEmitter = new EventEmitter()

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

botBuilder('k1bsTV', falseArray)
testEmitter.on('restart', () => {
  console.log('restart received')
})
testEmitter.emit('restart')

setTimeout(() => {
  botBuilder('k1bsTV', commandArray)
}, 1000)
