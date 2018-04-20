'use strict'

// const showBlogsTemplate = require('./../templates/blog-list.handlebars')
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('WELCOME TO BLOG SPACE')
  $('#message').css('color', 'white')
  $('#message').css('background-color', 'blue')
  $('#message').css('font-size', 20)
  $('#message').hide(9000)
  $('#signup').hide()
  $('#change').hide()
  $('#signout').hide()
  $('#sign-up').hide()
  $('#signin').show()
  $('#firstNameField').val('')
  $('#lastNameField').val('')
  $('#firstNameField').val('')
  $('#userNameField').val('')
  $('#emailField').val('')
  $('#passwordField').val('')
  $('#passwordConfField').val('')
}

const signUpFailure = function () {
  $('#message').text('oops we were unable to create you an account. Please try again')
  $('#message').css('color', 'white')
  $('#message').css('background-color', 'red')
  $('#message').css('font-size', 20)
  $('#message').hide(9000)
  $('#signup').show()
  $('#change').hide()
  $('#signout').hide()
  $('#sign-up').hide()
  $('#signin').show()
  $('#firstNameField').val('')
  $('#lastNameField').val('')
  $('#firstNameField').val('')
  $('#userNameField').val('')
  $('#emailField').val('')
  $('#passwordField').val('')
  $('#passwordConfField').val('')
}

const signInSuccess = function (data) {
  $('#message').text('you are now log in, your user ID number is' + data.user.id)
  $('#message').css('font-size', 20)
  $('#message').css('background-color', 'purple')
  $('#message').css('color', 'white')
  $('#message').hide(9000)
  $('#signup').hide()
  $('#signin').hide()
  $('#sign-in').hide()
  $('#change').show()
  $('#signout').show()
  $('#createblog').show()
  $('#getBlogsButton').show()
  $('#userNameField').val('')
  $('#emailField').val('')
  $('#passwordField').val('')
  store.user = data.user
}

const signInFailure = function () {
  // $('#email-field').val('')
  // $('#password-field').val('')
  // $('#password-confirmation').val('')
  $('#message').text('cant log in!')
  $('#sig-in').css('background-color', 'red')
  $('#sign-in').css('color', 'white')
}

const signOutSuccess = function () {
  // $('#message').text('You have Successfully sign out')
  // $('#signout').css('background-color', 'green')
  // $('#signout').css('color', 'white')
  $('#signup').show()
  $('#signin').show()
  $('#change').hide()
  $('#signout').hide()
  $('#createblog').hide()
  $('#getBlogsButton').hide()
  $('#content').hide()
  $('#create').hide()
  $('#change-password').hide()
}
const signOutFailure = function () {
  // $('#signout').text('Something went wrong, please try again!')
  // $('#message').css('background-color', 'red')
  // $('#signout').css('color', 'white')
}

const changePasswordSuccess = function () {
  // $('#message').text('Password successfully change!')
  // $('#change-password').css('background-color', 'red')
  // $('#change-password').css('color', 'white')
}

const changePasswordFailure = function () {
  // $('#message').text('Was not able to change password, plase try again!')
  // $('#change-password').css('background-color', 'red')
  // $('#change-password').css('color', 'white')
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
