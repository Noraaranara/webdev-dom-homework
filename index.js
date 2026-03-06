import { loadComments } from './modules/loaders.js'

import { renderLogin } from './modules/renderLogin.js'

document.addEventListener('DOMContentLoaded', () => {
    renderLogin()
    loadComments()
})
