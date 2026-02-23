import { updateComments } from './comments.js'
import { renderComments } from './renderComments.js'
import { sanitizeInput } from './processData.js'
import { textInput, nameInput, addForm, commentLoader } from './constants.js'
import { createCommentLoader, hiddenLoader } from './loaders.js'

export const fetchAndRenderComments = () => {
    return fetch('https://wedev-api.sky.pro/api/v1/nora-solntse/comments')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            updateComments(data.comments)
            renderComments()
        })
}

export const fetchPost = () => {
    createCommentLoader()
    commentLoader.style.display = 'block'
    addForm.classList.add('hidden')

    const newComment = {
        text: `${sanitizeInput(textInput.value)}`,
        name: `${sanitizeInput(nameInput.value)}`,
    }

    return fetch('https://wedev-api.sky.pro/api/v1/nora-solntse/comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
    })
        .then(() => {
            return fetchAndRenderComments()
        })
        .then(() => {
            nameInput.value = ''
            textInput.value = ''
        })
        .then(() => {
            hiddenLoader()
            addForm.classList.remove('hidden')
        })
}
