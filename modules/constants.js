const addBtn = document.querySelector('.add-form-button')
const nameInput = document.querySelector('.add-form-name')
const textInput = document.querySelector('.add-form-text')
const addForm = document.querySelector('.add-form')
const commentsList = document.querySelector('.comments')
const container = document.querySelector('.container')
const dateLoader = document.createElement('div')
const commentLoader = document.createElement('div')
const now = new Date()
const dateString =
    now.toLocaleDateString('ru-RU') +
    ', ' +
    now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })

export {
    addBtn,
    commentLoader,
    dateLoader,
    nameInput,
    textInput,
    addForm,
    container,
    commentsList,
    now,
    dateString,
}
