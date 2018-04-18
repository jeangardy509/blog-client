'use strict'

const showBlogsTemplate = require('../templates/blog-list.handlebars')
// const store = require('../store')

const getBlogsSuccess = (data) => {
  console.log(data)
  const showBlogsHtml = showBlogsTemplate({ blogs: data.blogs })
  $('.content').append(showBlogsHtml)
}

const createBlogsSuccess = function (data) {
  $('#blog-form').text('Your budget has been successfully created!')
  $('#blog-form').css('background-color', 'red')
  $('#blog-form').css('color', 'white')
}

const createBlogsFailure = function (error) {
  $('#blog-form').text('Wasn\'t able to create a budget, please try again!')
  $('#blog-form').css('background-color', 'red')
  $('#blog-form').css('color', 'white')
  console.log(error)
}

const updateBlogsSuccess = function () {
  // $('#message').text('Survey Updated')
  // $('#message').css('background-color', 'green')
  // $('#updateId').val('')
  // $('#updateOptionOne').val('')
  // $('#updateOptionTwo').val('')
  // $('#updateOptionThree').val('')
  // $('#handlebars-here').html('Click show my surveys to see changes')

}

const updateBlogsFailure = function (data) {
  // $('#message').text('Problem Updating, Please try again')
  // $('#message').css('background-color', 'red')
  $('#updateId').val('')

  $('#updateOptionTwo').val('')
  $('#updateOptionThree').val('')
}

module.exports = {
  createBlogsSuccess,
  createBlogsFailure,
  updateBlogsSuccess,
  updateBlogsFailure,
  getBlogsSuccess

}
