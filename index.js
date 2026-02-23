import { fetchAndRenderComments } from './modules/fetchAndRenderComments.js'
import { loadComments } from './modules/loaders.js'
import { initClickBtn } from './modules/initListeners.js'

loadComments()

fetchAndRenderComments()

initClickBtn()
