const addTitle = () => {
    let title = document.querySelector("h1");
    title.textContent = "Harry Potter Character Selection";
}

addTitle();

const flexIt = () => {
    let needFlex = document.querySelector(".needFlex");
    needFlex.classList.toggle("flexIt");
}


const emphasize = (house) => {
    // let description = document.querySelectorAll(".description");
    // console.log(description)
    let gryffindor = document.querySelectorAll(".gryffindor");
    let hufflepuff = document.querySelectorAll(".hufflepuff");
    let ravenclaw = document.querySelectorAll(".ravenclaw");
    let slytherin = document.querySelectorAll(".slytherin");
    
    if (house === "gryffindor") {
        // description[0].classList.toggle("emphasis");
        gryffindor.forEach(element => element.classList.toggle("emphasis"));
    }
    if (house === "hufflepuff") {
        // description[1].classList.toggle("emphasis")
        hufflepuff.forEach(element => element.classList.toggle("emphasis"));
    }
    if (house === "ravenclaw") {
        // description[2].classList.toggle("emphasis")
        ravenclaw.forEach(element => element.classList.toggle("emphasis"));
    }
    if (house === "slytherin") {
        // description[3].classList.toggle("emphasis")
        slytherin.forEach(element => element.classList.toggle("emphasis"));
    }
}

const addHouses = () => {
    let description = document.querySelectorAll(".description");
    let array = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"]
    for (i = 0; i < array.length; i++) {
    description[i].classList.add(array[i]);
    } return description
}

addHouses();

const hideTheSnitch = () => {
    let snitch = document.getElementById("golden");
    snitch.classList.toggle("snitch");
}


