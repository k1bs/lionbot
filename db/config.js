// Set options object
const options = {
  query: (e) => {
    // Console log every query
    console.log(e.query)
  }
}

// Import pg-promise, assign to variable pgp with options
const pgp = require('pg-promise')(options)

// Add conditional database setup for dev and test
function setDatabase () {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    return pgp({
      database: 'lionbot_dev',
      port: 5432,
      host: 'localhost'
    })
  } else if (process.env.NODE_ENV === 'test') {
    return pgp({
      database: 'lionbot_test',
      port: 5432,
      host: 'localhost'
    })
  } else if (process.env.NODE === 'production') {
    return pgp(process.env.DATABASE_URL)
  }
}

// Call pgp conditional function
const db = setDatabase()

module.exports = db
