/*<![CDATA[*/


function initSelection(){
	document.body.addEventListener("click", selection);
}

function selection(event){
	console.log(event.target.tagName);
	var element = event.target;
	element.classList.toggle("pink");
	
}

/*]]>*/