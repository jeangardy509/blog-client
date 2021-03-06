const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onChangePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  // $('#sign-out').on('click', onSignOut)
  // $('#sign').on('submit', onSignOut)
  $('#signout').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('a.show-form').on('click', function () {
    $('#sign-up').toggle()
  })
  $('a.show-in').on('click', function () {
    $('#sign-in').toggle()
  })
  $('a.show-pass').on('click', function () {
    $('#change-password').toggle()
  })
  // $('#createblog').on('click', function () {
  //   $('#change-password').toggle()
  // })
  $('#createblog').on('click', () => {
    $('#searchbar').hide()
    $('#blog-form').show()
  })
}

module.exports = {
  addHandlers
}
