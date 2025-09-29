document.addEventListener("DOMContentLoaded", function () {
    const character_array = [
        "Goku", "Vegeta", "Gohan", "Piccolo", "Krillin", "Bulma", "Trunks", "Frieza", "Cell",
        "Majin Buu", "Chi-Chi", "Yamcha", "Tien", "Chiaotzu", "Master Roshi", "Android 18",
        "Android 17", "Beerus", "Whis", "Hit", "Jiren", "Goten", "Pan", "Videl", "Raditz", "Nappa", "Broly",
        "Zamasu", "Goku Black", "Kid Buu", "Super Buu", "Fat Buu", "King Kai", "Dende", "Mr. Satan", "Vados",
        "Cabba", "Caulifla", "Kale", "Toppo", "Dyspo", "Fused Zamasu", "Kefla", "Cooler", "Broly (DBS)",
        "Beerus (DBS)", "Whis (DBS)", "Gogeta", "Vegito", "Omega Shenron", "Syn Shenron", "Janemba", "Pikkon",
        "Tapion", "Hercule", "Dr. Gero", "Shenron", "Porunga"
    ];

    const searchForm = document.getElementById("searchForm");
    searchForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        const searchValue = document.querySelector(".searchbar").value.trim();
        console.log("User searched for:", searchValue);

        const index = character_array.findIndex(name => name.toLowerCase() === searchValue.toLowerCase());
        if (index !== -1) {
            console.log(`Found character: ${character_array[index]} at index ${index + 1}`);
        } else {
            console.log("Character not found");
        }
    });
});
