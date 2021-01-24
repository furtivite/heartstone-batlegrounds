const imageAFKey = new URL("../images/A.F.Kay.png", import.meta.url);
const imageAlAkir = new URL("../images/Al'Akir.png", import.meta.url);
const imageAlexstrasza = new URL("../images/Alexstrasza.png", import.meta.url);
const imageArannaStarseeker = new URL("../images/ArannaStarseeker.png", import.meta.url);
const imageArchVillainRafaam = new URL("../images/Arch-VillainRafaam.png", import.meta.url);
const imageCThun = new URL("../images/C'Thun.png", import.meta.url);
const imageCaptainEudora = new URL("../images/CaptainEudora.png", import.meta.url);
const imageCaptainHooktusk = new URL("../images/CaptainHooktusk.png", import.meta.url);
const imageChenvaala = new URL("../images/Chenvaala.png", import.meta.url);
const imageDancinDeryl = new URL("../images/Dancin'Deryl.png", import.meta.url);
const imageDeathwing = new URL("../images/Deathwing.png", import.meta.url);
const imageDinotammerBrann = new URL("../images/DinotammerBrann.png", import.meta.url);
const imageEdwinVanCleef = new URL("../images/EdwinVanCleef.png", import.meta.url);
const imageEliseStarseeker = new URL("../images/EliseStarseeker.png", import.meta.url);
const imageForestWardenOmu = new URL("../images/ForestWardenOmu.png", import.meta.url);
const imageFungalmancerFlurgl = new URL("../images/FungalmancerFlurgl.png", import.meta.url);
const imageGeorgetheFallen = new URL("../images/GeorgetheFallen.png", import.meta.url);
const imageGreybough = new URL("../images/Greybough.png", import.meta.url);
const imageIllidanStormrage = new URL("../images/IllidanStormrage.png", import.meta.url);
const imageInfiniteToki = new URL("../images/InfiniteToki.png", import.meta.url);
const imageJandiceBarov = new URL("../images/JandiceBarov.png", import.meta.url);
const imageKaelthasSunstrider = new URL("../images/Kael'thasSunstrider.png", import.meta.url);
const imageKingMukla = new URL("../images/KingMukla.png", import.meta.url);
const imageLichBazhial = new URL("../images/LichBaz'hial.png", import.meta.url);
const imageLordBarov = new URL("../images/LordBarov.png", import.meta.url);
const imageLordJaraxxus = new URL("../images/LordJaraxxus.png", import.meta.url);
const imageMaievShadowsong = new URL("../images/MaievShadowsong.png", import.meta.url);
const imageMalygos = new URL("../images/Malygos.png", import.meta.url);
const imageMillhouseManastorm = new URL("../images/MillhouseManastorm.png", import.meta.url);
const imageMillificentManastorm = new URL("../images/MillificentManastorm.png", import.meta.url);
const imageMrBigglesworth = new URL("../images/Mr.Bigglesworth.png", import.meta.url);
const imageNZoth = new URL("../images/N'Zoth.png", import.meta.url);
const imageNozdormu = new URL("../images/Nozdormu.png", import.meta.url);
const imagePatchesthePirate = new URL("../images/PatchesthePirate.png", import.meta.url);
const imagePatchwerk = new URL("../images/Patchwerk.png", import.meta.url);
const imagePyramad = new URL("../images/Pyramad.png", import.meta.url);
const imageRagnarostheFirelord = new URL("../images/RagnarostheFirelord.png", import.meta.url);
const imageRakanishu = new URL("../images/Rakanishu.png", import.meta.url);
const imageRenoJackson = new URL("../images/RenoJackson.png", import.meta.url);
const imageShudderwock = new URL("../images/Shudderwock.png", import.meta.url);
const imageSilasDarkmoon = new URL("../images/SilasDarkmoon.png", import.meta.url);
const imageSindragosa = new URL("../images/Sindragosa.png", import.meta.url);
const imageSirFinleyMrrgglton = new URL("../images/SirFinleyMrrgglton.png", import.meta.url);
const imageSkycapnKragg = new URL("../images/Skycap'nKragg.png", import.meta.url);
const imageTessGreymane = new URL("../images/TessGreymane.png", import.meta.url);
const imageTheCurator = new URL("../images/TheCurator.png", import.meta.url);
const imageTheGreatAkazamzarak = new URL("../images/TheGreatAkazamzarak.png", import.meta.url);
const imageTheLichKing = new URL("../images/TheLichKing.png", import.meta.url);
const imageTheRatKing = new URL("../images/TheRatKing.png", import.meta.url);
const imageTickatus = new URL("../images/Tickatus.png", import.meta.url);
const imageYShaarj = new URL("../images/Y'Shaarj.png", import.meta.url);
const imageYoggSaronHopesEnd = new URL("../images/Yogg-Saron,Hope'sEnd.png", import.meta.url);
const imageYsera = new URL("../images/Ysera.png", import.meta.url);
const imageZephrystheGreat = new URL("../images/Zephrys,theGreat.png", import.meta.url);

export const heroesList = [
  {
    id: 1,
    name: "A.F.Kay",
    image: imageAFKey,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 2,
    name: "Al'Akir",
    image: imageAlAkir,
    gamers: {
      polina: true,
      egor: false,
    }
  },
  {
    id: 3,
    name: "Alexstrasza",
    image: imageAlexstrasza,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 4,
    name: "Aranna Starseeker",
    image: imageArannaStarseeker,
    gamers: {
      polina: true,
      egor: false,
    }
  },
  {
    id: 5,
    name: "Arch-Villain Rafaam",
    image: imageArchVillainRafaam,
    gamers: {
      polina: true,
      egor: true,
    }
  },
  {
    id: 6,
    name: "C'Thun",
    image: imageCThun,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 7,
    name: "Captain Eudora",
    image: imageCaptainEudora,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 8,
    name: "Captain Hooktusk",
    image: imageCaptainHooktusk,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 9,
    name: "Chenvaala",
    image: imageChenvaala,
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 10,
    name: "Dancin' Deryl",
    image: imageDancinDeryl,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 11,
    name: "Deathwing",
    image: imageDeathwing,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 12,
    name: "Dinotammer Brann",
    image: imageDinotammerBrann,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 13,
    name: "Edwin Van Cleef",
    image: imageEdwinVanCleef,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 14,
    name: "Elise Starseeker",
    image: imageEliseStarseeker,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 15,
    name: "Forest Warden Omu",
    image: imageForestWardenOmu,
    gamers: {
      polina: true,
      egor: true,
    }
  },
  {
    id: 16,
    name: "Fungalmancer Flurgl",
    image: imageFungalmancerFlurgl,
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 17,
    name: "Georgethe Fallen",
    image: imageGeorgetheFallen,
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 18,
    name: "Greybough",
    image: imageGreybough,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 19,
    name: "Illidan Stormrage",
    image: imageIllidanStormrage,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 20,
    name: "Infinite Toki",
    image: imageInfiniteToki,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 21,
    name: "Jandice Barov",
    image: imageJandiceBarov,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 22,
    name: "Kael'thas Sunstrider",
    image: imageKaelthasSunstrider,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 23,
    name: "King Mukla",
    image: imageKingMukla,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 24,
    name: "Lich Baz'hial",
    image: imageLichBazhial,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 25,
    name: "Lord Barov",
    image: imageLordBarov,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 26,
    name: "LordJaraxxus",
    image: imageLordJaraxxus,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 27,
    name: "Maiev Shadowsong",
    image: imageMaievShadowsong,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 28,
    name: "Malygos",
    image: imageMalygos,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 29,
    name: "Millhouse Manastorm",
    image: imageMillhouseManastorm,
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 30,
    name: "Millificent Manastorm",
    image: imageMillificentManastorm,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 31,
    name: "Mr. Bigglesworth",
    image: imageMrBigglesworth,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 32,
    name: "N'Zoth",
    image: imageNZoth,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 33,
    name: "Nozdormu",
    image: imageNozdormu,
    gamers: {
      polina: true,
      egor: false,
    }
  },
  {
    id: 34,
    name: "Patchesthe Pirate",
    image: imagePatchesthePirate,
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 35,
    name: "Patchwerk",
    image: imagePatchwerk,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 36,
    name: "Pyramad",
    image: imagePyramad,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 37,
    name: "Ragnarosthe Firelord",
    image: imageRagnarostheFirelord,
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 38,
    name: "Rakanishu",
    image: imageRakanishu,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 39,
    name: "Reno Jackson",
    image: imageRenoJackson,
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 40,
    name: "Shudderwock",
    image: imageShudderwock,
    gamers: {
      polina: true,
      egor: false,
    }
  },
  {
    id: 41,
    name: "Silas Darkmoon",
    image: imageSilasDarkmoon,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 42,
    name: "Sindragosa",
    image: imageSindragosa,
    gamers: {
      polina: true,
      egor: false,
    }
  },
  {
    id: 43,
    name: "Sir Finley Mrrgglton",
    image: imageSirFinleyMrrgglton,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 44,
    name: "Skycap'n Kragg",
    image: imageSkycapnKragg,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 45,
    name: "Tess Greymane",
    image: imageTessGreymane,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 46,
    name: "The Curator",
    image: imageTheCurator,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 47,
    name: "The Great Akazamzarak",
    image: imageTheGreatAkazamzarak,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 48,
    name: "The Lich King",
    image: imageTheLichKing,
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 49,
    name: "The Rat King",
    image: imageTheRatKing,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 50,
    name: "Tickatus",
    image: imageTickatus,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 51,
    name: "Y'Shaarj",
    image: imageYShaarj,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 52,
    name: "Yogg-Saron, Hope's End",
    image: imageYoggSaronHopesEnd,
    gamers: {
      polina: false,
      egor: false,
    }
  },
  {
    id: 53,
    name: "Ysera",
    image: imageYsera,
    gamers: {
      polina: false,
      egor: true,
    }
  },
  {
    id: 54,
    name: "Zephrys, the Great",
    image: imageZephrystheGreat,
    gamers: {
      polina: false,
      egor: true,
    }
  },
]
