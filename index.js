const blocks = document.querySelectorAll('.blockIcons')

const button = document.querySelectorAll('.button1');


button.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.innerHTML === '<img src="images/box.svg">') {
            btn.innerHTML = '<img src="images/checkbox.svg">';
        } else {
            btn.innerHTML = '<img src="images/box.svg">';
        };
    })        
});
