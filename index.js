const blocks = document.querySelectorAll('.blockIcons')

const button = document.querySelectorAll('.button1');

let flag = true;

//btn.addEventListener('click', () => {
//     if (flag) {
//         block.style.backgroundColor = '#C9C0FF';
//         btn.innerHTML = '<img src="images/checkbox.svg">';
//         flag = false;        
//     } else {
//         block.style.backgroundColor = 'white';
//         btn.innerHTML = '<img src="images/box.svg">';
//         flag = true;
//     }
//});

button.forEach(btn => {
    btn.addEventListener('click', () => {
        // button.forEach(i => i.classList.remove('active'));
        // this.classList.add('active');
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