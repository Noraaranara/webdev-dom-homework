import { updateComments } from './comments.js'
import { renderComments } from './renderComments.js'
import { sanitizeInput } from './processData.js'
import { textInput, nameInput, addForm, commentLoader } from './constants.js'
import { createCommentLoader, hiddenLoader } from './loaders.js'
import { getRequest, postRequest } from './api.js'

export const fetchAndRenderComments = () => {
    return getRequest().then((data) => {
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

    return postRequest(newComment)
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
