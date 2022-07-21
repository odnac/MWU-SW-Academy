const storedName = sessionStorage.getItem('name') || ''

if(storedName) {
    document.querySelector('#name').value = storedName
}

document.querySelector('#save').addEventListener('click', () => {
    localStorage.setItem('name', document.querySelector('#name').value)
})

document.querySelector('#remove').addEventListener('click', () => {
    localStorage.removeItem('name')
})