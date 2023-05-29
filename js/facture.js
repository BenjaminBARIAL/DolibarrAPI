let api_key = atob(decodeURIComponent(getCookie('token')));
let domaine = decodeURIComponent(getCookie('domaine'));
let url = `http://${domaine}/api/index.php/`;

fetchInvoices().then(factures => {
    factures.forEach(facture => {
      console.log(facture)
    });
  });