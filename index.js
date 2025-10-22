const blocks = document.querySelectorAll('.blockIcons');

const button = document.querySelectorAll('.button1');

const btn0 = document.querySelector('#button');

const form = document.querySelector('.form-row');

const client = document.querySelector('#new');

const save = document.querySelector('#save');


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
};

function addCL(fullName, email, company, phone) {
    client.insertAdjacentHTML('afterbegin', `<div class="blockIcons">
        <button class="button1" type="button"><img src="images/box.svg"></button>
        <div class="named">
          <img src="images/Doe.svg">
          <div>
            <h4>${fullName}</h4>
            <p>${email}</p>
          </div>
        </div>
        <div class="company">
          <h4>${company}</h4>
        </div>
        <div class="number">
          <h4>${phone}</h4>
        </div>
        <div class="status">Активен</div>
        <div class="date">10 Марта 2025</div>
        <div class="menu"><img src="images/dot.svg"></div>
      </div>`)
}
function greet() {
    history.pushState(null, null, location.href.split('?')[0]);    
}

setTimeout(greet, 50);

window.addEventListener('load', function() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('full-name');
    const email = params.get('email');
    const company = params.get('company');
    const phone = params.get('phone');
    if ((name !== null) && (email !== null) && (company !== null) && (phone !== null)) {
        if (name !== '' && email !== '' && company !== '' && phone !== ''){
            addCL(name, email, company, phone);
        }    
    }
});

// form.addEventListener('submit', () => {
//     window.location.href = 'index.html';
// });

// save.addEventListener('click', () => {
//     // form.submit();
//     window.location.href = 'index.html';
// })