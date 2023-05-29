let api_key = atob(decodeURIComponent(getCookie('token')));
let domaine = decodeURIComponent(getCookie('domaine'));
let url = `http://${domaine}/api/index.php/`;

const envoie = document.getElementById('envoie')

envoie.addEventListener('click', e => {
  e.preventDefault()
  const date_deb = DateToTimestamp(document.getElementById('date_deb').value);
  const date_fin = DateToTimestamp(document.getElementById('date_fin').value);
  const user = document.getElementById('user').value;
  const approb = document.getElementById('approb').value;
  const note_pub = document.getElementById('note_pub').value;
  const note_priv = document.getElementById('note_priv').value;
  note = {
    "fk_user_author": user,
    "date_debut": date_deb,
    "date_fin": date_fin,
    "user_validation": approb,
    "note_public": note_pub,
    "note_private": note_priv,
  }
  sendExpenseReports(note, url, api_key)
})



fetchExpenseReports().then(notes => {
  notes.forEach(note => {
    console.log(note)
  });
});

async function sendExpenseReports(note, domaine, api_key) {
  url = `http://${domaine}expensereports`;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "DOLAPIKEY": api_key
    },
    body: JSON.stringify(note),
  })
    .then(response => {
      if (response.ok) {
        console.log("La note de frais a été envoyée avec succès !");
      } else {
        console.error("Une erreur s'est produite lors de l'envoi de la note de frais.");
      }
    })
    .catch(error => {
      console.error("Une erreur s'est produite lors de l'envoi de la note de frais :", error);
    });
}