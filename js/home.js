let login = getCookie('identite');
const title = document.getElementById('user');

// * Juste pour dire bonjour avec le bon nom
fetchUsers().then(users => {
    users.forEach(user => {
        if (user[68] === login) { title.innerHTML = `Bienvenue, ${user[34]} ${user[35]}` }
    });
});