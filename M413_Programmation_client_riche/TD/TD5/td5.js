/*<![CDATA[*/


console.log("chargement");

$(document).ready(function(){
	console.log("init");
	$("#para").click(afficher);
	
});

function afficher(event){
	console.log(event.target.tagName);
	//$("#list").slideToggle();
	$("li").each(function(i,e){
		console.log(i, e.textContent);
		if(event.target.textContent == e.textContent) $(e).hide();
	});
	
}
/*]]>*/









