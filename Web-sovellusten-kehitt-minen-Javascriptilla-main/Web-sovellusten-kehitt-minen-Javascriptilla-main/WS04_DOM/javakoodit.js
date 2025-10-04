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

function lisaaRivi() {
  const nimi = document.getElementById("nimi").value.trim();
  const tehtava = document.getElementById("tehtava").value.trim();
  const palkka = document.getElementById("palkka").value.trim();

  const virheet = [
    nimi.length <= 5 && "Nimen tulee olla yli 5 merkkiä pitkä.",
    !tehtava && "Tehtävä ei saa olla tyhjä.",
    (isNaN(palkka) || palkka <= 0) && "Palkan tulee olla numero ja yli 0."
  ].filter(Boolean);

  virheet.length ? alert(virheet.join("\n")) : (() => {
    const t = document.getElementById("data").getElementsByTagName("tbody")[0];
    const r = t.insertRow();
    [nimi, tehtava, "$" + palkka].forEach((x, i) => r.insertCell(i).textContent = x);
  })();
}


