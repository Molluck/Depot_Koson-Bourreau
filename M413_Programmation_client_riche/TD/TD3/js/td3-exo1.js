/*<![CDATA[*/

console.log("Chargement...");


function init(){
	console.log("Initialisation...");
	var div = document.getElementById("jeu"); // querySelector("#jeu"); querySelectorAll("#jeu")[0]
	div.addEventListener("click", selection);	

	var grille = new Array(3);
	for(i=0; i< grille.length; i++){
		grille[i] = new Array(3);	
	}
	var divs = document.querySelectorAll(".case"); // document.getElementsByClassName("case");
	for(i=0; i<divs.length; i++){
		
	}
	console.log(grille);
}

function selection(event){
	var e = event.target;
	console.log(e.textContent);
		
}
/*]]>*/