document.write("<b><em>\"If I had nine hours to chop down a tree, I'd spend the first six sharpening my ax.\"</b><p> -Abraham Lincoln</p></em>")

function repeatingText() {
    let lukumäärä = prompt("Toistojen määrä?");
    for (let i = 0; i < lukumäärä; i++) {
        document.write("Toistuva teksti" + "<br>");
    }
}
repeatingText()

 //   if (navigator.appVersion.includes("Mozilla")) {
 //   alert("You are using Microsoft Edge, redirecting you...");
 //   window.location.href = "http://www.mozilla.org";
 // } else {
 //   window.location.href = "https://www.bing.com"; // tai jokin muu sivu
 // }

