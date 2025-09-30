const block = document.querySelector('.blockIcons')

const btn = document.querySelector('.button1');

btn.addEventListener('click', () => {
    block.style.backgroundColor = '#C9C0FF'
    btn.innerHTML = '<img src="images/checkbox.svg">';
});