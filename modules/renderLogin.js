import { login, updateToken } from './api.js'
import { app, commentsList } from './constants.js'
import { fetchAndRenderComments } from './fetchAndRenderComments.js'
import { renderRegistration } from './renderRegistration.js'

export const renderLogin = () => {
    console.log(commentsList)
    if (commentsList) {
        commentsList.style.display = 'none'
    }
    app.innerHTML = `
    <h1>Страница входа</h1>
    <div class="form">
        <h3 class="form-title">Форма входа</h3>
        <div class="form-row">
            <input type="text" id="login-input" placeholder="Введите логин" />
            <input type="password" id="password-input" placeholder="Введите пароль" />
        </div>
    </div>
    <button id="login-button">Войти</button>
    <button id="registration-button">Зарегистрироваться</button>
    `

    const button = document.getElementById('login-button')
    const loginEl = document.getElementById('login-input')
    const passwordEl = document.getElementById('password-input')

    button.addEventListener('click', () => {
        login({
            login: loginEl.value,
            password: passwordEl.value,
        }).then((responseData) => {
            updateToken(responseData.user.token)
            fetchAndRenderComments()
        })
    })

    const buttonReg = document.getElementById('registration-button')

    buttonReg.addEventListener('click', () => {
        renderRegistration()
    })
}
