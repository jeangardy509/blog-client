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

const deleteBlogs = function (id) {
  return $.ajax({
    url: config.apiUrl + '/blogs/' + id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getBlogs,
  createBlogs,
  updateBlogs,
  deleteBlogs
}
