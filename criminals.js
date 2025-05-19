let criminals = [{
    name: "Ted",
    lastName: "Bundy",
    birth: "1946-11-24",
    city: "Burlington, Vermont, USA",
    crime: "sériové vraždy",
    photo: "images/Bundy.jpg"
  },
  {
    name: "Pablo",
    lastName: "Escobar",
    birth: "1949-12-01",
    city: "Rionegro, Kolumbie",
    crime: "obchod s drogami, vraždy",
    photo: "images/Escobar.jpg"
  },
  {
    name: "Al",
    lastName: "Capone",
    birth: "1899-01-17",
    city: "Brooklyn, New York, USA",
    crime: "organizovaný zločin, daňové úniky",
    photo: "images/Capone.jpg"
  },
  {
    name: "Charles",
    lastName: "Manson",
    birth: "1934-11-12",
    city: "Cincinnati, Ohio, USA",
    crime: "organizování vražd",
    photo: "images/Manson.jpg"
  },
  {
    name: "Jeffrey",
    lastName: "Dahmer",
    birth: "1960-05-21",
    city: "Wisconsin, USA",
    crime: "sériový vrah",
    photo: "images/Dahmer.jpg"
  },
  {
    name: "Andrej",
    lastName: "Babis",
    birth: "1954-09-02",
    city: "Praha",
    crime: "Kauza Čapí hnízdo",
    photo: "images/Babis.jpg"
  }];

let input01 = document.querySelector(".input01");

let names = criminals.map(c => c.lastName);
let nameIndex = 0;
let charIndex = 0;
let deleting = false;

function updatePlaceholder() {
  const current = names[nameIndex];
  if (!deleting) {
    input01.placeholder = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(updatePlaceholder, 1500);
      return;
    }
  } else {
    input01.placeholder = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      nameIndex = (nameIndex + 1) % names.length;
    }
  }
  setTimeout(updatePlaceholder, deleting ? 50 : 100);
}

updatePlaceholder();

let Search = {
  finder: ""
};

let criminalsFinder = function (criminals01, Search01) {
  let found = criminals01.find(c =>
    c.lastName.toLowerCase() === Search01.finder.toLowerCase()
  );

  document.querySelector(".photo").innerHTML = "";
  document.querySelector(".infoName").innerHTML = "&nbsp;";
  document.querySelector(".infolastName").innerHTML = "&nbsp;";
  document.querySelector(".infoBirth").innerHTML = "&nbsp;";
  document.querySelector(".infoCity").innerHTML = "&nbsp;";
  document.querySelector(".infoCrime").innerHTML = "&nbsp;";

  if (found) {
    document.querySelector(".infoName").innerText = found.name;
    document.querySelector(".infolastName").innerText = found.lastName;
    document.querySelector(".infoBirth").innerText = found.birth;
    document.querySelector(".infoCity").innerText = found.city;
    document.querySelector(".infoCrime").innerText = found.crime;

    if (found.photo) {
      let img01 = document.createElement("img");
      img01.src = found.photo;
      img01.alt = found.lastName;
      img01.style.width = "300px";
      document.querySelector(".photo").appendChild(img01);
    }
  }
};

input01.addEventListener("input", function (e) {
  e.preventDefault();
  Search.finder = e.target.value;
  criminalsFinder(criminals, Search);
});
