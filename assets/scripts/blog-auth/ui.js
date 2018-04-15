const store = require('../store')

const signUpSuccess = function () {
  // $('#email-field').val('')
  // $('#password-field').val('')
  // $('#password-confirmation').val('')
  // $('#sign-up').hide(
  $('#sign-up').text('Account Successfully created')
  $('#sign-up').css('background-color', 'green')
  $('#sign-up').css('color', 'white')
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
  $('#sign-in').text('you are now log in' + data.user.id)
  $('#sign-in').css('background-color', 'green')
  $('#sign-in').css('color', 'white')
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
  $('#sign-out').text('You have Successfully sign out')
  $('#sign-out').css('background-color', 'green')
  $('#sign-out').css('color', 'white')
}
const signOutFailure = function () {
  $('#sign-out').text('Something went wrong, please try again!')
  $('#sign-out').css('background-color', 'red')
  $('#sign-out').css('color', 'white')
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
