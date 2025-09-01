const quizData = [
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
    options: ["Montenegró", "Albánia", "Koszovó", "Észak-Macedónia"],
    correct: 1,
    explanation: "Ez Albánia zászlaja, a fekete kétfejű sassal a piros mezőn."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg",
    options: ["Málta", "Andorra", "Luxemburg", "San Marino"],
    correct: 1,
    explanation: "Ez Andorra zászlaja kék-sárga-piros sávokkal és címerrel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
    options: ["Lengyelország", "Ausztria", "Monaco", "Málta"],
    correct: 1,
    explanation: "Ez Ausztria zászlaja, piros-fehér-piros vízszintes trikolór."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg",
    options: ["Oroszország", "Belarusz", "Lettország", "Litvánia"],
    correct: 1,
    explanation: "Ez Belarusz zászlaja, piros-zöld mezővel és fehér-piros díszcsíkkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
    options: ["Németország", "Belgium", "Hollandia", "Luxemburg"],
    correct: 1,
    explanation: "Ez Belgium zászlaja, fekete-sárga-piros függőleges sávokkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg",
    options: ["Koszovó", "Bosznia-Hercegovina", "Szerbia", "Horvátország"],
    correct: 1,
    explanation: "Ez Bosznia-Hercegovina zászlaja, kék mezőn sárga háromszöggel és csillagokkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
    options: ["Magyarország", "Bulgária", "Fehéroroszország", "Oroszország"],
    correct: 1,
    explanation: "Ez Bulgária zászlaja, fehér-zöld-piros vízszintes sávokkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
    options: ["Szlovénia", "Horvátország", "Szlovákia", "Szerbia"],
    correct: 1,
    explanation: "Ez Horvátország zászlaja, piros-fehér-kék trikolórral és címerrel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg",
    options: ["Málta", "Ciprus", "Görögország", "Törökország"],
    correct: 1,
    explanation: "Ez Ciprus zászlaja, a sziget arany sziluettjével és olajágakkal fehér alapon."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
    options: ["Szlovákia", "Csehország", "Szlovénia", "Oroszország"],
    correct: 1,
    explanation: "Ez Csehország zászlaja, fehér-piros sávokkal és kék ékkel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
    options: ["Norvégia", "Dánia", "Svédország", "Finnország"],
    correct: 1,
    explanation: "Ez Dánia zászlaja, a Dannebrog fehér kereszttel piros alapon."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg",
    options: ["Lettország", "Észtország", "Finnország", "Litvánia"],
    correct: 1,
    explanation: "Ez Észtország zászlaja, kék-fekete-fehér vízszintes sávokkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
    options: ["Svédország", "Finnország", "Észtország", "Norvégia"],
    correct: 1,
    explanation: "Ez Finnország zászlaja, kék északi kereszttel fehér alapon."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    options: ["Olaszország", "Franciaország", "Hollandia", "Belgium"],
    correct: 1,
    explanation: "Ez Franciaország zászlaja, kék-fehér-piros függőleges trikolór."
  },
  {
    question: "Ez melyik ország zászlaja?",
    image: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    options: ["Belgium", "Németország", "Észtország", "Hollandia"],
    correct: 1,
    explanation: "A fekete-piros-arany Németországot jelképezi."
  },
  {
    question: "Melyik ország zászlaja ez?",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
    options: ["Ciprus", "Görögország", "San Marino", "Bulgária"],
    correct: 1,
    explanation: "Ez Görögország zászlaja, kék-fehér csíkokkal és kereszttel."
  },
  {
    question: "Melyik ország zászlaja ez?",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
    options: ["Bulgária", "Magyarország", "Olaszország", "Irán"],
    correct: 1,
    explanation: "Ez Magyarország zászlaja, piros-fehér-zöld vízszintes sávokkal."
  },
  {
    question: "Melyik ország zászlaja ez?",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg",
    options: ["Norvégia", "Izland", "Finnország", "Svédország"],
    correct: 1,
    explanation: "Ez Izland zászlaja, piros kereszttel a kék alapon fehér szegéllyel."
  },
  {
    question: "Melyik ország zászlaja ez?",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
    options: ["Olaszország", "Írország", "Elefántcsontpart", "Egyesült Királyság"],
    correct: 1,
    explanation: "Ez Írország zászlaja, zöld-fehér-narancs függőleges sávokkal."
  },
  {
    question: "Melyik ország zászlaja ez?",
    image: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    options: ["Magyarország", "Olaszország", "Írország", "Bulgária"],
    correct: 1,
    explanation: "Ez Olaszország zászlaja, zöld-fehér-piros függőleges trikolór."
  },
  {
    question: "Melyik ország zászlaja ez?",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo.svg",
    options: ["Bosznia-Hercegovina", "Koszovó", "Albánia", "Montenegró"],
    correct: 1,
    explanation: "Ez Koszovó zászlaja, arany térképsziluettel és csillagokkal kék mezőn."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",
    options: ["Észtország", "Lettország", "Ausztria", "Litvánia"],
    correct: 1,
    explanation: "Ez Lettország zászlaja, bordó-fehér-bordó vízszintes sávokkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg",
    options: ["Luxemburg", "Liechtenstein", "Andorra", "Monaco"],
    correct: 1,
    explanation: "Ez Liechtenstein zászlaja, kék-piros mezőn arany koronával."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg",
    options: ["Lettország", "Litvánia", "Ukrajna", "Románia"],
    correct: 1,
    explanation: "Ez Litvánia zászlaja, sárga-zöld-piros vízszintes sávokkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg",
    options: ["Hollandia", "Luxemburg", "Franciaország", "Oroszország"],
    correct: 1,
    explanation: "Ez Luxemburg zászlaja, piros-fehér-világoskék sávokkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg",
    options: ["Monaco", "Málta", "Ciprus", "San Marino"],
    correct: 1,
    explanation: "Ez Málta zászlaja, fehér és piros mezőkkel, a George-kereszttel."
  },
  {
    question: "Melyik ország zászlaja ez?",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg",
    options: ["Románia", "Moldova", "Ukrajna", "Andorra"],
    correct: 1,
    explanation: "Ez Moldova zászlaja, román trikolór címerrel a középen."
  },
  {
    question: "Melyik ország zászlaja ez?",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg",
    options: ["Indonézia", "Monaco", "Ausztria", "Lengyelország"],
    correct: 1,
    explanation: "Ez Monaco zászlaja, piros-fehér vízszintes sávokkal."
  },
  {
    question: "Melyik ország zászlaja ez?",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg",
    options: ["Albánia", "Montenegró", "Szerbia", "Észak-Macedónia"],
    correct: 1,
    explanation: "Ez Montenegró zászlaja, vörös mezőn arany szegéllyel és kétfejű sassal."
  },
  {
    question: "Melyik ország zászlaja ez?",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
    options: ["Luxemburg", "Hollandia", "Franciaország", "Horvátország"],
    correct: 1,
    explanation: "Ez Hollandia zászlaja, piros-fehér-kék vízszintes trikolór."
  },
  {
    question: "Melyik ország zászlaja ez?",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg",
    options: ["Albánia", "Észak-Macedónia", "Bulgária", "Koszovó"],
    correct: 1,
    explanation: "Ez Észak-Macedónia zászlaja, stilizált nap sugaraival."
  },
  {
    question: "Melyik ország zászlaja ez?",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
    options: ["Dánia", "Norvégia", "Izland", "Finnország"],
    correct: 1,
    explanation: "Ez Norvégia zászlaja, kék kereszttel a piros alapon fehér szegéllyel."
  },
  {
    question: "Melyik ország zászlaja ez?",
    image: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
    options: ["Monaco", "Lengyelország", "Indonézia", "Ausztria"],
    correct: 1,
    explanation: "Ez Lengyelország zászlaja, fehér a vörös felett."
  },
  {
    question: "Melyik ország zászlaja ez?",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
    options: ["Spanyolország", "Portugália", "Olaszország", "Bulgária"],
    correct: 1,
    explanation: "Ez Portugália zászlaja, zöld és vörös mezőn a címerrel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
    options: ["Csád", "Románia", "Moldova", "Andorra"],
    correct: 1,
    explanation: "Ez Románia zászlaja, kék-sárga-piros függőleges sávokkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
    options: ["Szerbia", "Oroszország", "Szlovákia", "Szlovénia"],
    correct: 1,
    explanation: "Ez Oroszország zászlaja, fehér-kék-piros vízszintes sávokkal."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg",
    options: ["Vatikán", "San Marino", "Monaco", "Andorra"],
    correct: 1,
    explanation: "Ez San Marino zászlaja, fehér és világoskék mezőn a címerrel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg",
    options: ["Oroszország", "Szerbia", "Szlovákia", "Szlovénia"],
    correct: 1,
    explanation: "Ez Szerbia zászlaja, piros-kék-fehér sávokkal és címerrel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg",
    options: ["Szlovénia", "Szlovákia", "Oroszország", "Horvátország"],
    correct: 1,
    explanation: "Ez Szlovákia zászlaja, fehér-kék-piros trikolórral és címerrel."
  },
  {
    question: "Melyik ország zászlaja látható?",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg",
    options: ["Szlovákia", "Szlovénia", "Horvátország", "Szerbia"],
    correct: 1,
    explanation: "Ez Szlovénia zászlaja, fehér-kék-piros sávokkal és címerrel."
  },
  {
    question: "Ez melyik ország zászlaja?",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    options: ["Portugália", "Spanyolország", "Andorra", "Olaszország"],
    correct: 1,
    explanation: "Ez Spanyolország zászlaja, piros-sárga-piros sávokkal és címerrel."
  },
  {
    question: "Ez melyik ország zászlaja?",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
    options: ["Finnország", "Svédország", "Ukrajna", "Norvégia"],
    correct: 1,
    explanation: "Ez Svédország zászlaja, sárga északi kereszttel kék alapon."
  },
  {
    question: "Ez melyik ország zászlaja?",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
    options: ["Dánia", "Svájc", "Ausztria", "Málta"],
    correct: 1,
    explanation: "Ez Svájc zászlaja, fehér kereszt piros alapon."
  },
  {
    question: "Ez melyik ország zászlaja?",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    options: ["Tunézia", "Törökország", "Marokkó", "Albánia"],
    correct: 1,
    explanation: "Ez Törökország zászlaja, fehér félholddal és csillaggal vörös mezőn."
  },
  {
    question: "Ez melyik ország zászlaja?",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
    options: ["Svédország", "Ukrajna", "Kazahsztán", "Románia"],
    correct: 1,
    explanation: "Ez Ukrajna zászlaja, kék és sárga vízszintes sávokkal."
  },
  {
    question: "Ez melyik ország zászlaja?",
    image: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    options: ["Írország", "Egyesült Királyság", "Izland", "Norvégia"],
    correct: 1,
    explanation: "Ez az Egyesült Királyság zászlaja, a Union Jack."
  },
  {
    question: "Ez melyik ország zászlaja?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_the_Vatican_City.svg/320px-Flag_of_the_Vatican_City.svg.png",
    options: ["San Marino", "Vatikán", "Andorra", "Monaco"],
    correct: 1,
    explanation: "Ez a Vatikán zászlaja, sárga-fehér mezőn a kulcsokkal és tiarával."
  }
];
