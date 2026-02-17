export const sanitizeInput = (input) => {
    return input.replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}
