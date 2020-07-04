function getTeddies() {
    return new Promise(function(resolve){
        var teddies = new XMLHttpRequest();
    teddies.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            resolve(response)
        }
    }
    teddies.open("GET", "https://oc-p5-api.herokuapp.com/api/teddies/");
    teddies.send();

    })

}

