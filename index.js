const blocks = document.querySelectorAll('.blockIcons');

const button = document.querySelectorAll('.button1');

const btn0 = document.querySelector('#button');

const form = document.querySelector('.form-row');

const client = document.querySelector('#new');

const changeMenu = document.querySelectorAll('.changeMenu');

const menu = document.querySelectorAll('.menu');

const del = document.querySelector('.del');

const nameHtml = document.querySelectorAll('.nameHtml');

const naming = document.querySelector('#full-name-html');


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

// setTimeout(greet, 50);

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


function blockOut() {
        changeMenu.forEach(elements => {
            if (elements.style.display === 'none') {
                elements.style.display = 'flex';
            } else {
                elements.style.display = 'none';
            };
        });
};

function closeAllMenus() {
    changeMenu.forEach(menu => {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu')) {
        const menuButton = e.target;
        const menuContent = menuButton.nextElementSibling;

        closeAllMenus();

        menuContent.classList.toggle('active');

    } else {

        closeAllMenus();
    }
})

document.addEventListener('click', (e) => {

    const menu1 = document.querySelector('.changeMenu')

    let parent = menu1.parentElement;

    if (e.target.classList.contains('del')) {
        parent.remove()
    }
})


const spisok = Array.from(nameHtml).map(element => element.textContent);

let num;

menu.forEach(el => {
    el.addEventListener('click', (e) => {

        const childElement = e.target;

        const parent = childElement.parentElement;

        const text = parent.textContent
        const arriv = text.includes(spisok.at(num))

        for (let i = 0; i <= spisok.length; i++) {
            if (text.includes(spisok.at(i))) {
                num = i;
            }
        }

        console.log(num)
        console.log(spisok)
    })
})

function saveData() {

    localStorage.setItem('name', spisok.at(num))

    window.location.href = 'pages/edit.html'

}



const data = localStorage.getItem('name');
naming.value = data;