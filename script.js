const nameInput = document.querySelector('.add-form-name')
const textInput = document.querySelector('.add-form-text')
const addBtn = document.querySelector('.add-form-button')
const commentsList = document.querySelector('.comments')
const now = new Date()
const dateString =
    now.toLocaleDateString('ru-RU') +
    ', ' +
    now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })

const commentsGroup = [
    {
        name: 'Глеб Фокин',
        date: new Date(),
        text: 'Это будет первый комментарий на этой странице',
        likes: 3,
        isLiked: false,
    },
    {
        name: 'Варвара Н.',
        date: new Date(),
        text: 'Мне нравится как оформлена эта страница! ❤',
        likes: 75,
        isLiked: true,
    },
]

const initClickLikes = () => {
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

const initClickComment = () => {
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

const renderComments = () => {
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

renderComments()

addBtn.addEventListener('click', () => {
    if (!nameInput.value.trim() || !textInput.value.trim()) {
        alert('Пожалуйста, заполните все поля!')
        return
    }

    commentsGroup.push({
        name: nameInput.value.replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
        date: dateString,
        text: textInput.value.replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
        likes: 0,
        isLiked: false,
    })

    renderComments()

    nameInput.value = ''
    textInput.value = ''
})
console.log('It  works!')
