function tarkistus(event) {
    event.preventDefault();

    let nimi = document.querySelector("#name").value.trim();
    let sposti = document.querySelector("#email").value.trim();
    let kommentti = document.querySelector("#comment").value.trim();

    let virheet = ""; 

    if (nimi === "") {
        virheet += "Nimi ei saa olla tyhjä!\n";
    }

    if (sposti.length < 6 || sposti.length > 30 || !sposti.includes("@")) {
        virheet += "Sähköpostiosoitteen tulee olla 6–15 merkkiä pitkä ja sisältää @-merkin!\n";
    }

    if (kommentti === "") {
        virheet += "Kommenttikenttä ei saa olla tyhjä!\n";
    } else if (kommentti.length > 150) {
        virheet += "Kommentti saa olla enintään 150 merkkiä pitkä!\n";
    }

    if (virheet !== "") {
        alert(virheet);
        return;
    }

    alert(nimi + "\n" + sposti + "\n" + kommentti);
}
