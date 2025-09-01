const quizData = [
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_Afghanistan_%282021%29.svg",
    options: ["Afganisztán", "Pakisztán", "Irán", "Tádzsikisztán"],
    correct: 0,
    explanation: "Ez Afganisztán jelenlegi zászlaja, fekete alapon fehér felirattal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Armenia.svg",
    options: ["Grúzia", "Örményország", "Azerbajdzsán", "Irán"],
    correct: 1,
    explanation: "Ez Örményország zászlaja, piros-kék-narancs vízszintes sávokkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
    options: ["Törökország", "Azerbajdzsán", "Kazahsztán", "Üzbegisztán"],
    correct: 1,
    explanation: "Ez Azerbajdzsán zászlaja, kék-piros-zöld sávokkal, félholddal és csillaggal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Bahrain.svg",
    options: ["Katar", "Bahrein", "Omán", "Egyesült Arab Emírségek"],
    correct: 1,
    explanation: "Ez Bahrein zászlaja, piros mezőn fehér cikkcakk szegéllyel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
    options: ["Banglades", "Nepál", "Pakisztán", "India"],
    correct: 0,
    explanation: "Ez Banglades zászlaja, zöld mezőn piros körrel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Bhutan.svg",
    options: ["Nepál", "Bhután", "Mianmar", "Kína"],
    correct: 1,
    explanation: "Ez Bhután zászlaja, sárga és narancs mezőn fehér sárkánnyal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brunei.svg",
    options: ["Malajzia", "Brunei", "Szingapúr", "Indonézia"],
    correct: 1,
    explanation: "Ez Brunei zászlaja, sárga alapon fekete-fehér átlós csíkokkal és címerrel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_China.svg",
    options: ["Kína", "Vietnam", "Észak-Korea", "Mongólia"],
    correct: 0,
    explanation: "Ez Kína zászlaja, piros mezőn öt sárga csillaggal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Flag_of_Cyprus.svg",
    options: ["Ciprus", "Törökország", "Görögország", "Izrael"],
    correct: 0,
    explanation: "Ez Ciprus zászlaja, a sziget arany sziluettjével és olajágakkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Georgia.svg",
    options: ["Grúzia", "Örményország", "Oroszország", "Azerbajdzsán"],
    correct: 0,
    explanation: "Ez Grúzia zászlaja, fehér alapon öt piros kereszttel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
    options: ["India", "Pakisztán", "Srí Lanka", "Nepál"],
    correct: 0,
    explanation: "Ez India zászlaja, sáfrány-fehér-zöld sávokkal és kék Asóka-kerékkel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
    options: ["Indonézia", "Monaco", "Szingapúr", "Lengyelország"],
    correct: 0,
    explanation: "Ez Indonézia zászlaja, piros-fehér vízszintes sávokkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Iran.svg",
    options: ["Irak", "Irán", "Pakisztán", "Afganisztán"],
    correct: 1,
    explanation: "Ez Irán zászlaja, zöld-fehér-piros sávokkal és középen az emblémával."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg",
    options: ["Irak", "Szíria", "Jemen", "Egyiptom"],
    correct: 0,
    explanation: "Ez Irak zászlaja, fekete-fehér-piros sávokkal és arab felirattal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg",
    options: ["Izrael", "Görögország", "Ciprus", "Törökország"],
    correct: 0,
    explanation: "Ez Izrael zászlaja, kék Dávid-csillaggal fehér alapon."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
    options: ["Japán", "Banglades", "Laosz", "Dél-Korea"],
    correct: 0,
    explanation: "Ez Japán zászlaja, fehér alapon piros körrel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Jordan.svg",
    options: ["Jordánia", "Palesztina", "Szíria", "Egyiptom"],
    correct: 0,
    explanation: "Ez Jordánia zászlaja, fekete-fehér-zöld sávokkal és piros háromszöggel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg",
    options: ["Kazahsztán", "Üzbegisztán", "Kirgizisztán", "Türkmenisztán"],
    correct: 0,
    explanation: "Ez Kazahsztán zászlaja, kék mezőn arany nap és sas motívummal."
  },
{
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kuwait.svg",
    options: ["Kuvait", "Irak", "Egyesült Arab Emírségek", "Jemen"],
    correct: 0,
    explanation: "Ez Kuvait zászlaja, fekete háromszöggel a bal oldalon, mellette zöld-fehér-piros vízszintes sávokkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg",
    options: ["Kirgizisztán", "Kazahsztán", "Üzbegisztán", "Tádzsikisztán"],
    correct: 0,
    explanation: "Ez Kirgizisztán zászlaja, piros mezőn arany napkoronggal és benne stilizált jurta mintával."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Laos.svg",
    options: ["Thaiföld", "Kambodzsa", "Laosz", "Vietnam"],
    correct: 2,
    explanation: "Ez Laosz zászlaja, piros-kék-piros vízszintes sávokkal és középen fehér körrel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Lebanon.svg",
    options: ["Libanon", "Szíria", "Jordánia", "Palesztina"],
    correct: 0,
    explanation: "Ez Libanon zászlaja, piros-fehér-piros sávokkal és középen zöld cédrusfával."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Malaysia.svg",
    options: ["Malajzia", "Indonézia", "Brunei", "Szingapúr"],
    correct: 0,
    explanation: "Ez Malajzia zászlaja, piros-fehér csíkokkal, kék mezőben sárga félholddal és csillaggal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Maldives.svg",
    options: ["Maldív-szigetek", "Srí Lanka", "Banglades", "Pakisztán"],
    correct: 0,
    explanation: "Ez a Maldív-szigetek zászlaja, piros mezőn zöld téglalappal és fehér félholddal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Mongolia.svg",
    options: ["Mongólia", "Kína", "Kazahsztán", "Nepál"],
    correct: 0,
    explanation: "Ez Mongólia zászlaja, piros-kék-piros sávokkal és bal oldalon a sárga Szójombo jellel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_Myanmar.svg",
    options: ["Mianmar", "Thaiföld", "Laosz", "Kambodzsa"],
    correct: 0,
    explanation: "Ez Mianmar zászlaja, sárga-zöld-piros vízszintes sávokkal és középen fehér csillaggal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Nepal.svg",
    options: ["Nepál", "Bhután", "India", "Pakisztán"],
    correct: 0,
    explanation: "Ez Nepál egyedi, két háromszögből álló zászlaja, piros alapon kék szegéllyel, fehér hold- és napjellel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_North_Korea.svg",
    options: ["Észak-Korea", "Dél-Korea", "Kína", "Vietnam"],
    correct: 0,
    explanation: "Ez Észak-Korea zászlaja, piros mezőn kék szegélyekkel, fehér körben piros csillaggal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Oman.svg",
    options: ["Omán", "Jemen", "Egyesült Arab Emírségek", "Bahrein"],
    correct: 0,
    explanation: "Ez Omán zászlaja, fehér-piros-zöld vízszintes sávokkal és bal oldalon a nemzeti címerrel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
    options: ["Pakisztán", "India", "Banglades", "Afganisztán"],
    correct: 0,
    explanation: "Ez Pakisztán zászlaja, zöld mezőn fehér félholddal és csillaggal, bal oldalon fehér sávval."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Palestine.svg",
    options: ["Palesztina", "Jordánia", "Szíria", "Egyiptom"],
    correct: 0,
    explanation: "Ez Palesztina zászlaja, fekete-fehér-zöld vízszintes sávokkal és piros háromszöggel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Philippines.svg",
    options: ["Fülöp-szigetek", "Malajzia", "Thaiföld", "Indonézia"],
    correct: 0,
    explanation: "Ez a Fülöp-szigetek zászlaja, kék-piros mezővel, fehér háromszögben nap és három csillag."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Qatar.svg",
    options: ["Katar", "Bahrein", "Omán", "Egyesült Arab Emírségek"],
    correct: 0,
    explanation: "Ez Katar zászlaja, bordó mezőn fehér cikkcakk szegéllyel."
  }
    {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
    options: ["Szaúd-Arábia", "Irán", "Pakisztán", "Jemen"],
    correct: 0,
    explanation: "Ez Szaúd-Arábia zászlaja, zöld mezőn fehér arab felirattal és karddal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
    options: ["Szingapúr", "Indonézia", "Malajzia", "Brunei"],
    correct: 0,
    explanation: "Ez Szingapúr zászlaja, piros-fehér mezőn félholddal és öt csillaggal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
    options: ["Dél-Korea", "Észak-Korea", "Japán", "Kína"],
    correct: 0,
    explanation: "Ez Dél-Korea zászlaja, fehér alapon vörös-kék jin-jang szimbólummal és fekete trigramokkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",
    options: ["Srí Lanka", "India", "Maldív-szigetek", "Nepál"],
    correct: 0,
    explanation: "Ez Srí Lanka zászlaja, arany keretben oroszlánnal, karddal és színes mezőkkel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg",
    options: ["Szíria", "Irak", "Jemen", "Egyiptom"],
    correct: 0,
    explanation: "Ez Szíria zászlaja, piros-fehér-fekete sávokkal és két zöld csillaggal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg",
    options: ["Tádzsikisztán", "Üzbegisztán", "Türkmenisztán", "Kirgizisztán"],
    correct: 0,
    explanation: "Ez Tádzsikisztán zászlaja, piros-fehér-zöld sávokkal és arany koronával."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
    options: ["Thaiföld", "Laosz", "Kambodzsa", "Mianmar"],
    correct: 0,
    explanation: "Ez Thaiföld zászlaja, piros-fehér-kék-fehér-piros vízszintes sávokkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_Timor-Leste.svg",
    options: ["Kelet-Timor", "Indonézia", "Pápua Új-Guinea", "Fülöp-szigetek"],
    correct: 0,
    explanation: "Ez Kelet-Timor zászlaja, piros mezőn fekete és sárga háromszögekkel, fehér csillaggal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    options: ["Törökország", "Azerbajdzsán", "Pakisztán", "Tunézia"],
    correct: 0,
    explanation: "Ez Törökország zászlaja, piros mezőn fehér félholddal és csillaggal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg",
    options: ["Türkmenisztán", "Üzbegisztán", "Tádzsikisztán", "Kazahsztán"],
    correct: 0,
    explanation: "Ez Türkmenisztán zászlaja, zöld mezőn szőnyegmintával, félholddal és csillagokkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Flag_of_the_United_Arab_Emirates.svg",
    options: ["Egyesült Arab Emírségek", "Kuvait", "Omán", "Jemen"],
    correct: 0,
    explanation: "Ez az Egyesült Arab Emírségek zászlaja, piros sávval és zöld-fehér-fekete vízszintes csíkokkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg",
    options: ["Üzbegisztán", "Kazahsztán", "Türkmenisztán", "Tádzsikisztán"],
    correct: 0,
    explanation: "Ez Üzbegisztán zászlaja, kék-fehér-zöld sávokkal, piros elválasztó vonalakkal, félholddal és csillagokkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
    options: ["Vietnam", "Kína", "Laosz", "Mianmar"],
    correct: 0,
    explanation: "Ez Vietnam zászlaja, piros mezőn nagy sárga csillaggal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg",
    options: ["Jemen", "Szíria", "Irak", "Egyiptom"],
    correct: 0,
    explanation: "Ez Jemen zászlaja, piros-fehér-fekete vízszintes sávokkal."
  }
];
