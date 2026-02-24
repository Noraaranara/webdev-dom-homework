import {
    nameInput,
    textInput,
    addBtn,
    dateString,
} from './modules/constants.js'
import { renderComments } from './modules/renderComments.js'
import { commentsGroup } from './modules/comments.js'
import { sanitizeInput } from './modules/processData.js'

addBtn.addEventListener('click', () => {
    if (!nameInput.value.trim() || !textInput.value.trim()) {
        alert('Пожалуйста, заполните все поля!')
        return
    }

    commentsGroup.push({
        name: sanitizeInput(nameInput.value),
        date: dateString,
        text: sanitizeInput(textInput.value),
        likes: 0,
        isLiked: false,
    })

    renderComments()

    nameInput.value = ''
    textInput.value = ''
})

renderComments()

console.log('It  works!')
