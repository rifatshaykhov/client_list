const block = document.querySelector('.blockIcons')

const btn = document.querySelector('.button1');

let flag = true;

btn.addEventListener('click', () => {
    if (flag) {
        block.style.backgroundColor = '#C9C0FF';
        btn.innerHTML = '<img src="images/checkbox.svg">';
        flag = false;        
    } else {
        block.style.backgroundColor = 'white';
        btn.innerHTML = '<img src="images/box.svg">';
        flag = true;
    }
});