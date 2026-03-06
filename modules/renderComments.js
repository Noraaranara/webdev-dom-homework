import { getUserName } from './api.js'
import { commentsGroup } from './comments.js'
import { dateString } from './constants.js'
import { app } from './constants.js'
import {
    initClickLikes,
    initClickComment,
    initClickBtn,
} from './initListeners.js'
import { renderLogin } from './renderLogin.js'

const userName = getUserName()

const authBlock = `
    <a class="login-link">Чтобы добавить комментарий, авторизуйтесь</a>
`

export const renderComments = () => {
    const commentHtml = commentsGroup
        .map((comment, index) => {
            return `<li data-index="${index}" class="comment">
        <div class="comment-header">
        <div>${comment.author.name}</div>
        <div>${dateString}</div>
        </div>
        <div class="comment-body">
        <div class="comment-text">
        ${comment.text}
        </div>
        </div>
        <div class="comment-footer">
        <div class="likes">
            <span class="likes-counter">${comment.likes}</span>
            <button data-index="${index}" class="like-button ${comment.isLiked ? '-active-like' : ''}"></button>
        </div>
        </div>
    </li>`
        })
        .join('')

    const appHtml = `
    <ul class="comments">
        ${commentHtml}
    </ul>
    <div class="add-form">
        <input
            type="text"
            class="add-form-name" value="${userName}"${userName ? 'readonly' : ''} readonly
            placeholder="Введите ваше имя"
        />
        <textarea
            type="textarea"
            class="add-form-text"
            placeholder="Введите ваш коментарий"
            rows="4"
        ></textarea>
        <div class="add-form-row">
            <button class="add-form-button">Написать</button>
        </div>
    </div>
        ${authBlock}`

    app.innerHTML = appHtml

    const loginLink = document.querySelector('.login-link')
    if (loginLink) {
        loginLink.addEventListener('click', () => {
            renderLogin()
        })

        initClickLikes()
        initClickComment()
        initClickBtn()
    }
}
