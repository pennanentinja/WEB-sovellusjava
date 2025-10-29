//tehtävä 1 + 3
function tarkistus(event) {
    event.preventDefault();

    const nimi = document.getElementById("name").value.trim();
    const sposti = document.getElementById("email").value.trim();
    const kommentti = document.getElementById("comment").value.trim();

    if (nimi === "") {
        alert("Nimi kenttä ei saa olla tyhjä!");
        return;
    }

    if (sposti.length < 6 || sposti.length > 30 || !sposti.includes("@")) {
        alert("Osoitteen tulee olla 6-30 merkkiä pitkä sekä sisältää @!");
        return;
    }

    if (kommentti === "") {
        alert("Kommentti kenttä ei saa olla tyhjä!");
        return;
    }

    if (kommentti.length > 150) {
        alert("Kommentin maksimipituus on 150 merkkiä!");
        return;
    }

    const tiedot = {
        nimi: nimi,
        sposti: sposti,
        kommentti: kommentti
    };

    localStorage.setItem("lomakeData", JSON.stringify(tiedot));

    alert(`Tiedot tallennettu!\nNimi: ${tiedot.nimi}\nSähköposti: ${tiedot.sposti}\nKommentti: ${tiedot.kommentti}`);
}




//tehtävä2
function kustannukset(event) {

    event.preventDefault();

    const tyyppi = document.getElementById("type").value;
    const vuodet = document.getElementById("years").value;
    const cost = document.getElementById("cost");

    let hinta = tyyppi * vuodet;

    if (vuodet > 2) {
        hinta = hinta * 0.8;
        alert("Yli 2 vuoden jäsenyydestä saat 20% alennusta!");
    }

    if (vuodet >= 5) {
        hinta = hinta - 5;
        alert("Tilaamalla vähintään 5 vuodeksi saat lisäksi 5 euron alennuksen!");
    }

    cost.value = hinta + " €";
}

document.getElementById("theForm").onsubmit = kustannukset;

//tehtävä4
window.addEventListener("load", function() {
    const data = localStorage.getItem("lomakeData");
    const tiedotObjekti = JSON.parse(data);
    const div = this.document.getElementById("sessiondata");

    div.innerHTML = "<p><strong>Nimi:</strong> " + tiedotObjekti.nimi + "</p>" +
                    "<p><strong>Email:</strong> " + tiedotObjekti.sposti + "</p>" +
                    "<p><strong>Kommentti:</strong> " + tiedotObjekti.kommentti + "</p>";
});