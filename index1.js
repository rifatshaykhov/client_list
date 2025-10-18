const saved = document.querySelector('#save');

const newClientDiv = document.createElement('div')

newClientDiv.innerHTML = '<button class="button1" type="button"><img src="images/box.svg"></button><div class="named"><img src="images/Doe.svg"><div><h4>Джон Доу</h4><p>john.doe@gmail.com</p></div></div>'

newClientDiv.className = 'blockIcons';

const clientsList1 = document.querySelector('#newClients');

clientsList1.appendChild(newClientDiv);



saved.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('sdfsdfsdf');
});
