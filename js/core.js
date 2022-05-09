function handleExecption(e){
	console.error(e);
	//more -sooner or later
};
(async function(){
	try{
		var k = await fetch("/msgv2/data/template.json");
		k=await k.json();
		var h = document.createElement("header");
		h.innerHTML = k["header"];
		document.body.prepend(h);
		var f = document.createElement("footer");
		f.innerHTML = k["footer"];
		document.body.appendChild(f);
		if(k["banners"]!=undefined){
			for(var i in k["banners"]){
				var d = document.createElement("div");
				d.classList.add("tp_bnr");
				d.innerHTML = k["banners"][i];
				h.prepend(d);
			}
		}
	}catch(e){
		handleExecption(e);
	}
})();