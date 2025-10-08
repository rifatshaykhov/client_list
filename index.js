const blocks = document.querySelectorAll('.blockIcons')

const button = document.querySelectorAll('.button1');

const btn0 = document.querySelector('#button');


button.forEach(btn => {
    btn.addEventListener('click', () => {

        const parentBlock = btn.parentElement;

        if (btn.innerHTML === '<img src="images/box.svg">') {
            btn.innerHTML = '<img src="images/checkbox.svg">';
            if (parentBlock) {
                parentBlock.style.backgroundColor = '#C9C0FF';
            };
        } else {
            btn.innerHTML = '<img src="images/box.svg">';
            btn0.innerHTML = '<img src="images/box.svg">';
            if (parentBlock) {
                parentBlock.style.backgroundColor = 'white';
            };
        };

    });        
});

btn0.addEventListener('click', () => {
    if (btn0.innerHTML === '<img src="images/box.svg">') {
        btn0.innerHTML = '<img src="images/checkbox.svg">';

    button.forEach(btn => {

        const parentBlock = btn.parentElement;

        if (btn.innerHTML === '<img src="images/box.svg">') {
            btn.innerHTML = '<img src="images/checkbox.svg">';
            if (parentBlock) {
                parentBlock.style.backgroundColor = '#C9C0FF';
            };
        };
    });

    } else {
        btn0.innerHTML = '<img src="images/box.svg">';
        
        button.forEach(btn => {

            const parentBlock = btn.parentElement;

            if (btn.innerHTML === '<img src="images/checkbox.svg">') {
                btn.innerHTML = '<img src="images/box.svg">';
                if (parentBlock) {
                    parentBlock.style.backgroundColor = 'white';
                };    
            };
        });
    };



});
