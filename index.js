import { nameInput, textInput, addBtn } from './modules/constants.js'
import { renderComments } from './modules/renderComments.js'
import { updateComments } from './modules/comments.js'
import { sanitizeInput } from './modules/processData.js'

const getComments = () => {
    return fetch('https://wedev-api.sky.pro/api/v1/nora-solntse/comments').then(
        (response) => {
            return response.json()
        },
    )
}

getComments().then((data) => {
    updateComments(data.comments)
    renderComments()
})

addBtn.addEventListener('click', () => {
    if (!nameInput.value.trim() || !textInput.value.trim()) {
        alert('Пожалуйста, заполните все поля!')
        return
    }

    const newComment = {
        text: `${sanitizeInput(textInput.value)}`,
        name: `${sanitizeInput(nameInput.value)}`,
    }

    fetch('https://wedev-api.sky.pro/api/v1/nora-solntse/comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
    })
        .then(() => {
            return getComments()
        })
        .then((data) => {
            updateComments(data.comments)
            renderComments()
        })

    nameInput.value = ''
    textInput.value = ''
})
