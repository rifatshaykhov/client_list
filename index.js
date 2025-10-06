const blocks = document.querySelectorAll('.blockIcons')

const button = document.querySelectorAll('.button1');

let flag;


button.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.innerHTML === '<img src="images/box.svg">') {
            flag = true;
        } else if (btn.innerHTML === '<img src="images/checkbox.svg">') {
            flag = false;
        }
        if (flag) {
            blocks.forEach(block => {
                block.style.backgroundColor = '#C9C0FF';
            });
            btn.innerHTML = '<img src="images/checkbox.svg">';
            flag = false;        
        } else {
            blocks.forEach(block => {
                block.style.backgroundColor = 'white';
            });
            btn.innerHTML = '<img src="images/box.svg">';
            flag = true;
        };
    });
});