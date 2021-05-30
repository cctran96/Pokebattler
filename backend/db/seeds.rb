Trainer.destroy_all
Team.destroy_all
Pokemon.destroy_all

chau = Trainer.create(name: "Pokemon Master Chau", username: "chautran", password: "password", wins: 999, losses: 0, bio: "I say you too when the waiter tells me to enjoy my food.")
jasper = Trainer.create(name: "Pokemon Master Jasper", username: "jasperreed", password: "password", wins: 999, losses: 0, bio: "Cupid shuffle!")

Team.create(name: "Chau's Team", trainer: chau, team: "magikarp, magikarp, magikarp, magikarp, magikarp, magikarp")
Team.create(name: "Jasper's Team", trainer: jasper, team: "pikachu, moltres, mewtwo, dragonite, zapdos, articuno")

Pokemon.create(name: "bulbasaur", types: "grass, poison", hp: 231, atk: 134, def: 134, sp_a: 166, sp_d: 166, spd: 126, moves: "leaf-storm, sludge-bomb, energy-ball, body-slam")
Pokemon.create(name: "ivysaur", types: "grass, poison", hp: 261, atk: 160, def: 162, sp_a: 196, sp_d: 196, spd: 156, moves: "leaf-storm, sludge-bomb, energy-ball, body-slam")
Pokemon.create(name: "venusaur", types: "grass, poison", hp: 301, atk: 200, def: 202, sp_a: 236, sp_d: 236, spd: 196, moves: "leaf-storm, sludge-bomb, energy-ball, earthquake")
Pokemon.create(name: "charmander", types: "fire", hp: 219, atk: 140, def: 122, sp_a: 156, sp_d: 136, spd: 166, moves: "fire-blast, shadow-claw, overheat, dragon-pulse")
Pokemon.create(name: "charmeleon", types: "fire", hp: 257, atk: 164, def: 152, sp_a: 196, sp_d: 166, spd: 196, moves: "fire-blast, shadow-claw, overheat, dragon-pulse")
Pokemon.create(name: "charizard", types: "fire", hp: 297, atk: 204, def: 192, sp_a: 254, sp_d: 206, spd: 236, moves: "scorching-sands, fire-blast, overheat, dragon-pulse")
Pokemon.create(name: "squirtle", types: "water", hp: 229, atk: 132, def: 166, sp_a: 136, sp_d: 164, spd: 122, moves: "hydro-pump, scald, dragon-pulse, aura-sphere")
Pokemon.create(name: "wartortle", types: "water", hp: 259, atk: 162, def: 196, sp_a: 166, sp_d: 196, spd: 152, moves: "hydro-pump, scald, dragon-pulse, aura-sphere")
Pokemon.create(name: "blastoise", types: "water", hp: 299, atk: 202, def: 236, sp_a: 206, sp_d: 246, spd: 192, moves: "hydro-pump, scald, dragon-pulse, aura-sphere")
Pokemon.create(name: "caterpie", types: "bug", hp: 231, atk: 96, def: 106, sp_a: 76, sp_d: 76, spd: 126, moves: "bug-bite, electroweb, tackle")
Pokemon.create(name: "metapod", types: "bug", hp: 241, atk: 76, def: 146, sp_a: 86, sp_d: 86, spd: 96, moves: "electroweb, harden")
Pokemon.create(name: "butterfree", types: "bug, flying", hp: 261, atk: 126, def: 136, sp_a: 216, sp_d: 296, spd: 176, moves: "pollen-puff, energy-ball, hurricane, shadow-ball")
Pokemon.create(name: "weedle", types: "bug, poison", hp: 221, atk: 106, def: 96, sp_a: 76, sp_d: 76, spd: 136, moves: "poison-sting")
Pokemon.create(name: "kakuna", types: "bug, poison", hp: 231, atk: 86, def: 136, sp_a: 86, sp_d: 86, spd: 106, moves: "harden")
Pokemon.create(name: "beedrill", types: "bug, poison", hp: 271, atk: 216, def: 116, sp_a: 126, sp_d: 196, spd: 186, moves: "drill-run, poison-jab, x-scissor, brick-break")
Pokemon.create(name: "pidgey", types: "normal, flying", hp: 221, atk: 126, def: 116, sp_a: 106, sp_d: 106, spd: 148, moves: "facade, u-turn, wing-attack, razor-wind")
Pokemon.create(name: "pidgeotto", types: "normal, flying", hp: 267, atk: 156, def: 146, sp_a: 136, sp_d: 136, spd: 178, moves: "facade, u-turn, wing-attack, razor-wind")
Pokemon.create(name: "pidgeot", types: "normal, flying", hp: 307, atk: 196, def: 186, sp_a: 176, sp_d: 176, spd: 238, moves: "facade, u-turn, wing-attack, sky-attack")
Pokemon.create(name: "rattata", types: "normal", hp: 201, atk: 148, def: 106, sp_a: 86, sp_d: 106, spd: 180, moves: "iron-tail, thunderbolt, shadow-ball, ice-beam")
Pokemon.create(name: "raticate", types: "normal", hp: 251, atk: 198, def: 156, sp_a: 136, sp_d: 176, spd: 230, moves: "hyper-fang, thunderbolt, shadow-ball, blizzard")
Pokemon.create(name: "spearow", types: "normal, flying", hp: 221, atk: 156, def: 96, sp_a: 98, sp_d: 98, spd: 176, moves: "drill-run, facade, u-turn, drill-peck")
Pokemon.create(name: "fearow", types: "normal, flying", hp: 271, atk: 216, def: 166, sp_a: 158, sp_d: 158, spd: 236, moves: "drill-run, facade, u-turn, drill-peck")
Pokemon.create(name: "ekans", types: "poison", hp: 211, atk: 156, def: 124, sp_a: 116, sp_d: 144, spd: 146, moves: "poison-jab, earthquake, iron-tail, facade")
Pokemon.create(name: "arbok", types: "poison", hp: 261, atk: 226, def: 174, sp_a: 166, sp_d: 194, spd: 196, moves: "poison-jab, earthquake, iron-tail, dragon-tail")
Pokemon.create(name: "pikachu", types: "electric", hp: 211, atk: 146, def: 116, sp_a: 136, sp_d: 136, spd: 216, moves: "play-rough, wild-charge, surf, brick-break")
Pokemon.create(name: "raichu", types: "electric", hp: 261, atk: 216, def: 146, sp_a: 216, sp_d: 196, spd: 256, moves: "play-rough, wild-charge, surf, brick-break")
Pokemon.create(name: "sandshrew", types: "ground", hp: 241, atk: 186, def: 206, sp_a: 76, sp_d: 96, spd: 116, moves: "shadow-claw, throat-chop, stomping-tantrum, poison-jab")
Pokemon.create(name: "sandslash", types: "ground", hp: 291, atk: 236, def: 256, sp_a: 126, sp_d: 146, spd: 166, moves: "shadow-claw, throat-chop, stomping-tantrum, poison-jab")
Pokemon.create(name: "nidoran-♀", types: "poison", hp: 251, atk: 130, def: 140, sp_a: 116, sp_d: 116, spd: 118, moves: "shadow-claw, facade, crunch, poison-jab")
Pokemon.create(name: "nidorina", types: "poison", hp: 281, atk: 160, def: 170, sp_a: 146, sp_d: 146, spd: 148, moves: "shadow-claw, facade, crunch, poison-jab")
Pokemon.create(name: "nidoqueen", types: "poison", hp: 321, atk: 220, def: 210, sp_a: 186, sp_d: 206, spd: 188, moves: "fire-punch, ice-punch, throat-chop, poison-jab")
Pokemon.create(name: "nidoran-♂", types: "poison", hp: 233, atk: 150, def: 116, sp_a: 116, sp_d: 116, spd: 136, moves: "shadow-claw, facade, drill-run, poison-jab")
Pokemon.create(name: "nidorino", types: "poison", hp: 263, atk: 180, def: 150, sp_a: 146, sp_d: 146, spd: 166, moves: "shadow-claw, facade, drill-run, poison-jab")
Pokemon.create(name: "nidoking", types: "poison", hp: 303, atk: 240, def: 190, sp_a: 206, sp_d: 186, spd: 206, moves: "fire-punch, ice-punch, megahorn, poison-jab")
Pokemon.create(name: "clefairy", types: "fairy", hp: 281, atk: 126, def: 132, sp_a: 156, sp_d: 166, spd: 106, moves: "misty-explosion, meteor-beam, mystical-fire, psychic")
Pokemon.create(name: "clefable", types: "fairy", hp: 331, atk: 176, def: 182, sp_a: 226, sp_d: 216, spd: 156, moves: "misty-explosion, meteor-beam, mystical-fire, psychic")
Pokemon.create(name: "vulpix", types: "fire", hp: 217, atk: 118, def: 116, sp_a: 136, sp_d: 166, spd: 166, moves: "dark-pulse, hex, overheat, energy-ball")
Pokemon.create(name: "ninetales", types: "fire", hp: 287, atk: 188, def: 186, sp_a: 198, sp_d: 236, spd: 236, moves: "dark-pulse, hex, overheat, energy-ball")
Pokemon.create(name: "jigglypuff", types: "normal, fairy", hp: 371, atk: 126, def: 76, sp_a: 126, sp_d: 86, spd: 76, moves: "dazzling-gleam, fire-blast, thunderbolt, ice-beam")
Pokemon.create(name: "wigglytuff", types: "normal, fairy", hp: 421, atk: 176, def: 126, sp_a: 206, sp_d: 136, spd: 126, moves: "dazzling-gleam, fire-blast, thunderbolt, ice-beam")
Pokemon.create(name: "zubat", types: "poison, flying", hp: 221, atk: 126, def: 106, sp_a: 96, sp_d: 116, spd: 146, moves: "zen-headbutt, u-turn, crunch, acrobatics")
Pokemon.create(name: "golbat", types: "poison, flying", hp: 291, atk: 196, def: 176, sp_a: 166, sp_d: 186, spd: 216, moves: "zen-headbutt, u-turn, crunch, acrobatics")
Pokemon.create(name: "oddish", types: "grass, poison", hp: 231, atk: 136, def: 146, sp_a: 186, sp_d: 166, spd: 96, moves: "dazzling-gleam, energy-ball, petal-dance, sludge-bomb")
Pokemon.create(name: "gloom", types: "grass, poison", hp: 261, atk: 166, def: 176, sp_a: 206, sp_d: 186, spd: 116, moves: "dazzling-gleam, energy-ball, petal-dance, sludge-bomb")
Pokemon.create(name: "vileplume", types: "grass, poison", hp: 291, atk: 196, def: 206, sp_a: 256, sp_d: 216, spd: 136, moves: "dazzling-gleam, energy-ball, petal-dance, sludge-bomb")
Pokemon.create(name: "paras", types: "bug, grass", hp: 211, atk: 176, def: 146, sp_a: 126, sp_d: 146, spd: 86, moves: "x-scissor, brick-break, facade, sludge-bomb")
Pokemon.create(name: "parasect", types: "bug, grass", hp: 261, atk: 226, def: 196, sp_a: 156, sp_d: 196, spd: 96, moves: "x-scissor, brick-break, facade, sludge-bomb")
Pokemon.create(name: "venonat", types: "bug, poison", hp: 261, atk: 146, def: 136, sp_a: 116, sp_d: 146, spd: 126, moves: "zen-headbutt, facade, psychic, sludge-bomb")
Pokemon.create(name: "venomoth", types: "bug, poison", hp: 281, atk: 166, def: 156, sp_a: 216, sp_d: 186, spd: 216, moves: "gust, bug-buzz, psychic, sludge-bomb")
Pokemon.create(name: "diglett", types: "ground", hp: 161, atk: 146, def: 86, sp_a: 106, sp_d: 126, spd: 226, moves: "earthquake, shadow-claw, slash, rock-slide")
Pokemon.create(name: "dugtrio", types: "ground", hp: 211, atk: 236, def: 136, sp_a: 136, sp_d: 176, spd: 276, moves: "earthquake, shadow-claw, slash, rock-slide")
Pokemon.create(name: "meowth", types: "normal", hp: 221, atk: 126, def: 106, sp_a: 116, sp_d: 116, spd: 216, moves: "shadow-claw, seed-bomb, play-rough, foul-play")
Pokemon.create(name: "persian", types: "normal", hp: 271, atk: 176, def: 156, sp_a: 166, sp_d: 166, spd: 266, moves: "shadow-claw, seed-bomb, play-rough, foul-play")
Pokemon.create(name: "psyduck", types: "water", hp: 241, atk: 140, def: 132, sp_a: 166, sp_d: 136, spd: 146, moves: "scald, future-sight, hydro-pump, ice-beam")
Pokemon.create(name: "golduck", types: "water", hp: 301, atk: 200, def: 192, sp_a: 226, sp_d: 196, spd: 206, moves: "scald, future-sight, hydro-pump, ice-beam")
Pokemon.create(name: "mankey", types: "fight", hp: 221, atk: 196, def: 106, sp_a: 106, sp_d: 126, spd: 176, moves: "earthquake, ice-punch, fire-punch, thunder-punch")
Pokemon.create(name: "primeape", types: "fight", hp: 271, atk: 246, def: 156, sp_a: 156, sp_d: 176, spd: 226, moves: "earthquake, ice-punch, fire-punch, thunder-punch")
Pokemon.create(name: "growlithe", types: "fire", hp: 251, atk: 176, def: 126, sp_a: 176, sp_d: 136, spd: 156, moves: "close-combat, wild-charge, play-rough, psychic-fangs")
Pokemon.create(name: "arcanine", types: "fire", hp: 321, atk: 256, def: 196, sp_a: 236, sp_d: 196, spd: 226, moves: "close-combat, wild-charge, play-rough, psychic-fangs")
Pokemon.create(name: "poliwag", types: "water", hp: 221, atk: 136, def: 116, sp_a: 116, sp_d: 116, spd: 216, moves: "waterfall, bulldoze, facade, body-slam")
Pokemon.create(name: "poliwhirl", types: "water", hp: 271, atk: 166, def: 166, sp_a: 136, sp_d: 136, spd: 216, moves: "waterfall, brick-break, earthquake, body-slam")
Pokemon.create(name: "poliwrath", types: "water, fight", hp: 321, atk: 226, def: 226, sp_a: 176, sp_d: 216, spd: 176, moves: "waterfall, brick-break, earthquake, poison-jab")
Pokemon.create(name: "abra", types: "psychic", hp: 191, atk: 76, def: 66, sp_a: 246, sp_d: 146, spd: 216, moves: "psyshock, shadow-ball, energy-ball, dazzling-gleam")
Pokemon.create(name: "kadabra", types: "psychic", hp: 221, atk: 106, def: 96, sp_a: 276, sp_d: 176, spd: 246, moves: "psyshock, shadow-ball, energy-ball, dazzling-gleam")
Pokemon.create(name: "alakazam", types: "psychic", hp: 251, atk: 136, def: 126, sp_a: 306, sp_d: 226, spd: 276, moves: "psyshock, shadow-ball, focus-blast, dazzling-gleam")
Pokemon.create(name: "machop", types: "fight", hp: 281, atk: 196, def: 136, sp_a: 106, sp_d: 106, spd: 106, moves: "fire-punch, thunder-punch, ice-punch, brick-break")
Pokemon.create(name: "machoke", types: "fight", hp: 301, atk: 236, def: 176, sp_a: 136, sp_d: 156, spd: 126, moves: "fire-punch, thunder-punch, ice-punch, brick-break")
Pokemon.create(name: "machamp", types: "fight", hp: 321, atk: 296, def: 196, sp_a: 166, sp_d: 206, spd: 146, moves: "fire-punch, thunder-punch, ice-punch, brick-break")
Pokemon.create(name: "bellsprout", types: "grass, poison", hp: 241, atk: 186, def: 106, sp_a: 176, sp_d: 96, spd: 116, moves: "razor-leaf, sludge-bomb, facade, poison-jab")
Pokemon.create(name: "weepinbell", types: "grass, poison", hp: 271, atk: 216, def: 136, sp_a: 206, sp_d: 126, spd: 146, moves: "razor-leaf, sludge-bomb, facade, poison-jab")
Pokemon.create(name: "victreebel", types: "grass, poison", hp: 301, atk: 246, def: 166, sp_a: 236, sp_d: 176, spd: 176, moves: "power-whip, sludge-bomb, facade, poison-jab")
Pokemon.create(name: "tentacool", types: "water, poison", hp: 221, atk: 116, def: 106, sp_a: 136, sp_d: 236, spd: 176, moves: "ice-beam, dazzling-gleam, scald, sludge-wave")
Pokemon.create(name: "tentacruel", types: "water, poison", hp: 301, atk: 176, def: 166, sp_a: 196, sp_d: 276, spd: 236, moves: "ice-beam, dazzling-gleam, scald, sludge-wave")
Pokemon.create(name: "geodude", types: "rock, ground", hp: 221, atk: 196, def: 236, sp_a: 96, sp_d: 96, spd: 76, moves: "rock-slide, thunder-punch, earthquake, superpower")
Pokemon.create(name: "graveler", types: "rock, ground", hp: 251, atk: 226, def: 266, sp_a: 126, sp_d: 126, spd: 106, moves: "rock-slide, thunder-punch, earthquake, superpower")
Pokemon.create(name: "golem", types: "rock, ground", hp: 301, atk: 276, def: 296, sp_a: 146, sp_d: 166, spd: 126, moves: "rock-slide, thunder-punch, earthquake, superpower")
Pokemon.create(name: "ponyta", types: "fire", hp: 241, atk: 206, def: 146, sp_a: 166, sp_d: 166, spd: 216, moves: "flame-wheel, bounce, play-rough, wild-charge")
Pokemon.create(name: "rapidash", types: "fire", hp: 271, atk: 236, def: 176, sp_a: 196, sp_d: 196, spd: 246, moves: "flame-wheel, bounce, play-rough, wild-charge")
Pokemon.create(name: "slowpoke", types: "water, psychic", hp: 321, atk: 166, def: 166, sp_a: 116, sp_d: 116, spd: 66, moves: "earthquake, zen-headbutt, iron-tail, liquidation")
Pokemon.create(name: "slowbro", types: "water, psychic", hp: 331, atk: 186, def: 256, sp_a: 236, sp_d: 196, spd: 96, moves: "hydro-pump, ice-beam, flame-thrower, shadow-ball")
Pokemon.create(name: "magnemite", types: "electric, steel", hp: 191, atk: 106, def: 176, sp_a: 226, sp_d: 146, spd: 126, moves: "rising-voltage, flash-cannon, discharge, zap-cannon")
Pokemon.create(name: "magneton", types: "electric, steel", hp: 241, atk: 156, def: 226, sp_a: 276, sp_d: 176, spd: 176, moves: "rising-voltage, flash-cannon, thunderbolt, zap-cannon")
Pokemon.create(name: "farfetch'd", types: "normal, flying", hp: 245, atk: 216, def: 146, sp_a: 152, sp_d: 160, spd: 156, moves: "first-impression, night-slash, steel-wing, acrobatics")
Pokemon.create(name: "doduo", types: "normal, flying", hp: 211, atk: 206, def: 126, sp_a: 106, sp_d: 106, spd: 186, moves: "feint-attack, drill-peck, jump-kick, facade")
Pokemon.create(name: "dodrio", types: "normal, flying", hp: 261, atk: 256, def: 176, sp_a: 156, sp_d: 156, spd: 256, moves: "assurance, drill-peck, jump-kick, facade")
Pokemon.create(name: "seel", types: "water", hp: 271, atk: 126, def: 146, sp_a: 126, sp_d: 176, spd: 126, moves: "megahorn, ice-beam, blizzard, surf")
Pokemon.create(name: "dewgong", types: "water, ice", hp: 321, atk: 176, def: 196, sp_a: 176, sp_d: 226, spd: 176, moves: "megahorn, ice-beam, blizzard, surf")
Pokemon.create(name: "grimer", types: "poison", hp: 301, atk: 196, def: 136, sp_a: 116, sp_d: 136, spd: 86, moves: "poison-jab, thunder-punch, fire-punch, ice-punch")
Pokemon.create(name: "muk", types: "poison", hp: 351, atk: 246, def: 186, sp_a: 166, sp_d: 236, spd: 136, moves: "poison-jab, thunder-punch, fire-punch, ice-punch")
Pokemon.create(name: "shellder", types: "water", hp: 201, atk: 166, def: 236, sp_a: 126, sp_d: 86, spd: 116, moves: "razor-shell, avalanche, facade, payback")
Pokemon.create(name: "cloyster", types: "water", hp: 241, atk: 226, def: 396, sp_a: 206, sp_d: 126, spd: 176, moves: "liquidation, avalanche, poison-jab, payback")
Pokemon.create(name: "gastly", types: "ghost, poison", hp: 201, atk: 106, def: 96, sp_a: 236, sp_d: 106, spd: 196, moves: "dazzling-gleam, sludge-wave, energy-ball, dark-pulse")
Pokemon.create(name: "haunter", types: "ghost, poison", hp: 231, atk: 136, def: 126, sp_a: 266, sp_d: 146, spd: 226, moves: "dazzling-gleam, sludge-wave, shadow-ball, dark-pulse")
Pokemon.create(name: "gengar", types: "ghost, poison", hp: 261, atk: 166, def: 156, sp_a: 296, sp_d: 186, spd: 256, moves: "dazzling-gleam, sludge-wave, shadow-ball, dark-pulse")
Pokemon.create(name: "onix", types: "rock, ground", hp: 211, atk: 126, def: 356, sp_a: 96, sp_d: 126, spd: 176, moves: "stone-edge, high-horsepower, breaking-swipe, body-press")
Pokemon.create(name: "drowzee", types: "psychic", hp: 261, atk: 132, def: 126, sp_a: 122, sp_d: 216, spd: 120, moves: "shadow-ball, brick-break, fire-punch, psychic")
Pokemon.create(name: "hypno", types: "psychic", hp: 311, atk: 182, def: 176, sp_a: 182, sp_d: 266, spd: 170, moves: "shadow-ball, brick-break, fire-punch, psychic")
Pokemon.create(name: "krabby", types: "water", hp: 201, atk: 246, def: 216, sp_a: 86, sp_d: 86, spd: 136, moves: "liquidation, x-scissor, brick-break, rock-slide")
Pokemon.create(name: "kingler", types: "water", hp: 251, atk: 296, def: 266, sp_a: 136, sp_d: 136, spd: 186, moves: "liquidation, x-scissor, brick-break, rock-slide")
Pokemon.create(name: "voltorb", types: "electric", hp: 221, atk: 96, def: 136, sp_a: 146, sp_d: 146, spd: 236, moves: "thunder, thunderbolt, discharge, round")
Pokemon.create(name: "electrode", types: "electric", hp: 261, atk: 136, def: 176, sp_a: 196, sp_d: 196, spd: 336, moves: "thunder, thunderbolt, discharge, round")
Pokemon.create(name: "exeggcute", types: "grass, psychic", hp: 261, atk: 116, def: 196, sp_a: 156, sp_d: 126, spd: 116, moves: "leaf-storm, psychic, energy-ball, round")
Pokemon.create(name: "exeggutor", types: "grass, psychic", hp: 331, atk: 226, def: 206, sp_a: 286, sp_d: 186, spd: 146, moves: "leaf-storm, psychic, energy-ball, round")
Pokemon.create(name: "cubone", types: "ground", hp: 241, atk: 136, def: 226, sp_a: 116, sp_d: 136, spd: 106, moves: "earthquake, blizzard, thunder-punch, fire-punch")
Pokemon.create(name: "marowak", types: "ground", hp: 261, atk: 196, def: 256, sp_a: 136, sp_d: 196, spd: 126, moves: "earthquake, blizzard, thunder-punch, fire-punch")
Pokemon.create(name: "hitmonlee", types: "fight", hp: 241, atk: 276, def: 142, sp_a: 106, sp_d: 256, spd: 210, moves: "blaze-kick, brick-break, bounce, earthquake")
Pokemon.create(name: "hitmonchan", types: "fight", hp: 241, atk: 246, def: 194, sp_a: 106, sp_d: 256, spd: 188, moves: "brick-break, ice-punch, fire-punch, thunder-punch")
Pokemon.create(name: "lickitung", types: "normal", hp: 321, atk: 146, def: 186, sp_a: 156, sp_d: 186, spd: 96, moves: "earthquake, power-whip, body-press, blizzard")
Pokemon.create(name: "koffing", types: "poison", hp: 221, atk: 166, def: 226, sp_a: 156, sp_d: 126, spd: 106, moves: "sludge-wave, shadow-ball, fire-blast, thunder")
Pokemon.create(name: "weezing", types: "poison", hp: 271, atk: 216, def: 276, sp_a: 206, sp_d: 176, spd: 156, moves: "sludge-wave, shadow-ball, fire-blast, thunder")
Pokemon.create(name: "rhyhorn", types: "ground, rock", hp: 301, atk: 206, def: 226, sp_a: 96, sp_d: 96, spd: 86, moves: "earthquake, stone-edge, megahorn, dragon-rush")
Pokemon.create(name: "rhydon", types: "ground, rock", hp: 351, atk: 296, def: 276, sp_a: 126, sp_d: 126, spd: 116, moves: "earthquake, stone-edge, megahorn, dragon-rush")
Pokemon.create(name: "chansey", types: "normal", hp: 641, atk: 46, def: 46, sp_a: 106, sp_d: 246, spd: 136, moves: "fire-blast, ice-beam, thunder, dazzling-gleam")
Pokemon.create(name: "tangela", types: "grass", hp: 271, atk: 146, def: 266, sp_a: 236, sp_d: 116, spd: 156, moves: "leaf-storm, sludge-bomb, round, energy-ball")
Pokemon.create(name: "kangaskhan", types: "normal", hp: 351, atk: 226, def: 196, sp_a: 116, sp_d: 196, spd: 216, moves: "crunch, earthquake, brick-break, thunder-punch")
Pokemon.create(name: "horsea", types: "water", hp: 201, atk: 116, def: 176, sp_a: 176, sp_d: 86, spd: 156, moves: "scald, dragon-pulse, flash-cannon, hydro-pump")
Pokemon.create(name: "seadra", types: "water", hp: 251, atk: 166, def: 226, sp_a: 226, sp_d: 126, spd: 206, moves: "scald, dragon-pulse, flash-cannon, hydro-pump")
Pokemon.create(name: "goldeen", types: "water", hp: 231, atk: 170, def: 156, sp_a: 106, sp_d: 136, spd: 162, moves: "megahorn, waterfall, bounce, poison-jab")
Pokemon.create(name: "seaking", types: "water", hp: 301, atk: 220, def: 166, sp_a: 166, sp_d: 196, spd: 172, moves: "megahorn, waterfall, throat-chop, poison-jab")
Pokemon.create(name: "staryu", types: "water", hp: 201, atk: 126, def: 146, sp_a: 176, sp_d: 146, spd: 206, moves: "hydro-pump, thunder, ice-beam, psychic")
Pokemon.create(name: "starmie", types: "water, psychic", hp: 261, atk: 186, def: 206, sp_a: 236, sp_d: 206, spd: 266, moves: "hydro-pump, thunder, ice-beam, psychic")
Pokemon.create(name: "mr. mime", types: "psychic, fairy", hp: 221, atk: 126, def: 166, sp_a: 236, sp_d: 276, spd: 216, moves: "mystical-fire, dazzling-gleam, focus-blast, energy-ball")
Pokemon.create(name: "scyther", types: "bug, flying", hp: 281, atk: 256, def: 196, sp_a: 146, sp_d: 196, spd: 246, moves: "x-scissor, brick-break, night-slash, cross-poison")
Pokemon.create(name: "jynx", types: "ice, psychic", hp: 271, atk: 136, def: 106, sp_a: 266, sp_d: 226, spd: 226, moves: "blizzard, psychic, shadow-ball, energy-ball")
Pokemon.create(name: "electabuzz", types: "electric", hp: 271, atk: 202, def: 150, sp_a: 226, sp_d: 206, spd: 246, moves: "thunderbolt, psychic, focus-blast, ice-punch")
Pokemon.create(name: "magmar", types: "fire", hp: 271, atk: 226, def: 150, sp_a: 236, sp_d: 206, spd: 222, moves: "fire-blast, thunder-punch, flamethrower, brick-break")
Pokemon.create(name: "pinsir", types: "bug", hp: 271, atk: 286, def: 236, sp_a: 146, sp_d: 176, spd: 206, moves: "x-scissor, stone-edge, brick-break, earthquake")
Pokemon.create(name: "tauros", types: "normal", hp: 291, atk: 236, def: 226, sp_a: 116, sp_d: 176, spd: 256, moves: "earthquake, throat-chop, wild-charge, megahorn")
Pokemon.create(name: "magikarp", types: "water", hp: 181, atk: 56, def: 146, sp_a: 66, sp_d: 76, spd: 196, moves: "splash")
Pokemon.create(name: "gyarados", types: "water, flying", hp: 331, atk: 286, def: 194, sp_a: 156, sp_d: 236, spd: 198, moves: "waterfall, power-whip, stone-edge, ice-fang")
Pokemon.create(name: "lapras", types: "water, ice", hp: 401, atk: 206, def: 196, sp_a: 206, sp_d: 226, spd: 156, moves: "dragon-pulse, liquidating, ice-beam, hydro-pump")
Pokemon.create(name: "ditto", types: "normal", hp: 237, atk: 132, def: 132, sp_a: 132, sp_d: 132, spd: 132, moves: "transform")
Pokemon.create(name: "eevee", types: "normal", hp: 251, atk: 146, def: 136, sp_a: 126, sp_d: 166, spd: 146, moves: "shadow-ball, facade, bite, round")
Pokemon.create(name: "vaporeon", types: "water", hp: 401, atk: 166, def: 156, sp_a: 256, sp_d: 226, spd: 166, moves: "hydro-pump, ice-beam, scald, shadow-ball")
Pokemon.create(name: "jolteon", types: "electric", hp: 271, atk: 166, def: 156, sp_a: 256, sp_d: 226, spd: 296, moves: "shadow-ball, thunderbolt, thunder, discharge")
Pokemon.create(name: "flareon", types: "fire", hp: 271, atk: 296, def: 156, sp_a: 226, sp_d: 256, spd: 166, moves: "iron-tail, fire-fang, shadow-ball, heat-wave")
Pokemon.create(name: "porygon", types: "normal", hp: 271, atk: 156, def: 176, sp_a: 206, sp_d: 186, spd: 116, moves: "psychic, thunder, ice-beam, shadow-ball")
Pokemon.create(name: "omanyte", types: "rock, water", hp: 211, atk: 116, def: 236, sp_a: 216, sp_d: 146, spd: 106, moves: "hydro-pump, ice-beam, earth-power, surf")
Pokemon.create(name: "omastar", types: "rock, water", hp: 281, atk: 156, def: 286, sp_a: 266, sp_d: 176, spd: 146, moves: "hydro-pump, ice-beam, earth-power, surf")
Pokemon.create(name: "kabuto", types: "rock, water", hp: 201, atk: 196, def: 216, sp_a: 146, sp_d: 126, spd: 146, moves: "liquidation, blizzard, stone-edge, facade")
Pokemon.create(name: "kabutops", types: "rock, water", hp: 261, atk: 266, def: 246, sp_a: 166, sp_d: 176, spd: 196, moves: "liquidation, blizzard, stone-edge, x-scissor")
Pokemon.create(name: "aerodactyl", types: "rock, flying", hp: 301, atk: 246, def: 166, sp_a: 156, sp_d: 186, spd: 296, moves: "thunder-fang, earthquake, dragon-claw, stone-edge")
Pokemon.create(name: "snorlax", types: "normal", hp: 461, atk: 256, def: 166, sp_a: 166, sp_d: 256, spd: 96, moves: "body-press, wild-charge, gunk-shot, zen-headbutt")
Pokemon.create(name: "articuno", types: "ice, flying", hp: 321, atk: 206, def: 236, sp_a: 226, sp_d: 286, spd: 206, moves: "air-slash, hurricane, blizzard, ice-beam")
Pokemon.create(name: "zapdos", types: "electric, flying", hp: 321, atk: 216, def: 206, sp_a: 286, sp_d: 216, spd: 236, moves: "zap-cannon, thunderbolt, hurricane, heat-wave")
Pokemon.create(name: "moltres", types: "fire, flying", hp: 321, atk: 236, def: 216, sp_a: 286, sp_d: 206, spd: 216, moves: "mystical-fire, air-slash, hurricane, overheat")
Pokemon.create(name: "dratini", types: "dragon", hp: 223, atk: 164, def: 126, sp_a: 136, sp_d: 136, spd: 136, moves: "iron-tail, waterfall, breaking-swipe, facade")
Pokemon.create(name: "dragonair", types: "dragon", hp: 263, atk: 204, def: 166, sp_a: 176, sp_d: 176, spd: 176, moves: "iron-tail, waterfall, breaking-swipe, facade")
Pokemon.create(name: "dragonite", types: "dragon", hp: 323, atk: 304, def: 226, sp_a: 236, sp_d: 236, spd: 196, moves: "dragon-claw, body-press, earthquake, ice-punch")
Pokemon.create(name: "mewtwo", types: "psychic", hp: 353, atk: 256, def: 216, sp_a: 344, sp_d: 216, spd: 296, moves: "psystrike, shadow-ball, thunder, aura-sphere")
Pokemon.create(name: "mew", types: "psychic", hp: 341, atk: 236, def: 236, sp_a: 236, sp_d: 236, spd: 236, moves: "overheat, focus-blast, gunk-shot, psychic")

puts "🌱🌱🌱  Bulbasaur used leech seed!  🌱🌱🌱"