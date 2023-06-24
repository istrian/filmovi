let totalcjena = 0
function pogledao(element) {

    let film = element.closest(".film")
    let filmbtn = film.querySelector("button")
    let potrosili = document.querySelector(".postrosili")
    let cjena = film.querySelector("h4").innerText
    filmbtn.setAttribute("disabled","true")
    filmbtn.innerText = "Pogledali ste"
    film.style.backgroundColor = "black"
    cjena = cjena.substring(1)
    cjena = parseInt(cjena)
    totalcjena += cjena
    console.log(totalcjena)

    potrosili.innerHTML = `<h1>Potrosili ste na gledanje filmova:$${totalcjena}`


}