// const store = require('../store')

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
  $('#sigup').css('background-color', 'red')
  $('#sign-up').css('color', 'white')
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
