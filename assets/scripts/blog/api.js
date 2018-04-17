'use strict'

const config = require('../config')
const store = require('../store')

const createBlogs = function (data) {
  return $.ajax({
    url: config.apiUrl + '/blogs',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
module.exports = {
  createBlogs
}
