'use strict'

// const setAPIOrigin = require('../../lib/set-api-origin')
// const config = require('./config')
const authEvents = require('./blog-auth/events.js')

$(() => {
  authEvents.addHandlers()
})
