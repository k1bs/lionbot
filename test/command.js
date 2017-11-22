/* eslint-env mocha */

process.env.NODE_ENV = 'test'

const Command = require('../models/Command')

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()

chai.use(chaiHttp)

describe('Commands', () => {
  beforeEach((done) => {
    Command.destroyAll()
    done()
  })

  describe('/GET command', () => {
    it('it should GET all commands at /test', (done) => {
      chai.request(server)
        .get('/api/commands/test')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.data.should.be.a('array')
          res.body.data.length.should.be.eql(0)
          console.log(err)
          done()
        })
    })
    it('it should error a get request at / without a userId', (done) => {
      chai.request(server)
        .get('/api/commands')
        .end((err, res) => {
          res.should.have.status(500)
          res.body.should.have.property('error')
          console.log(err)
          done()
        })
    })
  })
  describe('/POST command', () => {
    // it('it should POST a command', (done) => {
    //   let command = {
    //     keyword: '!test',
    //     response: 'This is a test'
    //   }
    //   let req = {
    //     user: {
    //       id: 1
    //     }
    //   }
    //   chai.request(server)
    //     .post('/api/commands')
    //     .send(command, req)
    //     .end((err, res) => {
    //       res.should.have.status(201)
    //       res.body.data.should.be.a('array')
    //       res.body.data.length.should.be.eql(1)
    //       console.log(err)
    //       done()
    //     })
    // })
    it('it should throw an error without a userId', (done) => {
      let command = {
        keyword: '!test',
        response: 'This is a test'
      }
      chai.request(server)
        .post('/api/commands')
        .send(command)
        .end((err, res) => {
          res.should.have.status(500)
          res.body.should.have.property('error')
          console.log(err)
          done()
        })
    })
  })
})
