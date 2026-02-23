import {
    commentsList,
    dateLoader,
    commentLoader,
    addForm,
} from './constants.js'
import { fetchAndRenderComments } from './fetchAndRenderComments.js'

export const createDateLoader = () => {
    dateLoader.classList.add('dateLoader')
    dateLoader.innerHTML = 'Пожалуйста, подождите, комментарии загружаются...'
    return dateLoader
}

commentsList.parentNode.insertBefore(createDateLoader(), commentsList)

export const loadComments = () => {
    dateLoader.style.display = 'block'
    fetchAndRenderComments().then(() => {
        dateLoader.style.display = 'none'
    })
}

export const createCommentLoader = () => {
    commentLoader.classList.add('commentLoader')
    commentLoader.style.padding = '40px'
    commentLoader.style.display = 'none'
    commentLoader.innerHTML =
        'Пожалуйста, подождите, комментарий отправляется...'
    return commentLoader
}

addForm.parentNode.insertBefore(createCommentLoader(), addForm)

export const hiddenLoader = () => {
    if (commentLoader) {
        commentLoader.style.display = 'none'
    }
}
