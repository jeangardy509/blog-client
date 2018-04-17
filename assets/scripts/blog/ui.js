'use strict'

// const store = require('../store')

const createBlogsSuccess = function (data) {
  $('#blog-form').text('Your budget has been successfully created!')
  $('#blog-form').css('background-color', 'red')
  $('#blog-form').css('color', 'white')
  console.log(data)
}

const createBlogsFailure = function (error) {
  $('#blog-form').text('Wasn\'t able to create a budget, please try again!')
  $('#blog-form').css('background-color', 'red')
  $('#blog-form').css('color', 'white')
  console.log(error)
}

module.exports = {
  createBlogsSuccess,
  createBlogsFailure
}
