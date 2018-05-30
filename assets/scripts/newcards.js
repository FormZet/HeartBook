$(document).ready(function() {
	let cards = $('.cards');
	let currentCards = [];
	const herocards = [

	{
		class:'Warrior',
		cards:[
		'assets/img/Cards/warrior_card.png',
		'assets/img/Cards/warrior_card2.png',
		'assets/img/Cards/warrior_card3.png',
		'assets/img/Cards/warrior_card4.png',
		'assets/img/Cards/warrior_card5.png',
		'assets/img/Cards/warrior_card6.png',
		'assets/img/Cards/warrior_card7.png',
		'assets/img/Cards/warrior_card8.png',
		'assets/img/Cards/warrior_card9.png',
		'assets/img/Cards/warrior_card10.png'
]
	},
{
		class:'Paladin',
		cards:[
	'assets/img/Cards/paladin_card.png',
	'assets/img/Cards/paladin_card2.png',
	'assets/img/Cards/paladin_card3.png',
	'assets/img/Cards/paladin_card4.png',
	'assets/img/Cards/paladin_card5.png',
	'assets/img/Cards/paladin_card6.png',
	'assets/img/Cards/paladin_card7.png',
	'assets/img/Cards/paladin_card8.png',
	'assets/img/Cards/paladin_card9.png',
	'assets/img/Cards/paladin_card10.png'
]	},
{
		class:'Warlock',
		cards:[
		'assets/img/Cards/warlock_card.png',
		'assets/img/Cards/warlock_card2.png',
		'assets/img/Cards/warlock_card3.png',
		'assets/img/Cards/warlock_card4.png',
		'assets/img/Cards/warlock_card5.png',
		'assets/img/Cards/warlock_card6.png',
		'assets/img/Cards/warlock_card7.png',
		'assets/img/Cards/warlock_card8.png',
		'assets/img/Cards/warlock_card9.png',
		'assets/img/Cards/warlock_card10.png']
	},
{
		class:'Shaman',
		cards:[
		'assets/img/Cards/shaman_card.png',
		'assets/img/Cards/shaman_card2.png',
		'assets/img/Cards/shaman_card3.png',
		'assets/img/Cards/shaman_card4.png',
		'assets/img/Cards/shaman_card5.png',
		'assets/img/Cards/shaman_card6.png',
		'assets/img/Cards/shaman_card7.png',
		'assets/img/Cards/shaman_card8.png',
		'assets/img/Cards/shaman_card9.png',
		'assets/img/Cards/shaman_card10.png'
]	},
{
		class:'Hunter',
		cards:[
	'assets/img/Cards/hunder_card.png',
	'assets/img/Cards/hunder_card2.png',
	'assets/img/Cards/hunder_card3.png',
	'assets/img/Cards/hunder_card4.png',
	'assets/img/Cards/hunder_card5.png',
	'assets/img/Cards/hunder_card6.png',
	'assets/img/Cards/hunder_card7.png',
	'assets/img/Cards/hunder_card8.png',
	'assets/img/Cards/hunder_card9.png',
	'assets/img/Cards/hunder_card10.png'
]	},
{
		class:'Mage',
		cards:[
	'assets/img/Cards/mage_card.png',
	'assets/img/Cards/mage_card2.png',
	'assets/img/Cards/mage_card3.png',
	'assets/img/Cards/mage_card4.png',
	'assets/img/Cards/mage_card5.png',
	'assets/img/Cards/mage_card6.png',
	'assets/img/Cards/mage_card7.png',
	'assets/img/Cards/mage_card8.png',
	'assets/img/Cards/mage_card9.png',
	'assets/img/Cards/mage_card10.png'
]	},
{
		class:'Rogue',
		cards:[
		'assets/img/Cards/rogue_card.png',
		'assets/img/Cards/rogue_card2.png',
		'assets/img/Cards/rogue_card3.png',
		'assets/img/Cards/rogue_card4.png',
		'assets/img/Cards/rogue_card5.png',
		'assets/img/Cards/rogue_card6.png',
		'assets/img/Cards/rogue_card7.png',
		'assets/img/Cards/rogue_card8.png',
		'assets/img/Cards/rogue_card9.png',
		'assets/img/Cards/rogue_card10.png'
]},
{
		class:'Druid',
		cards:[
	'assets/img/Cards/druid_card.png',
	'assets/img/Cards/druid_card2.png',
	'assets/img/Cards/druid_card3.png',
	'assets/img/Cards/druid_card4.png',
	'assets/img/Cards/druid_card5.png',
	'assets/img/Cards/druid_card6.png',
	'assets/img/Cards/druid_card7.png',
	'assets/img/Cards/druid_card8.png',
	'assets/img/Cards/druid_card9.png',
	'assets/img/Cards/druid_card10.png'
]},
{
		class:'Priest',
		cards:[
		'assets/img/Cards/priest_card.png',
		'assets/img/Cards/priest_card2.png',
		'assets/img/Cards/priest_card3.png',
		'assets/img/Cards/priest_card4.png',
		'assets/img/Cards/priest_card5.png',
		'assets/img/Cards/priest_card6.png',
		'assets/img/Cards/priest_card7.png',
		'assets/img/Cards/priest_card8.png',
		'assets/img/Cards/priest_card9.png',
		'assets/img/Cards/priest_card10.png'
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
	$('.heroes-listc img:eq(0)').addClass('-is-active');


	$('.heroes-listc img').click(function(){
		currentClass = classList[$(this).index()];
		
		$('.heroes-listc img').removeClass('-is-active');
		$(this).toggleClass('-is-active');

		herocards.find(function(elem, index, arr) {
			
			if (elem.class === currentClass) {
				currentCards = elem.cards;
			}
		});

		cards.html('');

		for (let i = 0; i < currentCards.length; i++) {
			cards.append('<div class="cart"><img class="animated zoomInRight" src="' + currentCards[i]  + '"></div>');
		}
		currentCards = [];

		
		
	})

	});
