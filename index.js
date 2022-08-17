fetch("https://ci-swapi.herokuapp.com/api/")
.then(response => response.text)
.then(data => {
    document.getElementById("content").innerText  = data;
})