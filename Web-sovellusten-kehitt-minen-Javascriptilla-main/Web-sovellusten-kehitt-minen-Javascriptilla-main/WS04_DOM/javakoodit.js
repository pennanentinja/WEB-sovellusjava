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

function valintaAlert() {
    const valinta = document.getElementById("mySelect").value;
    alert("Valitsit " + valinta);
    const carimage = document.getElementById("carimage");

    const kuvat = {
        BMW: "kuvat/bmw.jpg",
        Audi: "kuvat/audi.jpg",
        Mercedes: "kuvat/mercedes.jpg",
        Volvo: "kuvat/volvo.jpg"
    };

  carimage.src = kuvat[valinta];
}


