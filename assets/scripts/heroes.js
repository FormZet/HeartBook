$(document).ready(function() {
	let hero = $('.s-lore');

	let currentHeroes = [];
	const heroes = [
		{
			name: 'Garrosh',
			class: 'Warrior',
			desc: 'Garrosh Hellscream was the son of Grom Hellscream and former chieftain of the Warsong clan. With the reopening of the Dark Portal, Garrosh was invited into the Horde by Thrall himself, quickly advancing to the position of personal adviser of the Warchief.',
			skill: 'Armor Up!',
			pic: 'assets/img/heroes/hero_garrosh.png',
			original: true
		},
		{
			name: 'Uther',
			class: 'Paladin',
			desc: 'Uther Lightbringer is the paladin hero for Hearthstone: Heroes of Warcraft. The paladin focuses on minions and buffs (predominantly Divine Shield), as well as healing.Uther lived and died to defend the kingdom of Lordaeron. Though he was betrayed by his most beloved student, we believe that his spirit lives on. He continues to watch over us, even as the shadows close in around our ruined land.',
			skill: 'Reinforce',
			pic: 'assets/img/heroes/hero_uther.png',
			original: true
		},{
			name: 'GulDan',
			class: 'Warlock',
			desc: 'Guldan is the warlock hero in Hearthstone: Heroes of Warcraft. The warlock focuses on direct damage, demons, drawing, and area of effect abilities. Most come with a cost, such as discarding cards or damage to the warlock.',
			skill: 'Life Tap',
			pic: 'assets/img/heroes/hero_guldan.png',
			original: true
		},{
			name: 'Thrall',
			class: 'Shaman',
			desc: 'Thrall, son of Durotan, was the Warchief of the restored orcish Horde and ruler of the red land of Durotar in Kalimdor.He was Warchief of all the Horde, but temporarily gave leadership to Garrosh Hellscream in order to lead the Earthen Rings effort with Farseer Nobundo against the Twilights Hammer cult.',
			skill: 'Tothemic Call',
			pic: 'assets/img/heroes/hero_thrall.png',
			original: true
		},{
			name: 'Rexxar',
			class: 'Hunter',
			desc: 'Rexxar, Champion of the Horde, is a half-ogre, half-orc beastmaster of the MokNathal clan, and may be one of the last half-ogres of the clan. He saved the city of Orgrimmar from the hatred of an enemy of the Horde. He was instrumental in assisting the Horde after the fall of the Burning Legion.',
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
			desc: 'Malfurion Stormrage is the druid hero for Hearthstone: Heroes of Warcraft. The druid focuses on choice cards and mana generation.Malfurion Stormrage was the first night elf druid, and initiated the mainstream use of druidism among the night elven people ten millennia ago under tutelage of the demigod Cenarius. Through Malfurions guidance, the kaldorei managed to successfully halt the Burning Legions first invasion of Azeroth during the War of the Ancients. ',
			skill: 'Shapeshift',
			pic: 'assets/img/heroes/hero_malfurion.png',
			original: true
		},{
			name: 'Anduin',
			class: 'Priest',
			desc: 'Anduin Wrynn is the priest hero for Hearthstone: Heroes of Warcraft. The priest focuses on modifying minions, stealing or copying enemy minions, execution spells, and healing. Anduin Llane Wrynn is the heir to the throne of Stormwind. He is named after two venerated figures of Stormwind history: the legendary Anduin Lothar and his grandfather, King Llane',
			skill: 'Lesser Heal',
			pic: 'assets/img/heroes/hero_anduin.png',
			original: true
		},
		{
			name: 'Lunara',
			class: 'Druid',
			desc: 'Lunara is a dryad, the first daughter of Cenarius, located in the Dreamgrove in Valsharah.Lunara is the eldest daughter of the demi-god Cenarius. While her sisters, the dryads, embody peace and the serene beauty of nature, Lunara’s apple didn’t fall far from her father’s tree—she’s a relentless defender of the wilderness and immortal proof that nature is red in claw and thorn. ',
			skill: 'Shapeshift',
			pic: 'assets/img/heroes/hero_lunara.png',
			original: true
		},
		{
			name: 'Tyrande',
			class: 'Priest',
			desc: 'Tyrande Whisperwind is the alternate priest hero for Hearthstone: Heroes of Warcraft. The priest focuses on modifying minions, stealing or copying enemy minions, execution spells, and healing',
			skill: 'Lesser Heal',
			pic: 'assets/img/heroes/hero_tyrande.png',
			original: true
		},
		{
			name: 'Alleria',
			class: 'Hunter',
			desc: 'Alleria travels in forests whenever possible and prefers to strike from hiding — especially when attacking orcs, who she believes have no honor and therefore can be killed in any way she sees fit.',
			skill: 'Steady Shot',
			pic: 'assets/img/heroes/hero_alleria.png',
			original: true
		},{
			name: 'Magni',
			class: 'Warrior',
			desc: 'The eldest of the three Bronzebeard brothers, Magni was destined to be the king under the mountain. Strong of arm and keen of mind, Magni loved his two brothers above all else in the world. From the time of his youth, Magni the prince was keenly aware of what would be expected of him in the future.',
			skill: 'Armor Up!',
			pic: 'assets/img/heroes/hero_magni.png',
			original: true
		},
		{
			name: 'Maiev',
			class: 'Rogue',
			desc: 'Maiev Shadowsong is the alternate rogue hero for Hearthstone: Heroes of Warcraft. Rogues tend to focus on weapons, burst damage, and cards with combo. They also have some fairly good card executors',
			skill: 'Dagger Mastery',
			pic: 'assets/img/heroes/hero_maiev.png',
			original: true
		},{
			name: 'Khadgar',
			class: 'Mage',
			desc: 'The Archmage Khadgar is a well-known hero to the denizens of Azeroth! Once Medivhs apprentice, now he’s renowned as one of the most powerful mages in history! Whether battling against shadowy councils, or holding the line against unwelcome iron incursions, Khadgar is always a staunch guardian of Azeroth and the entities that call it home',
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
			desc: 'Prince Arthas is the alternate paladin hero for Hearthstone: Heroes of Warcraft. The paladin focuses on minions and buffs (predominantly Divine Shield), as well as healing.Despite his promising beginnings, Arthas became one of the most powerful and evil beings Azeroth would ever know. Taking up the cursed runeblade Frostmourne, he became a death knight, led the Scourge in destroying Lordaeron, and merged with the Lich King.',
			skill: 'Reinforce',
			pic: 'assets/img/heroes/hero_arthas.png',
			original: true
		},
		{
			name: 'Nemsy',
			class: 'Warlock',
			desc: 'Nemsy Necrofizzle is the alternate warlock hero in Hearthstone: Heroes of Warcraft. The warlock focuses on direct damage, demons, drawing, and area of effect abilities. Most come with a cost, such as discarding cards or damage to the warlock',
			skill: 'Life Tap',
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