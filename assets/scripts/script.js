$(document).ready(function() {
	let hero = $('.s-lore');

	let currentHeroes = [];
	const heroes = [
		{
			name: 'Garrosh',
			class: 'Warrior',
			desc: 'Valeera Sanguinar is the rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors, to destroy minions instantly.',
			skill: 'Armor Up!',
			pic: 'assets/img/heroes/hero_garrosh.png',
			original: true
		},
		{
			name: 'Uther',
			class: 'Paladin',
			desc: 'Valeera Sanguinar is the rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors, to destroy minions instantly.',
			skill: 'Reinforce',
			pic: 'assets/img/heroes/hero_uther.png',
			original: true
		},{
			name: 'GulDan',
			class: 'Warlock',
			desc: 'Valeera Sanguinar is the rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors, to destroy minions instantly.',
			skill: 'Sacrifice',
			pic: 'assets/img/heroes/hero_guldan.png',
			original: true
		},{
			name: 'Thrall',
			class: 'Shaman',
			desc: 'Valeera Sanguinar is the rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors, to destroy minions instantly.',
			skill: 'Tothemic Call',
			pic: 'assets/img/heroes/hero_thrall.png',
			original: true
		},{
			name: 'Rexxar',
			class: 'Hunter',
			desc: 'Valeera Sanguinar is the rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors, to destroy minions instantly.',
			skill: 'Steady Shot',
			pic: 'assets/img/heroes/hero_rexxar.png',
			original: true
		},{
			name: 'Jaina',
			class: 'Mage',
			desc: 'When it comes to turning mana into OH GOD IT BURNS, Jaina is second to none. Her decks include plenty of direct damage spells she will gleefully hurl at her opponents, including some very potent board clears like Arcane Explosion and Flamestrike.',
			skill: 'Fireblast',
			pic: 'assets/img/heroes/hero_jaina.png',
			original: true
		},{
			name: 'Valeera',
			class: 'Rogue',
			desc: 'Valeera Sanguinar is the rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors, to destroy minions instantly.',
			skill: 'Dagger Mastery',
			pic: 'assets/img/heroes/hero_valeera.png',
			original: true
		},{
			name: 'Malfurion',
			class: 'Druid',
			desc: 'Valeera Sanguinar is the rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors, to destroy minions instantly.',
			skill: 'Shapeshift',
			pic: 'assets/img/heroes/hero_malfurion.png',
			original: true
		},{
			name: 'Anduin',
			class: 'Priest',
			desc: 'Valeera Sanguinar is the rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors, to destroy minions instantly.',
			skill: 'Lesser Heal',
			pic: 'assets/img/heroes/hero_anduin.png',
			original: true
		},
		{
			name: 'Lurara',
			class: 'Druid',
			desc: 'Valeera Sanguinar is the rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors, to destroy minions instantly.',
			skill: 'Shapeshift',
			pic: 'assets/img/heroes/hero_lunara.png',
			original: true
		},
		{
			name: 'Tyrande',
			class: 'Priest',
			desc: 'Valeera Sanguinar is the rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors, to destroy minions instantly.',
			skill: 'Lesser Heal',
			pic: 'assets/img/heroes/hero_tyrande.png',
			original: true
		},
		{
			name: 'Alleria',
			class: 'Hunter',
			desc: 'Valeera Sanguinar is the rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors, to destroy minions instantly.',
			skill: 'Steady Shot',
			pic: 'assets/img/heroes/hero_alleria.png',
			original: true
		},{
			name: 'Magni',
			class: 'Warrior',
			desc: 'Valeera Sanguinar is the rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors, to destroy minions instantly.',
			skill: 'Armor Up!',
			pic: 'assets/img/heroes/hero_magni.png',
			original: true
		},
		{
			name: 'Maiev',
			class: 'Rogue',
			desc: 'Valeera Sanguinar is the rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors, to destroy minions instantly.',
			skill: 'Dagger Mastery',
			pic: 'assets/img/heroes/hero_maiev.png',
			original: true
		},{
			name: 'Khadgar',
			class: 'Mage',
			desc: 'Valeera Sanguinar is the rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors, to destroy minions instantly.',
			skill: 'Fireblast',
			pic: 'assets/img/heroes/hero_khadgar.png',
			original: true
		},{
			name: 'Morgl',
			class: 'Shaman',
			desc: 'Valeera Sanguinar is the rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors, to destroy minions instantly.',
			skill: 'Tothemic Call',
			pic: 'assets/img/heroes/hero_morgl.png',
			original: true
		},{
			name: 'Arthas',
			class: 'Paladin',
			desc: 'Valeera Sanguinar is the rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors, to destroy minions instantly.',
			skill: 'Reinforce',
			pic: 'assets/img/heroes/hero_arthas.png',
			original: true
		},
		{
			name: 'Nemsy',
			class: 'Warlock',
			desc: 'Valeera Sanguinar is the rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors, to destroy minions instantly.',
			skill: 'Sacrifice',
			pic: 'assets/img/heroes/hero_nemsy.png',
			original: true
		},
	]


	const classList = [
		"Warrior",
	    "Paladin",
	    "Warlock",
	    "Druid",
	    "Hunter",
	    "Rogue",
	    "Shaman",
	    "Priest",
	    "Mage",
    ];

	let currentClass = classList[0];
	$('.heroes-list img:eq(0)').addClass('-is-active');


	$('.heroes-list img').click(function(){
		currentClass = classList[$(this).index()];
		
		$('.heroes-list img').removeClass('-is-active');
		$(this).toggleClass('-is-active');

		heroes.find(function(elem, index, arr) {
			
			if (elem.class === currentClass) {
				currentHeroes.push(elem);
			}
		});

		hero.html('');

		for (let i = 0; i < currentHeroes.length; i++) {
			hero.append('<div class="hero"><img class="heru" src="' + currentHeroes[i].pic + '"><p>' + currentHeroes[i].desc + '</p></div>');
		}
		currentHeroes = [];

		
		
	})
});