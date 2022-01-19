const ul = document.querySelector('ul');
const input =  document.getElementById('todo');
const button = document.getElementById('add');

 button.addEventListener('click', function () {
     if (input.value !== '') {
        ul.innerHTML += `<li class="item">${input.value}</li>`
     }
 })