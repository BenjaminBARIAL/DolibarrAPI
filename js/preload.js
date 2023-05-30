const racine = document.location.href.replace(/\/$/, '');
const p_courante = racine.substring(racine.lastIndexOf("/")+1);
const token = atob(decodeURIComponent(getCookie('token')))
// redirige vers la page demandée
if (`http://${p_courante}` !== racine && token === '') {
  location.href = './';
}
// redirige vers l'accueil
if (`http://${p_courante}` === racine && token !== '') {
  location.href = './accueil.html';
}