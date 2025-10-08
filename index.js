const blocks = document.querySelectorAll('.blockIcons')

const button = document.querySelectorAll('.button1');


button.forEach(btn => {
    btn.addEventListener('click', () => {
        const parentBlock = btn.parentElement;
        if (btn.innerHTML === '<img src="images/box.svg">') {
            btn.innerHTML = '<img src="images/checkbox.svg">';
            if (parentBlock) {
                parentBlock.style.backgroundColor = '#C9C0FF';
            }
        } else {
            btn.innerHTML = '<img src="images/box.svg">';
            if (parentBlock) {
                parentBlock.style.backgroundColor = 'white';
            };
        };
    })        
});
