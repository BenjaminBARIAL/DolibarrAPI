const racine = document.location.href.replace(/\/$/, '');
const p_courante = racine.substring(racine.lastIndexOf("/")+1);

if (`http://${p_courante}` !== racine && atob(decodeURIComponent(getCookie('token'))) === '') {
  location.href = './';
}

if (`http://${p_courante}` === racine && atob(decodeURIComponent(getCookie('token'))) !== '') {
  location.href = './accueil.html';
}