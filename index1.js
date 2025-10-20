const saved = document.querySelector('#save');

const clientsList = document.querySelector('#newClients');

const fullName = document.querySelector('#full-name');

const email = document.querySelector('#email');

const company = document.querySelector('#company');

const phone = document.querySelector('#phone');

const date = document.querySelector('#date');

const input = document.querySelectorAll('input');

const form = document.querySelector('.form-row');

const newDiv = document.createElement('div');

newDiv.className = 'blockIcons';



form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
})

// clientsList.insertAdjacentHTML('afterbegin', `<div class="blockIcons">
//         <button class="button1" type="button"><img src="images/box.svg"></button>
//         <div class="named">
//           <img src="images/Doe.svg">
//           <div>
//             <h4>${fullName}</h4>
//             <p>${email}</p>
//           </div>
//         </div>
//         <div class="company">
//           <h4>${company}</h4>
//         </div>
//         <div class="number">
//           <h4>${phone}</h4>
//         </div>
//         <div class="status">Активен</div>
//         <div class="date">10 марта 2025</div>
//         <div class="menu"><img src="images/dot.svg"></div>
//       </div>`)
