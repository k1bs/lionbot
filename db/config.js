// Set options object
const options = {
  query: (e) => {
    // Console log every query
    console.log(e.query)
  }
}

// Import pg-promise, assign to variable pgp with options
const pgp = require('pg-promise')(options)

// Add conditional database setup for dev
function setDatabase () {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    return pgp({
      database: 'lionbot_dev',
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
