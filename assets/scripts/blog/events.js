'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onCreateBlogs = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createBlogs(data)
    .then(ui.createBlogsSuccess)
    .catch(ui.createBlogsFailure)
  console.log('Data is', data)
}

const addHandlers = () => {
  $('#create').on('submit', onCreateBlogs)
}

module.exports = {
  addHandlers
}
