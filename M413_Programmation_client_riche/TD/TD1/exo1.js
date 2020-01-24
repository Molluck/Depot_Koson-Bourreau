function init(){
    inverseTexte();
    datemodif();
}

function defTitre1(){
    var texte = document.getElementById('titre1').textContent;
    document.title = texte;
        
}

function defTitre2(){
    var texte = document.querySelector('h2').textContent;
    document.title = texte;
    console.log(texte);
}

function defTitre3(){
        var textes = document.getElementsByTagName('h2');
        if(textes.length == 0){
            document.title = "Geoffrey Bourreau";
        }
        else{
            var nb = textes.length-1;
            console.log(nb);
            document.title = textes[nb].textContent;
            console.log(textes);
        }
}

function defTitre4(){
    var textes = document.getElementsByClassName('firstOrLast');
    
    if(textes.length == 0){
        document.title = "Geoffrey Bourreau";
    }
    else if(textes.length%2 == 0){
        document.title = textes[0].textContent;
    }
    else{
        document.title = textes[textes.length-1].textContent;
    }
    
}

function inverseTexte(){
   var textes = document.getElementsByTagName('p');
   var tmp = textes[0].textContent;
   console.log(tmp);
   textes[0].textContent = textes[1].textContent;
   textes[1].textContent = tmp;
   
}

function datemodif(){
    var date = new Date(document.lastModified);
    var jour = date.getDate();
    document.getElementById("date_modif").textContent = "Dernière modification: le " + jour + numjour + annee + " par " + document.getElementById;
}