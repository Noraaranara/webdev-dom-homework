const addBtn = document.querySelector('.add-form-button')
const nameInput = document.querySelector('.add-form-name')
const textInput = document.querySelector('.add-form-text')
const commentsList = document.querySelector('.comments')
const now = new Date()
const dateString =
    now.toLocaleDateString('ru-RU') +
    ', ' +
    now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })

export { addBtn, nameInput, textInput, commentsList, now, dateString }
