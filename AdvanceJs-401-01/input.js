const inputField = document.getElementById('input-field')
const output = document.getElementById('output')

inputField.addEventListener('input', () => {
  output.textContent = inputField.value
})
