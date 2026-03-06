const host = 'https://wedev-api.sky.pro/api/v2/nora-solntse/comments/'
let token = ''

export const updateToken = (newToken) => {
    token = newToken
}

const authToken = 'https://wedev-api.sky.pro/api/user'

export const getRequest = () => {
    return fetch(host, {
        headers: {
            Authorization: token,
        },
    }).then((response) => {
        if (response.ok) {
            return response.json()
        }

        if (response.status === 500) {
            throw new Error('Сервер сломался, попробуй позже')
        }

        if (!response.ok) {
            throw new Error(
                'Кажется, у вас сломался интернет, попробуйте позже',
            )
        }
    })
}

export const postRequest = (data) => {
    return fetch(host, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            name: data.name,
            text: data.text,
            forceError: true,
        }),
    }).then((response) => {
        if (response.ok) {
            return response.json()
        }

        if (response.status === 500) {
            throw new Error('Сервер сломался, попробуй позже')
        }

        if (response.status === 400) {
            throw new Error(
                'Имя и комментарий должны быть не короче 3 символов',
            )
        }

        if (!response.ok) {
            throw new Error(
                'Кажется, у вас сломался интернет, попробуйте позже',
            )
        }
    })
}

export function login({ login, password }) {
    return fetch(`${authToken}/login`, {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
        }),
    }).then((response) => {
        if (response.ok) {
            return response.json()
        }
    })
}

export function registration({ login, name, password }) {
    return fetch(authToken, {
        method: 'POST',
        body: JSON.stringify({
            login,
            name,
            password,
        }),
    }).then((response) => {
        if (response.ok) {
            return response.json()
        }
    })
}
