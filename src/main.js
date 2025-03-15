const input = document.querySelector('input');
const button = document.querySelector('button');
const result = document.querySelector('.result');

button.addEventListener('click', async () => {
    const cep = input.value

    const url = `https://brasilapi.com.br/api/cep/v2/${cep}`

    const response = await fetch(url)

    const data = await response.json()

    result.innerHTML = `
    <p>${data.cep}</p>
    <p>${data.street}</p>
    <p>${data.city}</p>
    <p>${data.neighborhood}</p>
    <p>${data.state}</p>
    `

    imput.value = ''

    imput.focus()
})