const blocks = document.querySelectorAll('.blockIcons')

const button = document.querySelectorAll('.button1');

const btn0 = document.querySelector('#button');

const saved = document.querySelector('#save');

const fullName = document.querySelector('#full-name');

const email = document.querySelector('#email');

const company = document.querySelector('#company');

const phone = document.querySelector('#phone');

const date = document.querySelector('#date');

const input = document.querySelectorAll('input');

const form = document.querySelector('.form-row');

const addClients = document.querySelector('#addClient');

const client = document.querySelector('#new');


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


if (btn0) {
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
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newDiv = document.createElement('div');

    newDiv.className = 'blockIcons';

    newDiv.innerHTML = `<div class="blockIcons">
        <button class="button1" type="button"><img src="images/box.svg"></button>
        <div class="named">
          <img src="images/Doe.svg">
          <div>
            <h4>${fullName.value}</h4>
            <p>${email.value}</p>
          </div>
        </div>
        <div class="company">
          <h4>${company.value}</h4>
        </div>
        <div class="number">
          <h4>${phone.value}</h4>
        </div>
        <div class="status">Активен</div>
        <div class="date">10 марта 2025</div>
        <div class="menu"><img src="images/dot.svg"></div>
      </div>`

    window.location.href = 'index.html';
});
