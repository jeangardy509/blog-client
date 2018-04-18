'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onGetBlogs = (event) => {
  event.preventDefault()
  api.getBlogs()
    .then(ui.getBlogsSuccess)
    .catch(ui.failure)
}
const onCreateBlogs = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createBlogs(data)
    .then(ui.createBlogsSuccess)
    .catch(ui.createBlogsFailure)
}
const onUpdateBlogs = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateSurvey(data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailed)
}
const addHandlers = () => {
  $('#getBlogsButton').on('click', onGetBlogs)
  $('#create').on('submit', onCreateBlogs)
  $('#update').on('submit', onUpdateBlogs)
}

module.exports = {
  addHandlers
}
