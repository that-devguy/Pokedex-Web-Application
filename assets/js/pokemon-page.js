const gen1 = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran",
  "Nidorina",
  "Nidoqueen",
  "Nidoran",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Farfetch'd",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew",
];
const gen2 = [
  "Chikorita",
  "Bayleef",
  "Meganium",
  "Cyndaquil",
  "Quilava",
  "Typhlosion",
  "Totodile",
  "Croconaw",
  "Feraligatr",
  "Sentret",
  "Furret",
  "Hoothoot",
  "Noctowl",
  "Ledyba",
  "Ledian",
  "Spinarak",
  "Ariados",
  "Crobat",
  "Chinchou",
  "Lanturn",
  "Pichu",
  "Cleffa",
  "Igglybuff",
  "Togepi",
  "Togetic",
  "Natu",
  "Xatu",
  "Mareep",
  "Flaaffy",
  "Ampharos",
  "Bellossom",
  "Marill",
  "Azumarill",
  "Sudowoodo",
  "Politoed",
  "Hoppip",
  "Skiploom",
  "Jumpluff",
  "Aipom",
  "Sunkern",
  "Sunflora",
  "Yanma",
  "Wooper",
  "Quagsire",
  "Espeon",
  "Umbreon",
  "Murkrow",
  "Slowking",
  "Misdreavus",
  "Unown",
  "Wobbuffet",
  "Girafarig",
  "Pineco",
  "Forretress",
  "Dunsparce",
  "Gligar",
  "Steelix",
  "Snubbull",
  "Granbull",
  "Qwilfish",
  "Scizor",
  "Shuckle",
  "Heracross",
  "Sneasel",
  "Teddiursa",
  "Ursaring",
  "Slugma",
  "Magcargo",
  "Swinub",
  "Piloswine",
  "Corsola",
  "Remoraid",
  "Octillery",
  "Delibird",
  "Mantine",
  "Skarmory",
  "Houndour",
  "Houndoom",
  "Kingdra",
  "Phanpy",
  "Donphan",
  "Porygon2",
  "Stantler",
  "Smeargle",
  "Tyrogue",
  "Hitmontop",
  "Smoochum",
  "Elekid",
  "Magby",
  "Miltank",
  "Blissey",
  "Raikou",
  "Entei",
  "Suicune",
  "Larvitar",
  "Pupitar",
  "Tyranitar",
  "Lugia",
  "Ho-Oh",
  "Celebi",
];
const gen3 = [
  "Treecko",
  "Grovyle",
  "Sceptile",
  "Torchic",
  "Combusken",
  "Blaziken",
  "Mudkip",
  "Marshtomp",
  "Swampert",
  "Poochyena",
  "Mightyena",
  "Zigzagoon",
  "Linoone",
  "Wurmple",
  "Silcoon",
  "Beautifly",
  "Cascoon",
  "Dustox",
  "Lotad",
  "Lombre",
  "Ludicolo",
  "Seedot",
  "Nuzleaf",
  "Shiftry",
  "Taillow",
  "Swellow",
  "Wingull",
  "Pelipper",
  "Ralts",
  "Kirlia",
  "Gardevoir",
  "Surskit",
  "Masquerain",
  "Shroomish",
  "Breloom",
  "Slakoth",
  "Vigoroth",
  "Slaking",
  "Nincada",
  "Ninjask",
  "Shedinja",
  "Whismur",
  "Loudred",
  "Exploud",
  "Makuhita",
  "Hariyama",
  "Azurill",
  "Nosepass",
  "Skitty",
  "Delcatty",
  "Sableye",
  "Mawile",
  "Aron",
  "Lairon",
  "Aggron",
  "Meditite",
  "Medicham",
  "Electrike",
  "Manectric",
  "Plusle",
  "Minun",
  "Volbeat",
  "Illumise",
  "Roselia",
  "Gulpin",
  "Swalot",
  "Carvanha",
  "Sharpedo",
  "Wailmer",
  "Wailord",
  "Numel",
  "Camerupt",
  "Torkoal",
  "Spoink",
  "Grumpig",
  "Spinda",
  "Trapinch",
  "Vibrava",
  "Flygon",
  "Cacnea",
  "Cacturne",
  "Swablu",
  "Altaria",
  "Zangoose",
  "Seviper",
  "Lunatone",
  "Solrock",
  "Barboach",
  "Whiscash",
  "Corphish",
  "Crawdaunt",
  "Baltoy",
  "Claydol",
  "Lileep",
  "Cradily",
  "Anorith",
  "Armaldo",
  "Feebas",
  "Milotic",
  "Castform",
  "Kecleon",
  "Shuppet",
  "Banette",
  "Duskull",
  "Dusclops",
  "Tropius",
  "Chimecho",
  "Absol",
  "Wynaut",
  "Snorunt",
  "Glalie",
  "Spheal",
  "Sealeo",
  "Walrein",
  "Clamperl",
  "Huntail",
  "Gorebyss",
  "Relicanth",
  "Luvdisc",
  "Bagon",
  "Shelgon",
  "Salamence",
  "Beldum",
  "Metang",
  "Metagross",
  "Regirock",
  "Regice",
  "Registeel",
  "Latias",
  "Latios",
  "Kyogre",
  "Groudon",
  "Rayquaza",
  "Jirachi",
  "Deoxys",
];
const gen4 = [
  "Turtwig",
  "Grotle",
  "Torterra",
  "Chimchar",
  "Monferno",
  "Infernape",
  "Piplup",
  "Prinplup",
  "Empoleon",
  "Starly",
  "Staravia",
  "Staraptor",
  "Bidoof",
  "Bibarel",
  "Kricketot",
  "Kricketune",
  "Shinx",
  "Luxio",
  "Luxray",
  "Budew",
  "Roserade",
  "Cranidos",
  "Rampardos",
  "Shieldon",
  "Bastiodon",
  "Burmy",
  "Wormadam",
  "Mothim",
  "Combee",
  "Vespiquen",
  "Pachirisu",
  "Buizel",
  "Floatzel",
  "Cherubi",
  "Cherrim",
  "Shellos",
  "Gastrodon",
  "Ambipom",
  "Drifloon",
  "Drifblim",
  "Buneary",
  "Lopunny",
  "Mismagius",
  "Honchkrow",
  "Glameow",
  "Purugly",
  "Chingling",
  "Stunky",
  "Skuntank",
  "Bronzor",
  "Bronzong",
  "Bonsly",
  "Mime Jr.",
  "Happiny",
  "Chatot",
  "Spiritomb",
  "Gible",
  "Gabite",
  "Garchomp",
  "Munchlax",
  "Riolu",
  "Lucario",
  "Hippopotas",
  "Hippowdon",
  "Skorupi",
  "Drapion",
  "Croagunk",
  "Toxicroak",
  "Carnivine",
  "Finneon",
  "Lumineon",
  "Mantyke",
  "Snover",
  "Abomasnow",
  "Weavile",
  "Magnezone",
  "Lickilicky",
  "Rhyperior",
  "Tangrowth",
  "Electivire",
  "Magmortar",
  "Togekiss",
  "Yanmega",
  "Leafeon",
  "Glaceon",
  "Gliscor",
  "Mamoswine",
  "Porygon-Z",
  "Gallade",
  "Probopass",
  "Dusknoir",
  "Froslass",
  "Rotom",
  "Uxie",
  "Mesprit",
  "Azelf",
  "Dialga",
  "Palkia",
  "Heatran",
  "Regigigas",
  "Giratina",
  "Cresselia",
  "Phione",
  "Manaphy",
  "Darkrai",
  "Shaymin",
  "Arceus",
];
const gen5 = [
  "Victini",
  "Snivy",
  "Servine",
  "Serperior",
  "Tepig",
  "Pignite",
  "Emboar",
  "Oshawott",
  "Dewott",
  "Samurott",
  "Patrat",
  "Watchog",
  "Lillipup",
  "Herdier",
  "Stoutland",
  "Purrloin",
  "Liepard",
  "Pansage",
  "Simisage",
  "Pansear",
  "Simisear",
  "Panpour",
  "Simipour",
  "Munna",
  "Musharna",
  "Pidove",
  "Tranquill",
  "Unfezant",
  "Blitzle",
  "Zebstrika",
  "Roggenrola",
  "Boldore",
  "Gigalith",
  "Woobat",
  "Swoobat",
  "Drilbur",
  "Excadrill",
  "Audino",
  "Timburr",
  "Gurdurr",
  "Conkeldurr",
  "Tympole",
  "Palpitoad",
  "Seismitoad",
  "Throh",
  "Sawk",
  "Sewaddle",
  "Swadloon",
  "Leavanny",
  "Venipede",
  "Whirlipede",
  "Scolipede",
  "Cottonee",
  "Whimsicott",
  "Petilil",
  "Lilligant",
  "Basculin",
  "Sandile",
  "Krokorok",
  "Krookodile",
  "Darumaka",
  "Darmanitan",
  "Maractus",
  "Dwebble",
  "Crustle",
  "Scraggy",
  "Scrafty",
  "Sigilyph",
  "Yamask",
  "Cofagrigus",
  "Tirtouga",
  "Carracosta",
  "Archen",
  "Archeops",
  "Trubbish",
  "Garbodor",
  "Zorua",
  "Zoroark",
  "Minccino",
  "Cinccino",
  "Gothita",
  "Gothorita",
  "Gothitelle",
  "Solosis",
  "Duosion",
  "Reuniclus",
  "Ducklett",
  "Swanna",
  "Vanillite",
  "Vanillish",
  "Vanilluxe",
  "Deerling",
  "Sawsbuck",
  "Emolga",
  "Karrablast",
  "Escavalier",
  "Foongus",
  "Amoonguss",
  "Frillish",
  "Jellicent",
  "Alomomola",
  "Joltik",
  "Galvantula",
  "Ferroseed",
  "Ferrothorn",
  "Klink",
  "Klang",
  "Klinklang",
  "Tynamo",
  "Eelektrik",
  "Eelektross",
  "Elgyem",
  "Beheeyem",
  "Litwick",
  "Lampent",
  "Chandelure",
  "Axew",
  "Fraxure",
  "Haxorus",
  "Cubchoo",
  "Beartic",
  "Cryogonal",
  "Shelmet",
  "Accelgor",
  "Stunfisk",
  "Mienfoo",
  "Mienshao",
  "Druddigon",
  "Golett",
  "Golurk",
  "Pawniard",
  "Bisharp",
  "Bouffalant",
  "Rufflet",
  "Braviary",
  "Vullaby",
  "Mandibuzz",
  "Heatmor",
  "Durant",
  "Deino",
  "Zweilous",
  "Hydreigon",
  "Larvesta",
  "Volcarona",
  "Cobalion",
  "Terrakion",
  "Virizion",
  "Tornadus",
  "Thundurus",
  "Reshiram",
  "Zekrom",
  "Landorus",
  "Kyurem",
  "Keldeo",
  "Meloetta",
  "Genesect",
];
const gen6 = [
  "Chespin",
  "Quilladin",
  "Chesnaught",
  "Fennekin",
  "Braixen",
  "Delphox",
  "Froakie",
  "Frogadier",
  "Greninja",
  "Bunnelby",
  "Diggersby",
  "Fletchling",
  "Fletchinder",
  "Talonflame",
  "Scatterbug",
  "Spewpa",
  "Vivillon",
  "Litleo",
  "Pyroar",
  "Flabébé",
  "Floette",
  "Florges",
  "Skiddo",
  "Gogoat",
  "Pancham",
  "Pangoro",
  "Furfrou",
  "Espurr",
  "Meowstic",
  "Honedge",
  "Doublade",
  "Aegislash",
  "Spritzee",
  "Aromatisse",
  "Swirlix",
  "Slurpuff",
  "Inkay",
  "Malamar",
  "Binacle",
  "Barbaracle",
  "Skrelp",
  "Dragalge",
  "Clauncher",
  "Clawitzer",
  "Helioptile",
  "Heliolisk",
  "Tyrunt",
  "Tyrantrum",
  "Amaura",
  "Aurorus",
  "Sylveon",
  "Hawlucha",
  "Dedenne",
  "Carbink",
  "Goomy",
  "Sliggoo",
  "Goodra",
  "Klefki",
  "Phantump",
  "Trevenant",
  "Pumpkaboo",
  "Gourgeist",
  "Bergmite",
  "Avalugg",
  "Noibat",
  "Noivern",
  "Xerneas",
  "Yveltal",
  "Zygarde",
  "Diancie",
  "Hoopa",
  "Volcanion",
];
const gen7 = [
  "Rowlet",
  "Dartrix",
  "Decidueye",
  "Litten",
  "Torracat",
  "Incineroar",
  "Popplio",
  "Brionne",
  "Primarina",
  "Pikipek",
  "Trumbeak",
  "Toucannon",
  "Yungoos",
  "Gumshoos",
  "Grubbin",
  "Charjabug",
  "Vikavolt",
  "Crabrawler",
  "Crabominable",
  "Oricorio",
  "Cutiefly",
  "Ribombee",
  "Rockruff",
  "Lycanroc",
  "Wishiwashi",
  "Mareanie",
  "Toxapex",
  "Mudbray",
  "Mudsdale",
  "Dewpider",
  "Araquanid",
  "Fomantis",
  "Lurantis",
  "Morelull",
  "Shiinotic",
  "Salandit",
  "Salazzle",
  "Stufful",
  "Bewear",
  "Bounsweet",
  "Steenee",
  "Tsareena",
  "Comfey",
  "Oranguru",
  "Passimian",
  "Wimpod",
  "Golisopod",
  "Sandygast",
  "Palossand",
  "Pyukumuku",
  "Type: Null",
  "Silvally",
  "Minior",
  "Komala",
  "Turtonator",
  "Togedemaru",
  "Mimikyu",
  "Bruxish",
  "Drampa",
  "Dhelmise",
  "Jangmo-o",
  "Hakamo-o",
  "Kommo-o",
  "Tapu Koko",
  "Tapu Lele",
  "Tapu Bulu",
  "Tapu Fini",
  "Cosmog",
  "Cosmoem",
  "Solgaleo",
  "Lunala",
  "Nihilego",
  "Buzzwole",
  "Pheromosa",
  "Xurkitree",
  "Celesteela",
  "Kartana",
  "Guzzlord",
  "Necrozma",
  "Magearna",
  "Marshadow",
  "Poipole",
  "Naganadel",
  "Stakataka",
  "Blacephalon",
  "Zeraora",
  "Meltan",
  "Melmetal",
];
const gen8 = [
  "Grookey",
  "Thwackey",
  "Rillaboom",
  "Scorbunny",
  "Raboot",
  "Cinderace",
  "Sobble",
  "Drizzile",
  "Inteleon",
  "Skwovet",
  "Greedent",
  "Rookidee",
  "Corvisquire",
  "Corviknight",
  "Blipbug",
  "Dottler",
  "Orbeetle",
  "Nickit",
  "Thievul",
  "Gossifleur",
  "Eldegoss",
  "Wooloo",
  "Dubwool",
  "Chewtle",
  "Drednaw",
  "Yamper",
  "Boltund",
  "Rolycoly",
  "Carkol",
  "Coalossal",
  "Applin",
  "Flapple",
  "Appletun",
  "Silicobra",
  "Sandaconda",
  "Cramorant",
  "Arrokuda",
  "Barraskewda",
  "Toxel",
  "Toxtricity",
  "Sizzlipede",
  "Centiskorch",
  "Clobbopus",
  "Grapploct",
  "Sinistea",
  "Polteageist",
  "Hatenna",
  "Hattrem",
  "Hatterene",
  "Impidimp",
  "Morgrem",
  "Grimmsnarl",
  "Obstagoon",
  "Perrserker",
  "Cursola",
  "Sirfetch’d",
  "Mr. Rime",
  "Runerigus",
  "Milcery",
  "Alcremie",
  "Falinks",
  "Pincurchin",
  "Snom",
  "Frosmoth",
  "Stonjourner",
  "Eiscue",
  "Indeedee",
  "Morpeko",
  "Cufant",
  "Copperajah",
  "Dracozolt",
  "Arctozolt",
  "Dracovish",
  "Arctovish",
  "Duraludon",
  "Dreepy",
  "Drakloak",
  "Dragapult",
  "Zacian",
  "Zamazenta",
  "Eternatus",
  "Kubfu",
  "Urshifu",
  "Zarude",
  "Regieleki",
  "Regidrago",
  "Glastrier",
  "Spectrier",
  "Calyrex",
  "Wyrdeer",
  "Kleavor",
  "Ursaluna",
  "Basculegion",
  "Sneasler",
  "Overqwil",
  "Enamorus",
];
const gen9 = [
  "Sprigatito",
  "Floragato",
  "Meowscarada",
  "Fuecoco",
  "Crocalor",
  "Skeledirge",
  "Quaxly",
  "Quaxwell",
  "Quaquaval",
  "Lechonk",
  "Oinkologne",
  "Tarountula",
  "Spidops",
  "Nymble",
  "Lokix",
  "Pawmi",
  "Pawmo",
  "Pawmot",
  "Tandemaus",
  "Maushold",
  "Fidough",
  "Dachsbun",
  "Smoliv",
  "Dolliv",
  "Arboliva",
  "Squawkabilly",
  "Nacli",
  "Naclstack",
  "Garganacl",
  "Charcadet",
  "Armarouge",
  "Ceruledge",
  "Tadbulb",
  "Bellibolt",
  "Wattrel",
  "Kilowattrel",
  "Maschiff",
  "Mabosstiff",
  "Shroodle",
  "Grafaiai",
  "Bramblin",
  "Brambleghast",
  "Toedscool",
  "Toedscruel",
  "Klawf",
  "Capsakid",
  "Scovillain",
  "Rellor",
  "Rabsca",
  "Flittle",
  "Espathra",
  "Tinkatink",
  "Tinkatuff",
  "Tinkaton",
  "Wiglett",
  "Wugtrio",
  "Bombirdier",
  "Finizen",
  "Palafin",
  "Varoom",
  "Revavroom",
  "Cyclizar",
  "Orthworm",
  "Glimmet",
  "Glimmora",
  "Greavard",
  "Houndstone",
  "Flamigo",
  "Cetoddle",
  "Cetitan",
  "Veluza",
  "Dondozo",
  "Tatsugiri",
  "Annihilape",
  "Clodsire",
  "Farigiraf",
  "Dudunsparce",
  "Kingambit",
  "Great-Tusk",
  "Scream-Tail",
  "Brute-Bonnet",
  "Flutter-Mane",
  "Slither-Wing",
  "Sandy-Shocks",
  "Iron-Treads",
  "Iron-Bundle",
  "Iron-Hands",
  "Iron-Jugulis",
  "Iron-Moth",
  "Iron-Thorns",
  "Frigibax",
  "Arctibax",
  "Baxcalibur",
  "Gimmighoul",
  "Gholdengo",
  "Wo-Chien",
  "Chien-Pao",
  "Ting-Lu",
  "Chi-Yu",
  "Roaring Moon",
  "Iron-Valiant",
  "Koraidon",
  "Miraidon" /*,
  "Walking-Wake",
  "Iron-Leaves",
  "Okidogi",
  "Munkidori",
  "Fezandipiti",
  "Ogerpon",
  "Terapagos"*/,
];

// https://www.dragonflycave.com/resources/pokemon-list-generator
let allPokemon = gen1.concat(gen2, gen3, gen4, gen5, gen6, gen7, gen8, gen9);
const searchBtn = document.getElementById("search");
const searchBox = document.getElementById("pokemonName"); // names with spaces need a '-' between them
const pokemonBox = document.getElementById("pokemonBox");
const pokemonNameEl = document.getElementById("pokemon-name");
const pokemonImageEl = document.getElementById("pokemon-official-art");
const pokemonIdEl = document.getElementById("pokemon-id");
const pokemonDescEl = document.getElementById("pokemon-description");
const pokemonHeightEl = document.getElementById("pokemon-height");
const pokemonCategoryEl = document.getElementById("pokemon-category");
const pokemonWeightEl = document.getElementById("pokemon-weight");
const pokemonAbilitiesEl = document.getElementById("pokemon-abilities");
const pokemonHpEl = document.getElementById("hp-stat");
const pokemonAtkEl = document.getElementById("atk-stat");
const pokemonDefEl = document.getElementById("def-stat");
const pokemonSpAtkEl = document.getElementById("sp-atk-stat");
const pokemonSpDefEl = document.getElementById("sp-def-stat");
const pokemonSpeedEl = document.getElementById("speed-stat");
searchBtn.addEventListener("click", searchPokemon);
let pokemonEvolutionChain;
let viewPokemon;
let totalNum = 1008;
let startNum = 1;
let endNum = 15;
document.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("favorite-btn");
}

let favorites = [];

const starPokemon = () => {
  if (localStorage['favouritePokemon']) 
      // If a saved pokemon exists
      savedPokemon = JSON.parse(localStorage['favouritePokeomon'])
  else 
      // No saved pokemon
      savedPokemon = {}
}

const savedPokemon = () => {
  localStorage['favouritePokemon'] = JSON.stringify(favouritePokemon)
}



function loadPokemon() {
  const promises = [];
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let pokemonName = urlParams.get('pokemon');
  let pokemonId = urlParams.get('id');
  url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  // Pulls the species data
  urlSpecies = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
  // Pulls the trading card game images
  urlPokemonTCG = `https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}*`
  promises.push(fetch(url).then((res) => res.json()));
  promises.push(fetch(urlSpecies).then((res) => res.json()));
  promises.push(fetch(urlPokemonTCG).then((res) => res.json()));
  Promise.all(promises).then((results) => {
    const pokemon = results[0];
    const species = results[1];
    const pokemonTCG = results[2];
    const pokemonCards = pokemonTCG.data.filter((card) => card.name.toLowerCase().includes(pokemonName.toLowerCase().replace(/-.*$/, "").trim()));
    const evolutionChainId = species.evolution_chain.url.split('/').slice(-2)[0];
    const urlEvolutionChains = `https://pokeapi.co/api/v2/evolution-chain/${evolutionChainId}/`;
    promises.push(fetch(urlEvolutionChains).then((res) => res.json()));
    Promise.all(promises).then((results) => {
      const pokemonData = {
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        image2: pokemon.sprites.other["official-artwork"].front_default,
        type: pokemon.types.map((type) => type.type.name),
        id: pokemon.id,
        height: pokemon.height,
        weight: pokemon.weight,
        abilities: pokemon.abilities.map((ability) => ability.ability.name),
        HP: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defence: pokemon.stats[2].base_stat,
        spAttack: pokemon.stats[3].base_stat,
        spDefence: pokemon.stats[4].base_stat,
        speed: pokemon.stats[5].base_stat,
        evolution: results[3],
        desc: species.flavor_text_entries.find(item => item.language.name === 'en')?.flavor_text || null,
        category: species.genera[7] || null,
        categoryName: species.genera[7] ? species.genera[7].genus.replace("Pokémon", "") : null,
        cards: pokemonCards
      };

      function getEvolutionChain(chain) {
        let evolutionChain = [];
        const species = chain.species.name;
        evolutionChain.push(species);
        if (chain.evolves_to.length > 0) {
          evolutionChain = evolutionChain.concat(getEvolutionChain(chain.evolves_to[0]));
        }
        return evolutionChain;
      }
      
      pokemonEvolutionChain = getEvolutionChain(pokemonData.evolution.chain);

    console.log(pokemonData, pokemonEvolutionChain, );
    displayPokemonPage(pokemonData);
    });
  });
}

loadPokemon();

function displayPokemonPage(pokemonData){
  let pokemonAbilties = pokemonData.abilities.map(ability => ability.charAt(0).toUpperCase() + ability.slice(1)).join(", ");
  let type1 = pokemonData.type[0];
  let type2 = pokemonData.type[1] ? pokemonData.type[1] : null;
  let typeBarAbout = document.getElementById("type-bar-about");
  let typeBarStats = document.getElementById("type-bar-stats");
  let typeBarEvolutions = document.getElementById("type-bar-evolutions");
  let typeBarCards = document.getElementById("type-bar-cards");
  let type1El = document.getElementById("pokemon-type1");
  let type2El = document.getElementById("pokemon-type2");
  let tradingCardsEl = document.getElementById("pokemon-tcg");
  let cardSectionHeaderEl = document.getElementById("trading-card-header");
  let evolutionContainerEl = document.getElementById("evolution-chain-cols");

  function convertWeight(weight) {
    const lbsPerHectogram = 0.22046226;
    return weight * lbsPerHectogram;
  }

  // Converts height to inches and then converts that to feet and inches 
  function convertInches(height) {
    const inchesPerDecimeter = 3.93701;
    return height * inchesPerDecimeter;
  }

  function nearestDecimal(num) {
    return Math.round(num *  10)/ 10;
  }

  function convertFeetInches(height) {
    const inchesPerFoot = 12;
    const totalFeet = Math.floor(height / inchesPerFoot);
    const remainingInches = Math.round(height % inchesPerFoot);
    return `${totalFeet}'${remainingInches}"`;
  }
  

  let weightPounds = convertWeight(pokemonData.weight);
  let roundedWeight = nearestDecimal(weightPounds);
  let heightInches = convertInches(pokemonData.height)
  let heightFeet = convertFeetInches(heightInches);



  // For loop to run and append any cards that include the pokemon's name
  for (let i = 0; i < pokemonData.cards.length; i++) {
    let cardImage = pokemonData.cards[i].images.small;
    let tradingCard = document.createElement("img");
    tradingCard.src = cardImage
    tradingCard.classList.add("rounded-lg", "h-80", "w-auto");
    tradingCardsEl.appendChild(tradingCard);
  }

  // For loop to pull pokemon evolutions data and forEach to display them
  const promises = [];
  for (let i = 0; i < pokemonEvolutionChain.length; i++) {
    url = `https://pokeapi.co/api/v2/pokemon/${pokemonEvolutionChain[i]}`;
    promises.push(fetch(url).then((res) => res.json()));
  }

  Promise.all(promises).then((results) => {
    results.forEach((result, i) => {
      const evolutions = {
        name: result.name,
        image: result.sprites.front_default,
        id: result.id,
      };
      let evolutionChainCol = document.createElement('div');
      evolutionChainCol.classList.add('pokemon-evolution', 'w-1/${pokemonEvolutionChain.length}', 'mb-3', 'h-fit', 'mx-auto', 'flex', 'flex-col', 'items-center', 'hover:cursor-pointer')
      evolutionChainCol.onclick = function(){
        window.location.href=`pokemon-page.html?pokemon=${evolutions.name}&id=${evolutions.id}`
      }
      evolutionChainCol.innerHTML = `
          <img src="${evolutions.image}" alt="" class=""/>
          <p class="pokedex-num text-md">${capitalize(pokemonEvolutionChain[i])}</p>
          <p class="pokedex-num text-2xs text-gray-500">#${evolutions.id.toString().padStart(4, "0")}</p>
          `
      evolutionContainerEl.appendChild(evolutionChainCol);
    });
  });
  
  pokemonNameEl.textContent = capitalize(pokemonData.name);
  pokemonImageEl.src = pokemonData.image2;
  pokemonIdEl.textContent = '#' + pokemonData.id.toString().padStart(4, "0");
  type1El.textContent = type1;
  type2El.textContent = type2;
  pokemonDescEl.textContent = pokemonData.desc;
  pokemonHeightEl.textContent = heightFeet;
  pokemonWeightEl.textContent = roundedWeight + 'lbs';
  pokemonCategoryEl.textContent = pokemonData.categoryName;
  pokemonAbilitiesEl.textContent = pokemonAbilties;
  pokemonHpEl.innerHTML = `<p class="text-sm">HP</p><p class="text-sm">${pokemonData.HP}</p>`;
  pokemonAtkEl.innerHTML = `<p class="text-sm">Atk.</p><p class="text-sm">${pokemonData.attack}</p>`;
  pokemonDefEl.innerHTML = `<p class="text-sm">Def.</p><p class="text-sm">${pokemonData.defence}</p>`;
  pokemonSpAtkEl.innerHTML = `<p class="text-sm">Sp. Atk.</p><p class="text-sm">${pokemonData.spAttack}</p>`;
  pokemonSpDefEl.innerHTML = `<p class="text-sm">Sp. Def.</p><p class="text-sm">${pokemonData.spDefence}</p>`;
  pokemonSpeedEl.innerHTML = `<p class="text-sm">Speed</p><p class="text-sm">${pokemonData.speed}</p>`;
  cardSectionHeaderEl.textContent = capitalize(pokemonData.name) + ' Trading Cards';


  
  

  

  // Applies the type styles
  if (type1El.textContent === "normal") {
    type1El.classList.add("bg-stone-200");
    typeBarAbout.classList.add("bg-stone-200");
    typeBarStats.classList.add("bg-stone-200");
    typeBarEvolutions.classList.add("bg-stone-200");
    typeBarCards.classList.add("bg-stone-200");
  } else if (type1El.textContent === "fighting") {
    type1El.classList.add("bg-red-600", "text-white");
    typeBarAbout.classList.add("bg-red-600");
    typeBarStats.classList.add("bg-red-600");
    typeBarEvolutions.classList.add("bg-red-600");
    typeBarCards.classList.add("bg-red-600");
  } else if (type1El.textContent === "flying") {
    type1El.classList.add("bg-indigo-400", "text-white");
    typeBarAbout.classList.add("bg-indigo-400");
    typeBarStats.classList.add("bg-indigo-400");
    typeBarEvolutions.classList.add("bg-indigo-400");
    typeBarCards.classList.add("bg-indigo-400");
  } else if (type1El.textContent === "poison") {
    type1El.classList.add("bg-purple-400", "text-white");
    typeBarAbout.classList.add("bg-purple-400");
    typeBarStats.classList.add("bg-purple-400");
    typeBarEvolutions.classList.add("bg-purple-400");
    typeBarCards.classList.add("bg-purple-400");
  } else if (type1El.textContent === "ground") {
    type1El.classList.add("bg-amber-400");
    typeBarAbout.classList.add("bg-amber-400");
    typeBarStats.classList.add("bg-amber-400");
    typeBarEvolutions.classList.add("bg-amber-400");
    typeBarCards.classList.add("bg-amber-400");
  } else if (type1El.textContent === "rock") {
    type1El.classList.add("bg-yellow-700", "text-white");
    typeBarAbout.classList.add("bg-yellow-700");
    typeBarStats.classList.add("bg-yellow-700");
    typeBarEvolutions.classList.add("bg-yellow-700");
    typeBarCards.classList.add("bg-yellow-700");
  } else if (type1El.textContent === "bug") {
    type1El.classList.add("bg-lime-400");
    typeBarAbout.classList.add("bg-lime-400");
    typeBarStats.classList.add("bg-lime-400");
    typeBarEvolutions.classList.add("bg-lime-400");
    typeBarCards.classList.add("bg-lime-400");
  } else if (type1El.textContent === "ghost") {
    type1El.classList.add("bg-purple-700", "text-white");
    typeBarAbout.classList.add("bg-purple-700");
    typeBarStats.classList.add("bg-purple-700");
    typeBarEvolutions.classList.add("bg-purple-700");
    typeBarCards.classList.add("bg-purple-700");
  } else if (type1El.textContent === "steel") {
    type1El.classList.add("bg-zinc-500", "text-white");
    typeBarAbout.classList.add("bg-zinc-500");
    typeBarStats.classList.add("bg-zinc-500");
    typeBarEvolutions.classList.add("bg-zinc-500");
    typeBarCards.classList.add("bg-zinc-500");
  } else if (type1El.textContent === "fire") {
    type1El.classList.add("bg-orange-500", "text-white");
    typeBarAbout.classList.add("bg-orange-500");
    typeBarStats.classList.add("bg-orange-500");
    typeBarEvolutions.classList.add("bg-orange-500");
    typeBarCards.classList.add("bg-orange-500");
  } else if (type1El.textContent === "water") {
    type1El.classList.add("bg-blue-500", "text-white");
    typeBarAbout.classList.add("bg-blue-500");
    typeBarStats.classList.add("bg-blue-500");
    typeBarEvolutions.classList.add("bg-blue-500");
    typeBarCards.classList.add("bg-blue-500");
  } else if (type1El.textContent === "grass") {
    type1El.classList.add("bg-green-400");
    typeBarAbout.classList.add("bg-green-400");
    typeBarStats.classList.add("bg-green-400");
    typeBarEvolutions.classList.add("bg-green-400");
    typeBarCards.classList.add("bg-green-400");
  } else if (type1El.textContent === "electric") {
    type1El.classList.add("bg-yellow-300");
    typeBarAbout.classList.add("bg-yellow-300");
    typeBarStats.classList.add("bg-yellow-300");
    typeBarEvolutions.classList.add("bg-yellow-300");
    typeBarCards.classList.add("bg-yellow-300");
  } else if (type1El.textContent === "psychic") {
    type1El.classList.add("bg-pink-400", "text-white");
    typeBarAbout.classList.add("bg-pink-400");
    typeBarStats.classList.add("bg-pink-400");
    typeBarEvolutions.classList.add("bg-pink-400");
    typeBarCards.classList.add("bg-pink-400");
  } else if (type1El.textContent === "ice") {
    type1El.classList.add("bg-cyan-200");
    typeBarAbout.classList.add("bg-cyan-200");
    typeBarStats.classList.add("bg-cyan-200");
    typeBarEvolutions.classList.add("bg-cyan-200");
    typeBarCards.classList.add("bg-cyan-200");
  } else if (type1El.textContent === "dragon") {
    type1El.classList.add("bg-indigo-600", "text-white");
    typeBarAbout.classList.add("bg-indigo-600");
    typeBarStats.classList.add("bg-indigo-600");
    typeBarEvolutions.classList.add("bg-indigo-600");
    typeBarCards.classList.add("bg-indigo-600");
  } else if (type1El.textContent === "dark") {
    type1El.classList.add("bg-slate-700", "text-white");
    typeBarAbout.classList.add("bg-slate-700");
    typeBarStats.classList.add("bg-slate-700");
    typeBarEvolutions.classList.add("bg-slate-700");
    typeBarCards.classList.add("bg-slate-700");
  } else if (type1El.textContent === "fairy") {
    type1El.classList.add("bg-pink-200");
    typeBarAbout.classList.add("bg-pink-200");
    typeBarStats.classList.add("bg-pink-200");
    typeBarEvolutions.classList.add("bg-pink-200");
    typeBarCards.classList.add("bg-pink-200");
  }

  // Hides the second type element if the pokemon only has one type
  if (type2El.textContent === "null") {
    type2El.classList.add("hidden");
  } else if (type2El.textContent === "normal") {
    type2El.classList.add("bg-stone-200");
  } else if (type2El.textContent === "fighting") {
    type2El.classList.add("bg-red-600", "text-white");
  } else if (type2El.textContent === "flying") {
    type2El.classList.add("bg-indigo-400", "text-white");
  } else if (type2El.textContent === "poison") {
    type2El.classList.add("bg-purple-400", "text-white");
  } else if (type2El.textContent === "ground") {
    type2El.classList.add("bg-amber-400");
  } else if (type2El.textContent === "rock") {
    type2El.classList.add("bg-yellow-700", "text-white");
  } else if (type2El.textContent === "bug") {
    type2El.classList.add("bg-lime-400");
  } else if (type2El.textContent === "ghost") {
    type2El.classList.add("bg-purple-700", "text-white");
  } else if (type2El.textContent === "steel") {
    type2El.classList.add("bg-zinc-500", "text-white");
  } else if (type2El.textContent === "fire") {
    type2El.classList.add("bg-orange-500", "text-white");
  } else if (type2El.textContent === "water") {
    type2El.classList.add("bg-blue-500", "text-white");
  } else if (type2El.textContent === "grass") {
    type2El.classList.add("bg-green-400");
  } else if (type2El.textContent === "electric") {
    type2El.classList.add("bg-yellow-300");
  } else if (type2El.textContent === "psychic") {
    type2El.classList.add("bg-pink-400", "text-white");
  } else if (type2El.textContent === "ice") {
    type2El.classList.add("bg-cyan-200");
  } else if (type2El.textContent === "dragon") {
    type2El.classList.add("bg-indigo-600", "text-white");
  } else if (type2El.textContent === "dark") {
    type2El.classList.add("bg-slate-700", "text-white");
  } else if (type2El.textContent === "fairy") {
    type2El.classList.add("bg-pink-200");
  }

  // Capitalizes the first letter of the type names
  type1El.innerText = type1.charAt(0).toUpperCase() + type1.slice(1);
  type2El.innerText = type2
    ? type2.charAt(0).toUpperCase() + type2.slice(1)
    : "";
}

function searchPokemon() {
  event.preventDefault();
  let promises = [];
  // let check = capitalize(searchBox.value)
  // if(check.includes(" ")){
  //   check.replace(/\s+/g, '-');
  // }
  // if (allPokemon.includes(check))
  if (searchBox.value.trim() === '') {
    pokemonBox.innerHTML = "";
    loadPokemon();
  } else {
    pokemonBox.innerHTML = "";
    console.log("Pokemon Found");
    viewPokemon = searchBox.value.toLocaleLowerCase();
    viewPokemon.replace(/\s+/g, "-");
    url = `https://pokeapi.co/api/v2/pokemon/${viewPokemon}`;
    console.log(url);
    promises.push(fetch(url).then((res) => res.json()));
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites.front_default,
        image2: result.sprites.other["official-artwork"].front_default,
        type: result.types.map((type) => type.type.name),
        id: result.id,
        HP: result.stats[0].base_stat,
        attack: result.stats[1].base_stat,
        defence: result.stats[2].base_stat,
        spAttack: result.stats[3].base_stat,
        spDefence: result.stats[4].base_stat,
        speed: result.stats[5].base_stat,
      }));
      displayPokemonPage(pokemon);
    });
  }
}

$("#pokemonName").autocomplete({
  source: function (request, response) {
    let matches = $.map(allPokemon, function (sort) {
      if (sort.toUpperCase().indexOf(request.term.toUpperCase()) === 0) {
        return sort;
      }
    });
    // Sets the max number of suggestions to 10 pokemon
    response(matches.slice(0, 10));
  },
});

function capitalize(string) {
  let lower = string.toLowerCase();
  return string.charAt(0).toUpperCase() + lower.slice(1);
}

// When the user scrolls down 30px from the top of the document, show the button on screen.
let topButtonEl = document.getElementById("topBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 30 ||
    document.documentElement.scrollTop > 30
  ) {
    topButtonEl.style.display = "block";
  } else {
    topButtonEl.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

