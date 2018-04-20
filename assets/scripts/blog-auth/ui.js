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
  $('#usernameField').val('')
  $('#EmailField').val('')
  $('#PasswordField').val('')
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('Please check your credentials, and try again')
  $('#message').css('font-size', 20)
  $('#message').css('background-color', 'red')
  $('#message').css('color', 'white')
  $('#message').hide(9000)
  $('#sign-in').hide()
  $('#change').hide()
  $('#signout').hide()
  $('#usernameField').val('')
  $('#EmailField').val('')
  $('#PasswordField').val('')
}

const signOutSuccess = function () {
  $('#message').text('We hope to see you again soon')
  $('#message').css('font-size', 20)
  $('#message').css('background-color', 'blue')
  $('#message').css('color', 'white')
  $('#message').hide(9000)
  $('#signup').show()
  $('#signin').show()
  $('#change').hide()
  $('#signout').hide()
  $('#createblog').hide()
  $('#getBlogsButton').hide()
  $('#content').hide()
  $('#create').hide()
}

const signOutFailure = function () {
  $('#message').text('We hope to see you again soon')
  $('#message').css('font-size', 20)
  $('#message').css('background-color', 'blue')
  $('#message').css('color', 'white')
  $('#message').hide(9000)
  $('#signup').show()
  $('#signin').show()
  $('#change').hide()
  $('#signout').hide()
  $('#createblog').hide()
  $('#getBlogsButton').hide()
  $('#content').hide()
  $('#create').hide()
}

const changePasswordSuccess = function () {
  $('#message').text('Your password has been successfully change')
  $('#message').css('font-size', 20)
  $('#message').css('background-color', 'blue')
  $('#message').css('color', 'white')
  $('#message').hide(9000)
  $('#signup').hide()
  $('#change').hide()
  $('#signout').hide()
  $('#signin').show()
  $('#createblog').hide()
  $('#passwordFields').val('')
  $('#passwordFields').val('')
  $('#change-password').hide()
}

const changePasswordFailure = function () {
  $('#message').text('Something went wrong, please try again')
  $('#message').css('font-size', 20)
  $('#message').css('background-color', 'blue')
  $('#message').css('color', 'white')
  $('#message').hide(9000)
  $('#signup').hide()
  $('#change').hide()
  $('#signout').hide()
  $('#signin').show()
  $('#createblog').hide()
  $('#passwordFields').val('')
  $('#passwordFields').val('')
  $('#change-password').hide()
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
