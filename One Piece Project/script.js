//Luffy

let luffy = document.getElementById("luffy");

function amplialuffy() {

    luffy.style.width = "110px";
    luffy.style.height = "110px";
    luffy.style.transition = "0.4s";
    

}

function diminuiluffy() {

    luffy.style.width = "100px";
    luffy.style.height = "100px";

}

function clicaluffy() {

    let nome = document.getElementById("nome").innerHTML = "Monkey D. Luffy";
    let recompensa = document.getElementById("recompensa").innerHTML = "1.500.000.000"


}

luffy.addEventListener("mouseover", amplialuffy);
luffy.addEventListener("mouseout", diminuiluffy);
luffy.addEventListener("click", clicaluffy)
