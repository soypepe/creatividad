document.querySelectorAll('.historia-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('mostrar')
    btn.nextElementSibling.classList.toggle('mostrar')
  })
})