let boutonAjouter = document.querySelector("#btnajouter");
boutonAjouter.addEventListener('click', ajouterVehicule);
var voiture;

function ajouterVehicule() 
{
    let marque = document.querySelector("#marque").value;
    let modele = document.querySelector("#modele").value;
    let annee = document.querySelector("#annee").value;
    voiture = new Voiture(marque, modele, annee);
    console.log(voiture)

    var affichage = document.querySelector(".affichage");
    affichage.innerHTML = `Le Véhicule ${voiture.marque} ${voiture.modele} 
    de l'année ${voiture.annee} à bien été ajouté`; 


    let choixvehicule = document.querySelector("#vehicule");
    choixvehicule.innerHTML += `<option value="${voiture.marque}" id="${voiture.marque}">${voiture.marque}</option>`;
}