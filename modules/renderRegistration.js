import { registration, updateToken } from './api.js'
import { app } from './constants.js'
import { fetchAndRenderComments } from './fetchAndRenderComments.js'
// import { initClickBtn } from './initListeners.js'

export const renderRegistration = () => {
    app.innerHTML = `
    <h1>Страница регистрации</h1>
    <div class="form">
        <h3 class="form-title">Форма регистрации</h3>
        <div class="form-row">
            <input type="text" id="login-input" placeholder="Введите логин" />
            <input type="text" id="name-input" placeholder="Введите имя" />
            <input type="password" id="password-input" placeholder="Введите пароль" />
        </div>
    </div>
    <button id="login-button">Зарегистрироваться</button>
    `

    const button = document.getElementById('login-button')
    const loginEl = document.getElementById('login-input')
    const passwordEl = document.getElementById('password-input')
    const nameEl = document.getElementById('name-input')

    button.addEventListener('click', () => {
        registration({
            login: loginEl.value,
            password: passwordEl.value,
            name: nameEl.value,
        }).then((responseData) => {
            updateToken(responseData.user.token)
            fetchAndRenderComments()
        })
    })
}
