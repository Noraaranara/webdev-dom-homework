const API_URL = 'https://wedev-api.sky.pro/api/v1/nora-solntse/comments'

export const getRequest = () => {
    return fetch(`${API_URL}`).then((response) => {
        return response.json()
    })
}

export const postRequest = (data) => {
    return fetch(`${API_URL}`, {
        method: 'POST',
        body: JSON.stringify(data),
    }).then((response) => {
        return response.json()
    })
}
