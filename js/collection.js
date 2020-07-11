var url = new URL(window.location.href); 
var params = new URLSearchParams(url.search);

getTeddy(params.get("id"))
.then(function(response){
    console.log(response)
})