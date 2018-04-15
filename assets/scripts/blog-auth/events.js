const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('say hello world!')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const addHandlers = () => {
  // $('#sign-up').on('click', onSignUp)
  $('#sign-up').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}
