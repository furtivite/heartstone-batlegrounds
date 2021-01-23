const heroesList = [
  {
    id: 1,
    name: "A.F.Kay",
    image: "./images/A.F.Kay.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 2,
    name: "Al'Akir",
    image: "./images/Al'Akir.png",
    gamers: {
      polina: true,
      egor: false,
    }
  },
  {
    id: 3,
    name: "Alexstrasza",
    image: "./images/Alexstrasza.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 4,
    name: "Aranna Starseeker",
    image: "./images/ArannaStarseeker.png",
    gamers: {
      polina: true,
      egor: false,
    }
  },
  {
    id: 5,
    name: "Arch-Villain Rafaam",
    image: "./images/Arch-VillainRafaam.png",
    gamers: {
      polina: true,
      egor: true,
    }
  },
  {
    id: 6,
    name: "C'Thun",
    image: "./images/C'Thun.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 7,
    name: "Captain Eudora",
    image: "./images/CaptainEudora.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 8,
    name: "Captain Hooktusk",
    image: "./images/CaptainHooktusk.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 9,
    name: "Chenvaala",
    image: "./images/Chenvaala.png",
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 10,
    name: "Dancin' Deryl",
    image: "./images/Dancin'Deryl.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 11,
    name: "Deathwing",
    image: "./images/Deathwing.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 12,
    name: "Dinotammer Brann",
    image: "./images/DinotammerBrann.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 13,
    name: "Edwin Van Cleef",
    image: "./images/EdwinVanCleef.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 14,
    name: "Elise Starseeker",
    image: "./images/EliseStarseeker.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 15,
    name: "Forest Warden Omu",
    image: "./images/ForestWardenOmu.png",
    gamers: {
      polina: true,
      egor: true,
    }
  },
  {
    id: 16,
    name: "Fungalmancer Flurgl",
    image: "./images/FungalmancerFlurgl.png",
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 17,
    name: "Georgethe Fallen",
    image: "./images/GeorgetheFallen.png",
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 18,
    name: "Greybough",
    image: "./images/Greybough.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 19,
    name: "Illidan Stormrage",
    image: "./images/IllidanStormrage.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 20,
    name: "Infinite Toki",
    image: "./images/InfiniteToki.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 21,
    name: "Jandice Barov",
    image: "./images/JandiceBarov.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 22,
    name: "Kael'thas Sunstrider",
    image: "./images/Kael'thasSunstrider.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 23,
    name: "King Mukla",
    image: "./images/KingMukla.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 24,
    name: "Lich Baz'hial",
    image: "./images/LichBaz'hial.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 25,
    name: "Lord Barov",
    image: "./images/LordBarov.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 26,
    name: "LordJaraxxus",
    image: "./images/LordJaraxxus.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 27,
    name: "Maiev Shadowsong",
    image: "./images/MaievShadowsong.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 28,
    name: "Malygos",
    image: "./images/Malygos.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 29,
    name: "Millhouse Manastorm",
    image: "./images/MillhouseManastorm.png",
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 30,
    name: "Millificent Manastorm",
    image: "./images/MillificentManastorm.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 31,
    name: "Mr. Bigglesworth",
    image: "./images/Mr.Bigglesworth.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 32,
    name: "N'Zoth",
    image: "./images/N'Zoth.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 33,
    name: "Nozdormu",
    image: "./images/Nozdormu.png",
    gamers: {
      polina: true,
      egor: false,
    }
  },
  {
    id: 34,
    name: "Patchesthe Pirate",
    image: "./images/PatchesthePirate.png",
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 35,
    name: "Patchwerk",
    image: "./images/Patchwerk.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 36,
    name: "Pyramad",
    image: "./images/Pyramad.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 37,
    name: "Ragnarosthe Firelord",
    image: "./images/RagnarostheFirelord.png",
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 38,
    name: "Rakanishu",
    image: "./images/Rakanishu.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 39,
    name: "Reno Jackson",
    image: "./images/RenoJackson.png",
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 40,
    name: "Shudderwock",
    image: "./images/Shudderwock.png",
    gamers: {
      polina: true,
      egor: false,
    }
  },
  {
    id: 41,
    name: "Silas Darkmoon",
    image: "./images/SilasDarkmoon.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 42,
    name: "Sindragosa",
    image: "./images/Sindragosa.png",
    gamers: {
      polina: true,
      egor: false,
    }
  },
  {
    id: 43,
    name: "Sir Finley Mrrgglton",
    image: "./images/SirFinleyMrrgglton.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 44,
    name: "Skycap'n Kragg",
    image: "./images/Skycap'nKragg.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 45,
    name: "Tess Greymane",
    image: "./images/TessGreymane.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 46,
    name: "The Curator",
    image: "./images/TheCurator.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 47,
    name: "The Great Akazamzarak",
    image: "./images/TheGreatAkazamzarak.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 48,
    name: "The Lich King",
    image: "./images/TheLichKing.png",
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 49,
    name: "The Rat King",
    image: "./images/TheRatKing.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 50,
    name: "Tickatus",
    image: "./images/Tickatus.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 51,
    name: "Y'Shaarj",
    image: "./images/Y'Shaarj.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 52,
    name: "Yogg-Saron, Hope's End",
    image: "./images/Yogg-Saron,Hope'sEnd.png",
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 53,
    name: "Ysera",
    image: "./images/Ysera.png",
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 54,
    name: "Zephrys, the Great",
    image: "./images/Zephrys,theGreat.png",
    gamers: {
      polina: false,
      egor: true,
    }
  },
]

const heroesPlace = document.querySelector('.all-heroes');
const buttonPlace = document.querySelector('.button-place');
const testBtnRun = document.querySelector('.test-btn_run');
const testBtnPolina = document.querySelector('.test-btn_polina');
const testBtnEgor = document.querySelector('.test-btn_egor');

function gamingAll () {
  let heroesItem = document.querySelector('.all-heroes__item');
  if (heroesItem) {
    erase ();
  }
  else {
    heroesList.forEach(element => {
      let createDiv = document.createElement('div');
      let createImage = document.createElement('img');
      let createName = document.createElement('p');

      createDiv.classList.add('all-heroes__item');
      createImage.src = element.image;
      createImage.classList.add('all-heroes__image')
      createName.textContent = element.name;
      createName.classList.add('all-heroes__name')

      createDiv.append(createImage);
      createDiv.append(createName);
      heroesPlace.append(createDiv);
    });
  }
  eraseBtns ()
}

function gamingPolina () {
  let heroesItem = document.querySelector('.all-heroes__item');
  if (heroesItem) {
    erase ();
  }
  else {
    heroesList.forEach(element => {
      if (element.gamers.polina === false) {
        let createDiv = document.createElement('div');
        let createImage = document.createElement('img');
        let createName = document.createElement('p');

        createDiv.classList.add('all-heroes__item');
        createImage.src = element.image;
        createImage.classList.add('all-heroes__image')
        createName.textContent = element.name;
        createName.classList.add('all-heroes__name')

        createDiv.append(createImage);
        createDiv.append(createName);
        heroesPlace.append(createDiv);
      }
    })
  }
  eraseBtns ()
}

function gamingEgor () {
  let heroesItem = document.querySelector('.all-heroes__item');
  if (heroesItem) {
    erase ();
  }
  else {
    heroesList.forEach(element => {
      if (element.gamers.egor === false) {
        let createDiv = document.createElement('div');
        let createImage = document.createElement('img');
        let createName = document.createElement('p');

        createDiv.classList.add('all-heroes__item');
        createImage.src = element.image;
        createImage.classList.add('all-heroes__image')
        createName.textContent = element.name;
        createName.classList.add('all-heroes__name')

        createDiv.append(createImage);
        createDiv.append(createName);
        heroesPlace.append(createDiv);
      }
    })
  }
  eraseBtns ();
}

function erase () {
  heroesPlace.textContent = ''
}

function eraseBtns () {
  const allHeroesItem = document.querySelector('.all-heroes__item');

  if (heroesPlace.contains(allHeroesItem)) {
    buttonPlace.innerHTML = ''
  }
}


testBtnRun.addEventListener('click', gamingAll);
testBtnPolina.addEventListener('click', gamingPolina);
testBtnEgor.addEventListener('click', gamingEgor)
