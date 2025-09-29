function changeHeading () {
    const otsikko = document.querySelector("title").innerHTML = "Muokattu otsikko!";
}

function secondButton () {
    const tyyli = document.getElementById("tehtava2");
    tyyli.style.fontSize = "32px";
    tyyli.style.fontStyle = "italic";
    tyyli.style.color = "#e69d83ff";
    tyyli.style.backgroundColor = "navy";
}

function thirdButton() {
    const vaihda = document.getElementById("teksti")
    vaihda.innerHTML = "<em><strong>Onneksi olkoon! Olet korvannut vanhan Lorem Ipsum -tekstin.</strong></em><br><br>";
}

