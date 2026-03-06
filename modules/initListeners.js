import { commentsGroup } from './comments.js'
import { renderComments } from './renderComments.js'
// import { textInput } from './constants.js'
import { fetchPost } from './fetchAndRenderComments.js'
import { renderLogin } from './renderLogin.js'
import { token } from './api.js'

export const initClickLikes = () => {
    const likes = document.querySelectorAll('.like-button')

    for (const like of likes) {
        like.addEventListener('click', (event) => {
            event.stopPropagation()
            const index = like.dataset.index
            const comment = commentsGroup[index]

            if (comment.isLiked) {
                comment.likes--
                comment.isLiked = false
            } else {
                comment.likes++
                comment.isLiked = true
            }
            renderComments()
        })
    }
}

export const initClickComment = () => {
    const commentsEls = document.querySelectorAll('.comment')
    const textInput = document.querySelector('.add-form-text')

    if (!commentsEls || !textInput) {
        return
    }

    for (const commentsEl of commentsEls) {
        commentsEl.addEventListener('click', () => {
            const index = commentsEl.dataset.index
            const comment = commentsGroup[index]

            textInput.value = `> ${comment.author.name}: ${comment.text}\n\n`
            textInput.focus()
        })
    }
}

export const initClickBtn = () => {
    const addBtn = document.querySelector('.add-form-button')
    const nameInput = document.querySelector('.add-form-name')
    const textInput = document.querySelector('.add-form-text')
    if (!addBtn) {
        return
    }
    addBtn.addEventListener('click', () => {
        if (!nameInput.value.trim() || !textInput.value.trim()) {
            alert('Пожалуйста, заполните все поля!')
            return
        }
        if (!token) {
            alert('Чтобы добавить комментарий, авторизуйтесь')
            renderLogin()
            return
        }

        fetchPost()
    })
}
