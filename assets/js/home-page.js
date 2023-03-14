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
const types = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy"
]
// https://www.dragonflycave.com/resources/pokemon-list-generator
let allPokemon = gen1.concat(gen2, gen3, gen4, gen5, gen6, gen7, gen8, gen9);
const searchBtn = document.getElementById("search");
const searchBox = document.getElementById("pokemonName"); // names with spaces need a '-' between them
const pokemonBox = document.getElementById("pokemonBox");
const topButtonEl = document.getElementById("topBtn");
searchBtn.addEventListener("click", searchPokemon);
// favoriteBtn.addEventListener("click", displayFavorites);
const checkBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
//const checkedBoxes = checkBoxes.map(checkbox => ({ [checkbox.id]: checkbox.checked }));
const checkedBoxes = checkBoxes.map(checkbox => (checkbox.checked));
let viewPokemon;
let totalNum = 1008;
let startNum = 1;
let endNum = 50;
let favorites = [];
console.log(checkedBoxes)
if(localStorage.getItem("favoritePokemon") !== null){
  favorites = JSON.parse(localStorage.favoritePokemon)
}

function fetchPokemon() {
  const promises = [];
  for (let i = startNum; i <= endNum; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
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
    displayPokemon(pokemon);
  });
}

fetchPokemon();

function displayPokemon(pokemon) {
  // console.log(pokemon)
  for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].name.includes(" ")) {
      pokemon[i].name = pokemon[i].name.replace(/\s+/g, "-");
    }
    let type1 = pokemon[i].type[0];
    let type2 = pokemon[i].type[1] ? pokemon[i].type[1] : null;
    let pokemonCard = document.createElement("div");
    pokemonCard.innerHTML = `
        <button onclick="location.href='pokemon-page.html?pokemon=${pokemon[i].name}&id=${pokemon[i].id}'" class= "pokemon-button bg-gray-100 rounded-lg p-3 w-full">
            <div class="flex justify-end">
            <i class="favorite favorite-${pokemon[i].name} fa-regular fa-star text-gray-300 hover:text-yellow-400"></i>
            </div>
            <div class="pokemon-gif mb-3 h-30">
                <img src="${pokemon[i].image}" alt="" class="mx-auto">
            </div>
            <div class="flex justify-between items-end h-30">
                <div class="flex-col text-left">
                    <p class="pokedex-num text-xs mt-1 text-gray-500">#${pokemon[
                      i
                    ].id
                      .toString()
                      .padStart(4, "0")}</p>
                    <h4 class="pokedex-name text-xs sm:text-sm">${capitalize(
                      pokemon[i].name
                    )}</h4>
                </div>
                <div class="flex-col text-right w-12">
                    <p class="pokemon-type2 text-2xs rounded px-1 mb-1 text-center">${type2}</p>
                    <p class="pokemon-type1 text-2xs rounded px-1 sm:mb-1 text-center">${type1}</p>
                </div>
            </div>
        </button>`;

    let type1El = pokemonCard.querySelector(".pokemon-type1");
    let type2El = pokemonCard.querySelector(".pokemon-type2");

    // Applies the type styles
    {if (type1El.textContent === "normal") {
      type1El.classList.add("bg-stone-200");
    } else if (type1El.textContent === "fighting") {
      type1El.classList.add("bg-red-600", "text-white");
    } else if (type1El.textContent === "flying") {
      type1El.classList.add("bg-indigo-400", "text-white");
    } else if (type1El.textContent === "poison") {
      type1El.classList.add("bg-purple-400", "text-white");
    } else if (type1El.textContent === "ground") {
      type1El.classList.add("bg-amber-400");
    } else if (type1El.textContent === "rock") {
      type1El.classList.add("bg-yellow-700", "text-white");
    } else if (type1El.textContent === "bug") {
      type1El.classList.add("bg-lime-400");
    } else if (type1El.textContent === "ghost") {
      type1El.classList.add("bg-purple-700", "text-white");
    } else if (type1El.textContent === "steel") {
      type1El.classList.add("bg-zinc-500", "text-white");
    } else if (type1El.textContent === "fire") {
      type1El.classList.add("bg-orange-500", "text-white");
    } else if (type1El.textContent === "water") {
      type1El.classList.add("bg-blue-500", "text-white");
    } else if (type1El.textContent === "grass") {
      type1El.classList.add("bg-green-400");
    } else if (type1El.textContent === "electric") {
      type1El.classList.add("bg-yellow-300");
    } else if (type1El.textContent === "psychic") {
      type1El.classList.add("bg-pink-400", "text-white");
    } else if (type1El.textContent === "ice") {
      type1El.classList.add("bg-cyan-200");
    } else if (type1El.textContent === "dragon") {
      type1El.classList.add("bg-indigo-600", "text-white");
    } else if (type1El.textContent === "dark") {
      type1El.classList.add("bg-slate-700", "text-white");
    } else if (type1El.textContent === "fairy") {
      type1El.classList.add("bg-pink-200");
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
  }
    // Capitalizes the first letter of the type names
    type1El.innerText = type1.charAt(0).toUpperCase() + type1.slice(1);
    type2El.innerText = type2
      ? type2.charAt(0).toUpperCase() + type2.slice(1)
      : "";

      //probably best if we run the filter function here, if pokemon passes, append card, if not, don't. filter(type1, type2, global-gen)
      console.log("filter results: "+filter(pokemon[i].name, type1, type2))
      if(filter(pokemon[i].name, type1, type2)){
        pokemonBox.append(pokemonCard);
      }
  }
};

function filter(name, type1, type2) {
  console.log("filter("+ name +" "+ type1 + " " + type2 + ")")
  
  let typeFilterCheck = false;
  for(let i = 0; i < 17; i++){ // checks if we are sorting by type or not
    if(checkedBoxes[i]){
      typeFilterCheck = true;
    }
  }

  let genFilterCheck = false;
  for(let i = 18; i < checkedBoxes.length; i++){ // checks if we are sorting by gen or not
    if(checkedBoxes[i]){
      genFilterCheck = true;
    }
  }

  if(checkedBoxes.every(element => element === false)){ // defaults returns true if no filter is applied
    return true;
  }

  if(genFilterCheck){
    if(isNotInGen(name)){
      // console.log(name + " is not in the selected gen(s)")
      return false;
    }
  }

  if(typeFilterCheck){
    if(isNotInType(type1, type2, name)){ // name is just for console logging testing, remove when finished
      return false;
    }
  }

  return true;
}

function isNotInGen(name){
  let genGap = []; // creates an array of all pokemon whos gen filter was checked 
  if(checkedBoxes[18]){
    // console.log("Gen1 on filter")
    genGap = genGap.concat(gen1);
  }
  if(checkedBoxes[19]){
    // console.log("Gen2 on filter")
    genGap = genGap.concat(gen2);
  }
  if(checkedBoxes[20]){
    // console.log("Gen3 on filter")
    genGap = genGap.concat(gen3);
  }
  if(checkedBoxes[21]){
    // console.log("Gen4 on filter")
    genGap = genGap.concat(gen4);
  }
  if(checkedBoxes[22]){
    // console.log("Gen5 on filter")
    genGap = genGap.concat(gen5);
  }
  if(checkedBoxes[23]){
    // console.log("Gen6 on filter")
    genGap = genGap.concat(gen6);
  }
  if(checkedBoxes[24]){
    // console.log("Gen7 on filter")
    genGap = genGap.concat(gen7);
  }
  if(checkedBoxes[25]){
    // console.log("Gen8 on filter")
    genGap = genGap.concat(gen8);
  }
  if(checkedBoxes[26]){
    // console.log("Gen9 on filter")
    genGap = genGap.concat(gen9);
  }
  
  if(genGap.includes(capitalize(name))){ // this function returns false if the pokemon is found
    console.log(name + " is in gen filter")
    return false;
  }
  else{
    console.log(name + " is not in gen filter")
    return true;
  }
}

function isNotInType(type1, type2, name){ // remove name when finished
  let type;
  for(let i = 0; i < 17; i++){
    type = types[i]
    if(checkedBoxes[i]){
      if(type2 != null){
        if(type1 == types[i] || type2 == types[i]){
          console.log(name + " is " + types[i] + " type: " + type1 +" "+ type2)
          return false;
        }
      }
      else{
        if(type1 == types[i]){
          console.log(name + " is " + types[i] + " type: " + type1)
          return false;
        }
      }
    }
  }
  console.log(name + " is not " + type)
  return true;
}

function searchPokemon() { // 1242 - 1252 in github home-page js looks odd
  event.preventDefault();
  let promises = [];
  // let check = capitalize(searchBox.value)
  // if(check.includes(" ")){
  //   check.replace(/\s+/g, '-');
  // }
  // if (allPokemon.includes(check))
  if (searchBox.value.trim() === '') {
    pokemonBox.innerHTML = "";
    fetchPokemon();
  } else {
    pokemonBox.innerHTML = "";
    console.log("Pokemon Found");
    viewPokemon = searchBox.value.toLocaleLowerCase();
    // viewPokemon.replace(/\s+/g, "-");
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
      displayPokemon(pokemon);
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

// Load more button by 15 or remaining number of pokemon & triggers the loadMore on scroll & hides the load more button
const loadMoreBtn = document.getElementById("load-more");
let isLoadingMore = false;
let hasLoadMoreClicked = false;
loadMoreBtn.addEventListener("click", () => {
  hasLoadMoreClicked = true;
  loadMore();
  loadMoreBtn.classList.add("hidden");
});

window.addEventListener("scroll", () => {
  let y = window.scrollY;
  if (hasLoadMoreClicked && !isLoadingMore && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    if(y != window.scrollY){
      isLoadingMore = true;
    }
    loadMore();
  }
});

function loadMore() {
  const remaining = totalNum - endNum;
  startNum += 50;
  endNum += remaining > 50 ? 50 : remaining;
  fetchPokemon();
  isLoadingMore = false;
}

// When the user scrolls down 30px from the top of the document, show the button on screen.

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