const API_URL = 'https://wedev-api.sky.pro/api/v1/nora-solntse/comments/'

export const getRequest = () => {
    return fetch(`${API_URL}`).then((response) => {
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
    return fetch(`${API_URL}`, {
        method: 'POST',
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
