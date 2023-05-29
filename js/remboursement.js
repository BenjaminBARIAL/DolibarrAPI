const montant = document.getElementById("montant");
const DataList = document.getElementById('Destinataire')
let api_key = atob(decodeURIComponent(getCookie('token')));
let domaine = decodeURIComponent(getCookie('domaine'));
let url = `http://${domaine}/api/index.php/`;

/*
 * Affiche le symbol "€" pour le montant
 */
montant.addEventListener("input", e => {
  e.preventDefault();
  // Je n'autorise pas les caractères autres que les numériques
  somme = e.target.value.replace(/\D/g, "");
  // On ajoute € à la somme
  somme = somme + "€";
  montant.value = somme;
});

/*
 * Récupération des comptes bancaires
 */
fetchBankAccounts().then(banques => {
  banques.forEach(banque => {
    nomCompte = banque[14]
    addList(DataList, nomCompte)
  });
});