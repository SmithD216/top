const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.color = 'red';
container.appendChild(para);

const head3 = document.createElement('h3');
head3.textContent = "Hey I'm a blue h3!"
head3.style.color = 'blue';
container.appendChild(head3);

const pink = document.createElement('div');
pink.setAttribute('style', 'border: 1px solid black; background:pink;')
container.appendChild(pink);

const head1 = document.createElement('h1');
head1.textContent = "I'm in a div!"
pink.appendChild(head1);

const innerPara = document.createElement('p');
innerPara.textContent = "ME TOO!"
pink.appendChild(innerPara);