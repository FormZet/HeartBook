$(document).ready(function() {
	let currentHeroes = [];
	const herocards = [

	{
		class:'Warrior',
		cards:[
		'assets/img/heroes/warrior_card.png',
		'assets/img/heroes/warrior_card2.png',
		'assets/img/heroes/warrior_card3.png',
		'assets/img/heroes/warrior_card.png',
		'assets/img/heroes/warrior_card.png',
		'assets/img/heroes/warrior_card.png',
		'assets/img/heroes/warrior_card.png',
		'assets/img/heroes/warrior_card.png',
		'assets/img/heroes/warrior_card.png',
		'assets/img/heroes/warrior_card.png'
]
	},
	{
		class:'Paladin',
		cards:[
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card2.png',
	'assets/img/heroes/paladin_card3.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png'
]	},
	{
		class:'Warlock',
		cards:[
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card2.png',
		'assets/img/heroes/paladin_card3.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png']
	},
	{
		class:'Shaman',
		cards:[
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card2.png',
		'assets/img/heroes/paladin_card3.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png'
]	},
	{
		class:'Hunter',
		cards:[
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card2.png',
	'assets/img/heroes/paladin_card3.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png'
]	},
	{
		class:'Mage',
		cards:[
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card2.png',
	'assets/img/heroes/paladin_card3.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png'
]	},
	{
		class:'Rogue',
		cards:[
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card2.png',
		'assets/img/heroes/paladin_card3.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png'
]	},
	{
		class:'Druid',
		cards:[
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card2.png',
	'assets/img/heroes/paladin_card3.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
	'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png'
]	},{
		class:'Priest',
		cards:[
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card2.png',
		'assets/img/heroes/paladin_card3.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png',
		'assets/img/heroes/paladin_card.png'
		]
	}
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

	});

});