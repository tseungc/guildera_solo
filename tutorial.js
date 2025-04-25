// Set up

// Steps

// 0 ->		Enter name and start

// 1 -> 	R1 buy fighter 1

// 2 -> 	R1 buy sword 1

// 3 -> 	R1 equip sword 1

// 4 -> 	R1 raid dungeon 1D

// 5 -> 	R1 raid result click OK

// 6 -> 	R1 dividend choose pay

// 7 -> 	R1 dividend result click OK

// 8 -> 	stock R2S1

// 9 -> 	stock R2S2

// 10 -> 	stock R2S3

// 11 -> 	stock R2S4

// 12 -> 	stock R2S5

// 13 -> 	stock R2S6

// 14 -> 	R2 stock result click OK

// 15 -> 	R2 hire fighter 1
//	share button with step 1 ->

// 16 ->  	R2 raid dungeon 1F

// 17 -> 	R2 raid result click OK

// 18 -> 	R2 dividend choose keep

// 19 -> 	R2 dividend result click OK

// 20 -> 	stock R3S1

// 21 -> 	stock R3S2

// 22 -> 	stock R3S3

// 23 -> 	stock R3S4

// 24 -> 	stock R3S5

// 25 -> 	stock R3S6

// 26 -> 	R3 stock result click OK

// 27 ->	R3 guild A pay for martial art sifu

// 28 ->  	R3 unequip sword lvl 1

// 29 ->  	R3 hire fighter lvl 2

// 30 ->	R3 go to guild E (curator)

// 31 -> 	R3 pay to activate curator

// 32 -> 	R3 hire wizard lvl 2

// 33 -> 	R3 buy staff lvl 2

// 34 -> 	R3 equip staff lvl 2

// 35 -> 	R3 buy bow lvl 1

// 36 -> 	R3 cross guild buy sword lvl 1

// 37 -> 	R3 choose dungeons to raid

// 38 -> 	R3 raid result click OK

// 39 -> 	R3 dividend pay 

// 40 -> 	R3 dividend result

// 41		End of tutorial







document.addEventListener('DOMContentLoaded', function() {

	//Initialize local variables
	window.step = 0;
	window.showhiderule = "hide";

	// 0 ->		Enter name and start
	window.startgame = function() {
		//check step 0
		if (window.step == 0) {
			nameinput = document.getElementById('nameinput').value;
			if (nameinput == '') {
				nameinput = 'Player';
			}
			// change name for different fields
			document.getElementById('stock_header_player1').textContent = nameinput;
			document.getElementById('stockresult_header_player1').textContent = nameinput;
			document.getElementById('divtable_header_player1').textContent = nameinput;
			document.getElementById('divresult_header_player1').textContent = nameinput;
			// change phase
			updatephase('C');
			// change step
			window.step = 1;
			// change guide text
			document.getElementById('guidetext').textContent = 'You are the guildmaster of Guild A.';
		};
	};

	// 1 ->		R1 A hire fighter

	window.A_recruitfighter1 = function() {
		if (window.step == 1) {
			document.getElementById('A_lineup_slot1_merc').textContent = 'Fighter Lvl 1';
			document.getElementById('A_lineup_slot1_physical').textContent = '<span class="physical">40</span>';
			document.getElementById('A_lineup_slot1_total').textContent = '<span class="total">40</span>';
			document.getElementById('A_lineup_total_physical').textContent = '<span class="physical">40</span>';
			document.getElementById('A_lineup_total_total').textContent = '<span class="total">40</span>';
			
			window.step = 2;
			
		} else if (window.step == 15) {
			document.getElementById('A_lineup_slot2_merc').textContent = 'Fighter Lvl 1';
			document.getElementById('A_lineup_slot2_physical').textContent = '<span class="physical">40</span>';
			document.getElementById('A_lineup_slot2_total').textContent = '<span class="total">40</span>';
			document.getElementById('A_lineup_total_physical').textContent = '<span class="physical">90</span>';
			document.getElementById('A_lineup_total_total').textContent = '<span class="total">90</span>';

			window.step = 16;
		} else {
			followguide();
		};
	}

	window.A_buysword1 = function() {
		if (window.step == 2) {
			document.getElementById('raid_GuildA_spareequipment_table').style.display = 'block';
			window.step = 3;
		} else {
			followguide();
		};
	};

	window.A_equipsword1 = function() {
		if (window.step == 3) {
			document.getElementById('raid_GuildA_spareequipment_table').style.display = 'none';
			window.step = 4
		}
	}


	window.followguide = function() {
		alert('Please follow the guide.');
	};

	function updatephase(phase) {
		document.getElementById('phaseZ').style.display = 'none';
		document.getElementById('phaseA').style.display = 'none';
		document.getElementById('phaseB').style.display = 'none';
		document.getElementById('phaseC').style.display = 'none';
		document.getElementById('phaseD').style.display = 'none';
		document.getElementById('phaseE').style.display = 'none';
		document.getElementById('phaseF').style.display = 'none';

		document.getElementById('phase' + phase).style.display = 'block';
	}

	function update_raid_A_treasury(gold) {
		document.getElementById('raid_GuildA_treasury').textContent = 'Treasury: 🪙' + gold;
		document.getElementById('raid_GuildA_recruit_heading').textContent = 'Recruit Mercenaries (This guild has <span>🪙</span>' + gold + ')';
		document.getElementById('raid_GuildA_equipmentshop_heading').textContent = 'Buy Equipments from Shop (This guild has <span>🪙</span>' + gold + ')';
		document.getElementById('raid_GuildA_ability_heading').textContent = 'Special Consultants (This guild has <span>🪙</span>' + gold + ')';
	}

	function update_raid_E_treasury(gold) {
		document.getElementById('raid_GuildE_treasury').textContent = 'Treasury: 🪙' + gold;
		document.getElementById('raid_GuildE_recruit_heading').textContent = 'Recruit Mercenaries (This guild has <span>🪙</span>' + gold + ')';
		document.getElementById('raid_GuildE_equipmentshop_heading').textContent = 'Buy Equipments from Shop (This guild has <span>🪙</span>' + gold + ')';
		document.getElementById('raid_GuildE_ability_heading').textContent = 'Special Consultants (This guild has <span>🪙</span>' + gold + ')';
	}

	function update_A_dungeon_missingpower(power) {

	};

	function update_E_dungeon_missingpower(power) {

	};

	function disable_A_recruit_buttons() {

	};

	
	function disable_E_recruit_buttons() {

	};

	
	function enable_A_recruit_buttons() {

	};

	
	function enable_E_recruit_buttons() {

	};

	





});