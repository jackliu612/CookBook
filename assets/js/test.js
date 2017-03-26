function hndlr(response) {
	for (var i = 0; i < response.items.length; i++) {
		var item = response.items[i];
        // in production code, item.htmlTitle should have the HTML entities escaped.
        document.getElementById("content").innerHTML += "<br><a href="+item.link+" target=\"blank\">"+item.htmlTitle+"</a>";
    }
}
function lol(query) 
{
	var asdf = document.getElementById("content")
	content.innerHTML = "";
	var scriptEl = document.createElement("script");
	scriptEl.src = "https://www.googleapis.com/customsearch/v1?key=AIzaSyBrYHQVX7rbgO6ETQSzl6qHRVRRP8dhHhc&cx=010447336506843967149:ihsu0svcvva&q="+ query + "&callback=hndlr";
	scriptEl.id = "temp";
	document.body.appendChild(scriptEl);
}
function testResults (form) 
{
	var TestVar = form.inputbox.value;
	var TestVar2 = form.inputbox2.value;
	lol(TestVar);
}