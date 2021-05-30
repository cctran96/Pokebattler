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

puts "🌱🌱🌱  Bulbasaur used leech seed!  🌱🌱🌱"