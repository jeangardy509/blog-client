'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onGetBlogs = (event) => {
  event.preventDefault()
  api.getBlogs()
    .then(ui.getBlogsSuccess)
    .catch(ui.failure)
  $('#content').toggle()
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
  api.updateBlogs(data)
    .then(ui.updateBlogsSuccess)
    .catch(ui.updateBlogsFailure)
}

const onDeleteBlogs = function (event) {
  event.preventDefault()
  const id = event.target.dataset.id
  api.deleteBlogs(id)
    .then(ui.deleteBlogsSuccess)
    .catch(ui.deleteBlogsFailure)
}

const addHandlers = () => {
  $('#getBlogsButton').on('click', onGetBlogs)
  $('#create').on('submit', onCreateBlogs)
  $('#update-blog').on('submit', onUpdateBlogs)
  $('#content').on('click', '.delete-blog-button', onDeleteBlogs)
  // $('#searchbar').on('click', onGetBlogs)
  // $('#content').on('click', '.update', onUpdateBlogs)
  // $('#content').on('click', onUpdateBlogs => {
  //   $('#blog-form').show()
  // })
}

module.exports = {
  addHandlers
}
