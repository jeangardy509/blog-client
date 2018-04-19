'use strict'

// const showBlogsTemplate = require('./../templates/blog-list.handlebars')
const store = require('../store')

const signUpSuccess = function () {
  // $('#email-field').val('')
  // $('#password-field').val('')
  // $('#password-confirmation').val('')
  $('#sign-up').text('Account Successfully created')
  // $('#sign-up').hide()
  $('#sign-up').css('background-color', 'purple')
  $('#sign-up').css('color', 'white')
  $('#sign-up').hide(9000)
}

const signUpFailure = function () {
  // $('#email-field').val('')
  // $('#password-field').val('')
  // $('#password-confirmation').val('')
  $('#sign-up').text('Sorry fail to Sign Up!')
  $('#sig-up').css('background-color', 'red')
  $('#sign-up').css('color', 'white')
}

const signInSuccess = function (data) {
  // $('#email-field').val('')
  // $('#password-field').val('')
  // $('#password-confirmation').val('')
  // $('#sign-up').hide(
  $('#sign-in').text('you are now log in, your user ID number is' + data.user.id)
  $('#sign-in').css('font-size', 20)
  $('#sign-in').css('background-color', 'purple')
  $('#sign-in').css('color', 'white')
  $('#signup').hide()
  $('#signin').hide()
  $('#change').show()
  $('#signout').show()
  $('#createblog').show()
  $('#getBlogsButton').show()
  $('#sign-in').hide(9000)
  // const handlebars = blogListHandlebars({blog: data.blogs})
  // $('.content').html(handlebars)
  store.user = data.user
}

const signInFailure = function () {
  // $('#email-field').val('')
  // $('#password-field').val('')
  // $('#password-confirmation').val('')
  $('#sign-in').text('cant log in!')
  $('#sig-in').css('background-color', 'red')
  $('#sign-in').css('color', 'white')
}

const signOutSuccess = function () {
  $('#signout').text('You have Successfully sign out')
  $('#signout').css('background-color', 'green')
  $('#signout').css('color', 'white')
  $('#signup').show()
  $('#signin').show()
  $('#change').hide()
  $('#signout').hide()
  $('#createblog').hide()
  $('#getBlogsButton').hide()
}
const signOutFailure = function () {
  // $('#signout').text('Something went wrong, please try again!')
  $('#signout').css('background-color', 'red')
  $('#signout').css('color', 'white')
}

const changePasswordSuccess = function () {
  $('#change-password').text('Password successfully change!')
  $('#change-password').css('background-color', 'red')
  $('#change-password').css('color', 'white')
}

const changePasswordFailure = function () {
  $('#change-password').text('Was not able to change password, plase try again!')
  $('#change-password').css('background-color', 'red')
  $('#change-password').css('color', 'white')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
