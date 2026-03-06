import {
    commentsList,
    dateLoader,
    commentLoader,
    addForm,
    container,
} from './constants.js'
import { fetchAndRenderComments } from './fetchAndRenderComments.js'

export const createDateLoader = () => {
    dateLoader.classList.add('dateLoader')
    dateLoader.innerHTML = 'Пожалуйста, подождите, комментарии загружаются...'
    return dateLoader
}

container.parentElement.insertBefore(createDateLoader(), commentsList)

export const loadComments = () => {
    dateLoader.style.display = 'block'
    fetchAndRenderComments()
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
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

document.body.insertBefore(createCommentLoader(), addForm)

export const hiddenLoader = () => {
    if (commentLoader) {
        commentLoader.style.display = 'none'
    }
}
