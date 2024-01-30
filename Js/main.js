const { createApp } = Vue;

createApp({
  data() {
    return {
      slideCounter: 0,
      slideClass: "active",
      slides: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
    };
  },

  methods: {
    // ## CHIEDI UN NUMERO
    /**
     *
     * @param {string} msg Messaggio da stampare nel prompt
     * @returns {number} Numero fornito dall'utente
     */
    askNumber(msg = "Inserisci un numero") {
      let userNumber = parseInt(prompt(msg));

      while (isNaN(userNumber)) {
        userNumber = parseInt(prompt("Il numero inserito non é valido"));
      }

      return userNumber;
    },

    // ## GENERA UN NUMERO RANDOMICO
    /**
     *
     * @param {number} min Il numero minimo
     * @param {number} max Il numero massimo
     * @returns Numero randomico tra il minimo e il massimo
     */
    getRandomNumber(min, max) {
      min = parseInt(min);
      max = parseInt(max);

      if (isNaN(min) || isNaN(max)) {
        console.error("I valori inseriti devono essere numerici");
        return;
      }

      if (min >= max) {
        console.error(
          "Il valore massimo deve essere maggiore del valore minimo"
        );
        return;
      }
      const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      return randomNumber;
    },

    // ## ADDIZIONA
    /**
     *
     * @param {numero} primoAddendo Il primo numero dell'addizione
     * @param {numero} secondoAddendo Il secondo numero dell'addizione
     * @returns
     */
    addiziona(primoAddendo, secondoAddendo) {
      const somma = primoAddendo + secondoAddendo;
      return somma;
    },

    // ## MOLTIPLICAZIONE
    /**
     *
     * @param {numero} primoFattore Il primo numero da moltiplicare
     * @param {numero} secondoFattore Il secondo numero da moltiplicare
     * @returns Il risultato della moltiplicazione
     */
    moltiplica(primoFattore, secondoFattore) {
      let risultato = 0;

      for (let i = 0; i < secondoFattore; i++) {
        risultato = addiziona(risultato, primoFattore);
      }
      return risultato;
    },

    // ## GENERA UNA GRIGLIA
    generateGrid(container) {
      container.innerHTML = "";

      for (let i = 0; i < 64; i++) {
        const cellElement = generateCell(i);
        container.append(cellElement);
      }
    },

    // ## GENERA CELLA NUMERATA
    generateCell(index) {
      const cell = document.createElement("div");
      cell.classList.add("box");
      cell.setAttribute("data-index", index);

      cell.addEventListener("click", function () {
        const number = parseInt(this.getAttribute("data-index"));

        if (number % 2 === 0) {
          this.classList.toggle("even");
        } else {
          this.classList.toggle("odd");
        }
      });

      if (this.classList.contains("even") || this.classList.contains("odd")) {
        this.innerTex = number;
      } else {
        this.innerTex = "";
      }

      return cell;
    },
  },
}).mount("#app");
