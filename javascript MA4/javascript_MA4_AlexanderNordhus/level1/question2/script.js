fetch("https://jsonplaceholder.typicode.com/todos")
.then(function(response) {
    return(response.json())
})
.then(function(response) {
    
    for (var i = 0; i < response.length; i++) {
        var startNumber = i + 1;
        var details = document.createElement("ul");
        document.getElementById("li").appendChild(details);
        
        details.innerHTML += "<h1><pre> TODO card number " + startNumber + "</pre>";
        details.innerHTML += "<pre>userId: " + response[i].userId + "</pre>";
        details.innerHTML += "<pre>id: " + response[i].id + "</pre>";
        details.innerHTML += "<pre>title: " + response[i].title + "</pre>";
        details.innerHTML +=  "<pre>completed: " + response[i].completed + "</pre>";
        
//CSS styling
details.style.color = "#000000";
details.style.backgroundColor = "#FF0D00"
details.style.textAlign = "center";
details.style.fontSize = "20px";
details.style.width = "1000px";
    }    
})

.catch(err => console.log(err))