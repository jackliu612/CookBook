function hndlr(response) {
	try{
var items = "";
	for (var i = 0; i < response.items.length; i++) {
		var item = response.items[i];
        // in production code, item.htmlTitle should have the HTML entities escaped.
        items += "<li><a  id='asdf' href="+item.link+" target=\"blank\">"+item.htmlTitle+"</a></li>";
    }
}
catch(err)
{
	document.getElementById("content").innerHTML += "<br><h3 align='center'>Sorry, No Results Found</h3>"
	return;
}
	document.getElementById("content").innerHTML += "<br>";
	document.getElementById("content").innerHTML += "<h3 align='center'>Here's What We Found:</h3>";
	var startlist = "<ul class='alt'>";
  var endlist = "</ul>";
    document.getElementById("content").innerHTML += startlist+items+endlist;
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
function testResults () 
{
	var q = "";
	var ing = ["Beef", "Chicken", "Fish", "Pork", "Vegetarian", "Broccoli", "Carrot", "Corn", "Potato", "Tomato"];
	for(i = 0; i < ing.length; i++)
	{
		if(document.getElementById(ing[i]).checked)
			q+=ing[i]+" ";
	}
	var others = ["Other1", "Other2", "Other3", "Other4", "Other5"];
	for(i = 0; i < others.length; i++)
	{
		if(!document.getElementById(others[i]).value == "")
			q+=document.getElementById(others[i]).value+" ";
	}
	console.log(q);
	lol(q);
}