const originalQuestions = [
  {
    question: "Melyik évben adták ki az Aranybullát Magyarországon?",
    options: ["1215", "1222", "1224", "1231"],
    answer: 1,
    explanation: "II. András 1222-ben adta ki az Aranybullát, amely a nemesi kiváltságokat rögzítette."
  },
  {
    question: "Ki hozta az 1351-es törvényeket (ősiség törvénye) Magyarországon?",
    options: ["I. Károly", "I. (Nagy) Lajos", "Zsigmond", "II. András"],
    answer: 1,
    explanation: "I. (Nagy) Lajos 1351-es törvényei megerősítették az Aranybullát és bevezették az ősiséget."
  },
  {
    question: "Melyik városban hirdette meg Luther Márton a kilencvenöt tételt?",
    options: ["Wittenberg", "Worms", "Augsburg", "Mainz",],
    answer: 0,
    explanation: "Luther 1517. október 31-én Wittenbergben tűzte ki téziseit."
  },
  {
    question: "Melyik béke zárta le a harmincéves háborút?",
    options: ["Utrechti béke", "Westfáliai béke", "Bécsi béke", "Versailles-i béke"],
    answer: 1,
    explanation: "A westfáliai béke 1648-ban, Münsterben és Osnabrückben vetett véget a háborúnak."
  },
  {
    question: "Melyik évben egyesült Németország porosz vezetés alatt?",
    options: ["1866", "1871", "1848", "1890"],
    answer: 1,
    explanation: "1871-ben a versailles-i Tükörteremben kiáltották ki a Német Császárságot."
  },
  {
    question: "Melyik évben fogadta el a magyar országgyűlés a Pragmatica Sanctiót?",
    options: ["1711", "1723", "1740", "1707"],
    answer: 1,
    explanation: "A Pragmatica Sanctiót 1723-ban fogadták el, biztosítva a Habsburg-ház nőági öröklését."
  },
  {
    question: "Kihez köthető a Türelmi rendelet kiadása?",
    options: ["II. József", "Mária Terézia", "I. Ferenc", "I. Lipót"],
    answer: 0,
    explanation: "II. József 1781-ben adta ki a Türelmi rendeletet a protestánsok és ortodoxok számára."
  },
  {
    question: "Melyik országgyűlést tekintjük a magyar reformkor kezdetének jelképes nyitányának?",
    options: ["1830. pozsonyi országgyűlés", "1825. pozsonyi országgyűlés", "1847–48. pozsonyi országgyűlés", "1832–36. pozsonyi országgyűlés"],
    answer: 1,
    explanation: "Az 1825. évi pozsonyi országgyűlésen történt Széchenyi felajánlása, a reformkor jelképes kezdete."
  },
  {
    question: "Mit tartalmaztak az 1848-as áprilisi törvények Magyarországon?",
    options: ["Jobbágyfelszabadítást és népképviseletet", "Az úriszék megerősítését", "A cenzúra visszaállítását", "Három nemzet unióját"],
    answer: 0,
    explanation: "Az áprilisi törvények megszüntették a feudális terheket, bevezették a közteherviselést és a népképviseletet."
  },
  {
    question: "Hol tette le a fegyvert a magyar fősereg 1849-ben?",
    options: ["Arad", "Világos", "Debrecen", "Komárom"],
    answer: 1,
    explanation: "Görgei Artúr 1849. augusztus 13-án Világosnál tette le a fegyvert az oroszok előtt."
  },
  {
    question: "Melyik évben született az első bécsi döntés?",
    options: ["1938", "1939", "1940", "1941"],
    answer: 0,
    explanation: "Az első bécsi döntést 1938. november 2-án hozták meg, Felvidék déli sávjának visszacsatolásáról."
  },
  {
    question: "Hány napig állt fenn a Magyarországi Tanácsköztársaság?",
    options: ["100", "133", "150", "90"],
    answer: 1,
    explanation: "A Tanácsköztársaság 133 napig tartott: 1919. március 21-től augusztus 1-ig."
  },
  {
    question: "Melyik évben fogadták el a numerus clausus törvényt Magyarországon?",
    options: ["1919", "1920", "1923", "1926"],
    answer: 1,
    explanation: "A numerus clausus törvényt 1920-ban hozták, a felsőoktatási felvételt korlátozva."
  },
  {
    question: "Melyik évben vezették be a pengőt Magyarországon?",
    options: ["1925", "1927", "1931", "1938"],
    answer: 1,
    explanation: "A pengőt 1927-ben vezették be a korona inflációját követően."
  },
  {
    question: "Ki volt a miniszterelnök az 1956-os forradalom napjaiban október 24-től?",
    options: ["Kádár János", "Nagy Imre", "Hegedüs András", "Gerő Ernő"],
    answer: 1,
    explanation: "Nagy Imre 1956. október 24-én alakított kormányt."
  },
  {
    question: "Melyik évben indult az új gazdasági mechanizmus Magyarországon?",
    options: ["1963", "1968", "1972", "1975"],
    answer: 1,
    explanation: "Az új gazdasági mechanizmus 1968. január 1-jén lépett életbe."
  },
  {
    question: "Mikor csatlakozott Magyarország az Európai Unióhoz?",
    options: ["2002", "2004", "2007", "2010"],
    answer: 1,
    explanation: "Magyarország 2004. május 1-jén csatlakozott az EU-hoz."
  },
  {
    question: "Ki volt az első köztársasági elnök a rendszerváltás után?",
    options: ["Göncz Árpád", "Sólyom László", "Mádl Ferenc", "Szili Katalin"],
    answer: 0,
    explanation: "Göncz Árpádot 1990-ben választotta meg az Országgyűlés köztársasági elnökké."
  },
  {
    question: "Melyik évben írták alá a maastrichti szerződést?",
    options: ["1991", "1992", "1993", "1995"],
    answer: 1,
    explanation: "A maastrichti szerződést 1992-ben írták alá, megalapozva az Európai Uniót."
  },
  {
    question: "Melyik évben tört ki a nagy gazdasági világválság tőzsdekrachja?",
    options: ["1927", "1929", "1931", "1933"],
    answer: 1,
    explanation: "Az 1929-es októberi tőzsdekrach indította el a világgazdasági válságot."
  },
  {
    question: "Melyik ország nem tartozott a központi hatalmakhoz az I. világháborúban?",
    options: ["Oszmán Birodalom", "Olaszország", "Németország", "Ausztria–Magyarország"],
    answer: 1,
    explanation: "Olaszország 1915-ben az antanthoz csatlakozott, nem a központi hatalmakhoz."
  },
  {
    question: "Melyik évben kezdődött a tridenti zsinat?",
    options: ["1545", "1517", "1521", "1555"],
    answer: 0,
    explanation: "A tridenti zsinat 1545-ben kezdődött, és az ellenreformáció alapdokumentumait alkotta meg."
  },
  {
    question: "Mikor alakult meg a NATO?",
    options: ["1945", "1947", "1949", "1955"],
    answer: 2,
    explanation: "A NATO 1949. április 4-én jött létre."
  },
  {
    question: "Melyik egyezmény osztotta fel az Újvilágot Spanyolország és Portugália között?",
    options: ["Augsburgi vallásbéke", "Tordesillasi szerződés", "Utrechti béke", "Utrecht Unió"],
    answer: 1,
    explanation: "A tordesillasi szerződés 1494-ben húzta meg a megosztó vonalat a két birodalom között."
  },
  {
    question: "Melyik évben fogadták el Franciaországban az Emberi és polgári jogok nyilatkozatát?",
    options: ["1776", "1789", "1791", "1804"],
    answer: 1,
    explanation: "Az 1789-es forradalom idején született meg az Emberi és polgári jogok nyilatkozata."
  },
  {
    question: "Kihez köthető a polgári törvénykönyv (Code civil) kihirdetése?",
    options: ["XVI. Lajos", "Napóleon Bonaparte", "III. Napóleon", "I. Miklós"],
    answer: 1,
    explanation: "Napóleon 1804-ben hirdette ki a Code civilt, a modern polgári jog alapművét."
  },
  {
    question: "Ki ellen irányult a Kr. e. 44. március 15-i merénylet a Római Köztársaságban?",
    options: ["Augustus", "Julius Caesar", "Marcus Antonius", "Cicero"],
    answer: 1,
    explanation: "Julius Caesart a szenátusban gyilkolták meg a márciusi idusokon."
  },
  {
    question: "Melyik béke zárta le Németország számára az I. világháborút?",
    options: ["Saint-Germain-i béke", "Trianoni béke", "Versailles-i béke", "Sèvres-i béke"],
    answer: 2,
    explanation: "A versailles-i békét 1919. június 28-án írták alá Németországgal."
  },
  {
    question: "Melyik évben kiáltották ki a Magyar Népköztársaságot?",
    options: ["1945", "1946", "1949", "1956"],
    answer: 2,
    explanation: "1949-ben fogadták el az új alkotmányt, és létrejött a Magyar Népköztársaság."
  },
  {
    question: "Melyik intézmény létrehozásához járult hozzá Széchenyi István 1825-ös felajánlásával?",
    options: ["Magyar Tudományos Akadémia", "Nemzeti Színház", "Lánchíd Társaság", "Magyar Kereskedelmi Bank"],
    answer: 0,
    explanation: "Széchenyi 1825-ös felajánlása a Magyar Tudományos Akadémia megalapítását szolgálta."
  }
];
