console.log('It Works!');

const ul = document.querySelector('ul');

fetch('http://localhost:3000')
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    console.log(users);
    let html = "";
    
    users.forEach(user => {
        console.log(user);
        // html += `<li>${user.name}, ${user.age}</li>`;
        const li = document.createElement('li');
        li.innerHTML = `${user.name}, ${user.age}`;
        ul.appendChild(li);
    });
    // ul.innerHTML = html;
  });