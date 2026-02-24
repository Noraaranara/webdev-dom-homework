import { commentsGroup } from './comments.js'
import { dateString, commentsList } from './constants.js'
import { initClickLikes, initClickComment } from './initListeners.js'

export const renderComments = () => {
    commentsList.innerHTML = commentsGroup
        .map((comment, index) => {
            return `<li data-index="${index}" class="comment">
        <div class="comment-header">
        <div>${comment.name}</div>
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

    initClickLikes()
    initClickComment()
}
