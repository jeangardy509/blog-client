'use strict'

const config = require('../config')
const store = require('../store')

const getBlogs = function () {
  return $.ajax({
    url: config.apiUrl + '/blogs'
  })
}
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
const updateBlogs = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/blogs/' + data.blog.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getBlogs,
  createBlogs,
  updateBlogs
}
