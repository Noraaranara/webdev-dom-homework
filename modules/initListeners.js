import { commentsGroup } from './comments.js'
import { renderComments } from './renderComments.js'
import { textInput } from './constants.js'

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

    for (const commentsEl of commentsEls) {
        commentsEl.addEventListener('click', () => {
            const index = commentsEl.dataset.index
            const comment = commentsGroup[index]

            textInput.value = `> ${comment.name}: ${comment.text}\n\n`
            textInput.focus()

            renderComments()
        })
    }
}
