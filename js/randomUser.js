function loadUsers(){
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(data => displayUsers(data.results));
}

loadUsers();

const displayUsers = users =>{
    const usersContainer = document.getElementById('users-container');
    for(const user of users){
        console.log(user);
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>E-mail: ${user.email}</h2>
            <h2>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h2>
        `
        usersContainer.appendChild(div);
    }
}