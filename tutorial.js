// Set up

// Steps

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
	window.A_div = null;
	window.E_div = null;
	window.showhiderule = "hide";
	window.guidtext = {
		1: "hire a fighter level 1",
		2: "buy a sword level 1",
		3: "equip sword level 1",
		4: "raid dungeon 1D",
		5: "click OK",
		6: "choose to pay dividend",
		7: "click OK",
		8: "8 click submit for now",
		9: "9 click submit for now",
		10: "10 click submit for now",
		11: "11 click submit for now",
		12: "12 click submit for now",
		13: "13 click submit for now",
		14: "click OK",
		15: "hire a figher level 1",
		16: "raid dungeon 1F",
		17: "click OK",
		18: "choose to not pay dividend",
		19: "click OK",
		20: "20",
		21: "21",
		22: "22",
		23: "23",
		24: "24",
		25: "25",
		26: "26",
		27: "27",
		28: "28",
		29: "29",
		30: "30",
		31: "31",
		32: "32",
		33: "33",
		34: "34",
		35: "35",
		36: "36",
		37: "37",
		38: "38",
		39: "39",
		40: "40",
		41: "41",
		41: "41",		
	}

	// 0 ->		Enter name and start
	window.startgame = function() {
		//check step 0
		if (window.step == 0) {
			let nameinput = document.getElementById('nameinput').value;
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
			changestep(1);
		};
	};

	// 1 ->		R1 A hire fighter

	window.A_recruitfighter1 = function() {
		if (window.step == 1) {
			document.getElementById('A_lineup_slot1_merc').textContent = 'Fighter Lvl 1';
			document.getElementById('A_lineup_slot1_physical').innerHTML = '<span class="physical">40</span>';
			document.getElementById('A_lineup_slot1_total').innerHTML = '<span class="total">40</span>';
			document.getElementById('A_lineup_total_physical').innerHTML = '<span class="physical">40</span>';
			document.getElementById('A_lineup_total_total').innerHTML = '<span class="total">40</span>';
			disable_A_recruit_buttons();
			update_A_treasury(280);
			change_A_all_missing_physical_power(40);
			change_A_all_missing_total_power(40);
			document.getElementById('raid_GuildA_dungeon_1A_name').classList.add('cancomplete');
			document.getElementById('raidchoice_A_1A').classList.add('cancomplete');
			document.getElementById('raidchoice_A_1A').innerHTML = '1A &#10004;';
			alert('Recruitment Successful.')
			changestep(2);
			
		} else if (window.step == 15) {
			document.getElementById('A_lineup_slot2_merc').textContent = 'Fighter Lvl 1';
			document.getElementById('A_lineup_slot2_physical').innerHTML = '<span class="physical">40</span>';
			document.getElementById('A_lineup_slot2_total').innerHTML = '<span class="total">40</span>';
			document.getElementById('A_lineup_total_physical').innerHTML = '<span class="physical">90</span>';
			document.getElementById('A_lineup_total_total').innerHTML = '<span class="total">90</span>';
			disable_A_recruit_buttons();
			update_A_treasury(170);
			change_A_all_missing_physical_power(90);
			change_A_all_missing_total_power(90);
			document.getElementById('raid_GuildA_dungeon_1E_name').classList.add('cancomplete');
			document.getElementById('raid_GuildA_dungeon_1F_name').classList.add('cancomplete');
			document.getElementById('raidchoice_A_1E').classList.add('cancomplete');
			document.getElementById('raidchoice_A_1E').innerHTML = '1E &#10004;';
			document.getElementById('raidchoice_A_1F').classList.add('cancomplete');
			document.getElementById('raidchoice_A_1F').innerHTML = '1F &#10004;';
			alert('Recruitment Successful.')
			changestep(16);

		} else {
			followguide();
		};
	};

	window.A_buysword1 = function() {
		if (window.step == 2) {
			document.getElementById('raid_GuildA_spareequipment_table').style.display = 'block';
			document.getElementById('raid_GuildA_spareequipment_heading').style.display = 'block';
			update_A_treasury(240);
			alert('Purchase Successful.')
			changestep(3);
		} else {
			followguide();
		};
	};

	window.A_equipsword1 = function() {
		if (window.step == 3) {
			// NEED to check if chosen slot 1 fighter 1 in dropdown, else followguide()
			document.getElementById('raid_GuildA_spareequipment_table').style.display = 'none';
			document.getElementById('raid_GuildA_spareequipment_heading').style.display = 'none';
			document.getElementById('A_lineup_slot1_equipment').textContent = 'Sword Lvl 1';
			document.getElementById('A_lineup_slot1_physical').innerHTML = '<span class="physical">50</span>';
			document.getElementById('A_lineup_slot1_total').innerHTML = '<span class="total">50</span>';
			document.getElementById('A_lineup_total_physical').innerHTML = '<span class="physical">50</span>';
			document.getElementById('A_lineup_total_total').innerHTML = '<span class="total">50</span>';
			// NEED show unequip button in line up
			change_A_all_missing_physical_power(50);
			change_A_all_missing_total_power(50);
			document.getElementById('raid_GuildA_dungeon_1D_name').classList.add('cancomplete');
			document.getElementById('raidchoice_A_1D').classList.add('cancomplete');
			document.getElementById('raidchoice_A_1D').innerHTML = '1D &#10004;';
			changestep(4);
		};
	};

	window.A_unequipsword1 = function () {
		if (window.step == 28) {
			// NEED update martial art sifu description
			// NEED show spare equipment
			// NEED update line up power
			// NEED update missing power
			// NEED update can complete if appropraite
		} else {
			followguide();
		}
	}

	window.E_recruitwizard2 = function() {
		if (window.step == 32) {
			document.getElementById('E_lineup_slot2_merc').textContent = 'Wizard Lvl 1';
			document.getElementById('A_lineup_slot1_magic').innerHTML = '<span class="magic">60</span>';
			document.getElementById('A_lineup_slot1_total').innerHTML = '<span class="total">60</span>';
			document.getElementById('A_lineup_total_magic').innerHTML = '<span class="magic">60</span>';
			document.getElementById('A_lineup_total_magic').innerHTML = '<span class="total">60</span>';
			disable_E_recruit_buttons();
			update_E_treasury(240);
			change_E_all_missing_magic_power(60);
			change_E_all_missing_total_power(60);
			// update all cancompletes (dungeo table and dropdown menu)
			alert('Recruitment Successful.')
			changestep(2);		}
	}

	window.raidsubmit = function() {
		if (window.step == 4) {
			// NEED check if 1D is chosen
			updatephase('D');
			changestep(5);
		} else if (window.step == 16) {
			// NEED check if 1F is chosen
			updatephase('D');
			changestep(17);
		}
	};

	window.raidresultOK = function() {
		if (window.step == 5) {
			updatephase('E');
			changestep(6);
		} else if (window.step == 17) {
			document.getElementById('').checked = false;
			document.getElementById('divFormButton').classList.add('divchoicesDisabled');
			updatephase('E');
			changestep(18);
		}
	};

	window.divsubmit = function() {
		if (window.step == 6) {
			// NEED check if yes is chosen
			updatephase('F');
			changestep(7);
		} else if (window.step == 18) {
			// NEED check if no is chosen
			updatephase('F');
			changestep(19);
		} else if (window.step == 39) {
			// NEED check if right combo is chosen
			updatephase('F');
			changestep(40);
		}
	};

	window.divresultOK = function() {
		if (window.step == 7) {
			updatephase('A');
			changestep(8);
		} else if (window.step == 19) {
			updatephase('A');
			changestep(20);
		};
	};

	window.stocksubmit = function() {
		if (window.step == 8) {
			changestep(9);
		} else if (window.step == 9) {
			changestep(10);
		} else if (window.step == 10) {
			changestep(11);
		} else if (window.step == 11) {
			changestep(12);
		} else if (window.step == 12) {
			changestep(13);
		} else if (window.step == 13) {
			updatephase('B');
			changestep(14);
		} else if (window.step == 20) {
			changestep(21);
		} else if (window.step == 21) {
			changestep(22);
		} else if (window.step == 22) {
			changestep(23);
		} else if (window.step == 23) {
			changestep(24);
		} else if (window.step == 24) {
			changestep(25);
		} else if (window.step == 25) {
			updatephase('B');
			changestep(26);
		};
	};

	window.stockresultOK = function() {
		if (window.step == 14) {
			enable_A_recruit_buttons();
			updatephase('C');
			changestep(15);
		} else if (window.step == 26) {
			document.getElementById("guildtab_GuildE_button").style.display = 'block';
			enable_A_recruit_buttons();
			updatephase('C');
			changestep(27);
		};
	};

	window.followguide = function() {
		alert('Please follow the guide.');
	};

	window.A_divformradioclick = function(e) {
		window.A_div = e.currentTarget.value;
		checkalldivselect();
	}

	window.E_divformradioclick = function(e) {
		window.E_div = e.currentTarget.value;
		checkalldivselect();
	}

	window.stockformradioclick = function(e) {
		window.stockchoice = e.currentTarget.value;
	}

	window.gotoGuildE = function(e) {
		if (window.step == 30) {
			document.getElementById('guildtab_GuildA_button').classList.remove('alreadyshowing');
			document.getElementById('guildtab_GuildE_button').classList.add('alreadyshowing');
			document.getElementById('raid_GuildA').style.display = 'none';
			document.getElementById('raid_GuildE').style.display = 'block';
		} else {
			followguide();
		}
	}

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

	function update_A_treasury(gold) {
		document.getElementById('raid_GuildA_treasury').textContent = 'Treasury: 🪙' + gold;
		document.getElementById('raid_GuildA_recruit_heading').textContent = 'Recruit Mercenaries (This guild has <span>🪙</span>' + gold + ')';
		document.getElementById('raid_GuildA_equipmentshop_heading').textContent = 'Buy Equipments from Shop (This guild has <span>🪙</span>' + gold + ')';
		document.getElementById('raid_GuildA_ability_heading').textContent = 'Special Consultants (This guild has <span>🪙</span>' + gold + ')';
	}

	function update_E_treasury(gold) {
		document.getElementById('raid_GuildE_treasury').textContent = 'Treasury: 🪙' + gold;
		document.getElementById('raid_GuildE_recruit_heading').textContent = 'Recruit Mercenaries (This guild has <span>🪙</span>' + gold + ')';
		document.getElementById('raid_GuildE_equipmentshop_heading').textContent = 'Buy Equipments from Shop (This guild has <span>🪙</span>' + gold + ')';
		document.getElementById('raid_GuildE_ability_heading').textContent = 'Special Consultants (This guild has <span>🪙</span>' + gold + ')';
	}

	function disable_A_recruit_buttons() {
		document.getElementById('A_fighter1_button').classList.add('recruitedDisabled');
		document.getElementById('A_fighter2_button').classList.add('recruitedDisabled');
		document.getElementById('A_archer1_button').classList.add('recruitedDisabled');
		document.getElementById('A_archer2_button').classList.add('recruitedDisabled');
		document.getElementById('A_wizard1_button').classList.add('recruitedDisabled');
		document.getElementById('A_wizard2_button').classList.add('recruitedDisabled');
	};

	
	function disable_E_recruit_buttons() {
		document.getElementById('E_fighter1_button').classList.add('recruitedDisabled');
		document.getElementById('E_fighter2_button').classList.add('recruitedDisabled');
		document.getElementById('E_archer1_button').classList.add('recruitedDisabled');
		document.getElementById('E_archer2_button').classList.add('recruitedDisabled');
		document.getElementById('E_wizard1_button').classList.add('recruitedDisabled');
		document.getElementById('E_wizard2_button').classList.add('recruitedDisabled');
	};

	
	function enable_A_recruit_buttons() {
		document.getElementById('A_fighter1_button').classList.remove('recruitedDisabled');
		document.getElementById('A_fighter2_button').classList.remove('recruitedDisabled');
		document.getElementById('A_archer1_button').classList.remove('recruitedDisabled');
		document.getElementById('A_archer2_button').classList.remove('recruitedDisabled');
		document.getElementById('A_wizard1_button').classList.remove('recruitedDisabled');
		document.getElementById('A_wizard2_button').classList.remove('recruitedDisabled');
	};

	
	function enable_E_recruit_buttons() {
		document.getElementById('E_fighter1_button').classList.remove('recruitedDisabled');
		document.getElementById('E_fighter2_button').classList.remove('recruitedDisabled');
		document.getElementById('E_archer1_button').classList.remove('recruitedDisabled');
		document.getElementById('E_archer2_button').classList.remove('recruitedDisabled');
		document.getElementById('E_wizard1_button').classList.remove('recruitedDisabled');
		document.getElementById('E_wizard2_button').classList.remove('recruitedDisabled');
	};

	function changestep(newstep) {
		window.step = newstep;
		document.getElementById('guidetext').innerHTML = window.guidtext[newstep];
	}

	function change_A_all_missing_physical_power(number) {
		change_A_missing_physical_power('1D', number);
		change_A_missing_physical_power('2B', number);
		change_A_missing_physical_power('2D', number);
		change_A_missing_physical_power('2F', number);
		change_A_missing_physical_power('3A', number);
		change_A_missing_physical_power('3B', number);
		change_A_missing_physical_power('3D', number);
		change_A_missing_physical_power('3E', number);
		change_A_missing_physical_power('3H', number);
		change_A_missing_physical_power('3I', number);
	}

	function change_A_missing_physical_power(dungeon, number) {
		let dungeonreq = document.getElementById("raid_GuildA_dungeon_" + dungeon + "_physical").dataset.req;
		let diff = +dungeonreq - number;
		if (diff > 0) {
			document.getElementById("raid_GuildA_dungeon_" + dungeon + "_physical").innerHTML = '<span class="physical">' + String(dungeonreq) + '</span> <span class="missing">(-' + String(diff) + ')</span></td>';
		} else {
			document.getElementById("raid_GuildA_dungeon_" + dungeon + "_physical").innerHTML = '<span class="physical">' + String(dungeonreq) + '</span>';
		};
	}

	function change_A_all_missing_total_power(number) {
		change_A_missing_total_power('1A', number);
		change_A_missing_total_power('1E', number);
		change_A_missing_total_power('1F', number);
		change_A_missing_total_power('2A', number);
		change_A_missing_total_power('2D', number);
		change_A_missing_total_power('2G', number);
		change_A_missing_total_power('3A', number);
		change_A_missing_total_power('3B', number);
		change_A_missing_total_power('3I', number);
	}

	function change_A_missing_total_power(dungeon, number) {
		let dungeonreq = document.getElementById("raid_GuildA_dungeon_" + dungeon + "_total").dataset.req;
		let diff = +dungeonreq - number;
		if (diff > 0) {
			document.getElementById("raid_GuildA_dungeon_" + dungeon + "_total").innerHTML = '<span class="total">' + String(dungeonreq) + '</span> <span class="missing">(-' + String(diff) + ')</span></td>';
		} else {
			document.getElementById("raid_GuildA_dungeon_" + dungeon + "_total").innerHTML = '<span class="total">' + String(dungeonreq) + '</span>';
		};
	}

	function change_E_all_missing_magic_power(number) {
		change_E_missing_total_power('1C', number);
		change_E_missing_total_power('2E', number);
		change_E_missing_total_power('2F', number);
		change_E_missing_total_power('3C', number);
		change_E_missing_total_power('3E', number);
		change_E_missing_total_power('3F', number);
	}

	function change_E_missing_magic_poiwer(dungeon, number) {
		let dungeonreq = document.getElementById("raid_GuildE_dungeon_" + dungeon + "_magic").dataset.req;
		let diff = +dungeonreq - number;
		if (diff > 0) {
			document.getElementById("raid_GuildE_dungeon_" + dungeon + "_magic").innerHTML = '<span class="magic">' + String(dungeonreq) + '</span> <span class="missing">(-' + String(diff) + ')</span></td>';
		} else {
			document.getElementById("raid_GuildE_dungeon_" + dungeon + "_magic").innerHTML = '<span class="magic">' + String(dungeonreq) + '</span>';
		};
	}

	function change_E_all_missing_total_power(number) {
		change_E_missing_total_power('1A', number);
		change_E_missing_total_power('1E', number);
		change_E_missing_total_power('1F', number);
		change_E_missing_total_power('2A', number);
		change_E_missing_total_power('2D', number);
		change_E_missing_total_power('2G', number);
		change_E_missing_total_power('3A', number);
		change_E_missing_total_power('3B', number);
		change_E_missing_total_power('3I', number);
	}

	function change_E_missing_total_power(dungeon, number) {
		let dungeonreq = document.getElementById("raid_GuildE_dungeon_" + dungeon + "_total").dataset.req;
		let diff = +dungeonreq - number;
		if (diff > 0) {
			document.getElementById("raid_GuildE_dungeon_" + dungeon + "_total").innerHTML = '<span class="total">' + String(dungeonreq) + '</span> <span class="missing">(-' + String(diff) + ')</span></td>';
		} else {
			document.getElementById("raid_GuildE_dungeon_" + dungeon + "_total").innerHTML = '<span class="total">' + String(dungeonreq) + '</span>';
		};
	};

	function update_A_treasury(treasury) {
		document.getElementById("raid_GuildA_treasury").innerHTML = 'Treasury: <span>&#129689;</span>' + String(treasury);
		document.getElementById("raid_GuildA_recruit_heading").innerHTML = 'Recruit Mercenaries (This guild has <span>&#129689;</span>' + String(treasury) + ')';
		document.getElementById("raid_GuildA_equipmentshop_heading").innerHTML = 'Buy Equipment from Shop (This guild has <span>&#129689;</span>' + String(treasury) + ')';
		document.getElementById("raid_GuildA_ability_heading").innerHTML = 'Special Consultants (This guild has <span>&#129689;</span>' + String(treasury) + ')';
	};

	function update_E_treasury(treasury) {
		document.getElementById("raid_GuildE_treasury").innerHTML = 'Treasury: <span>&#129689;</span>' + String(treasury);
		document.getElementById("raid_GuildE_recruit_heading").innerHTML = 'Recruit Mercenaries (This guild has <span>&#129689;</span>' + String(treasury) + ')';
		document.getElementById("raid_GuildE_equipmentshop_heading").innerHTML = 'Buy Equipment from Shop (This guild has <span>&#129689;</span>' + String(treasury) + ')';
		document.getElementById('raid_GuildE_equipmentotherguild_heading').innerHTML = 'Buy Equipment from your other guilds (This guild has <span>&#129689;</span>' + String(treasury) + ')';
		document.getElementById("raid_GuildE_ability_heading").innerHTML = 'Special Consultants (This guild has <span>&#129689;</span>' + String(treasury) + ')';
	};

	function checkalldivselect() {
		if (window.step == 6) {
			if (window.A_div == null) {
				document.getElementById('divFormButton').classList.add('divchoicesDisabled');
			} else {
				document.getElementById('divFormButton').classList.remove('divchoicesDisabled');
			}
		} else if (window.step == 18) {
			if (window.A_div == null) {
				document.getElementById('divFormButton').classList.add('divchoicesDisabled');
			} else {
				document.getElementById('divFormButton').classList.remove('divchoicesDisabled');
			}
		} else if (window.step == 39) {
			document.getElementById('divFormButton').classList.remove('divchoicesDisabled');
			if (window.A_div == null) {
				document.getElementById('divFormButton').classList.add('divchoicesDisabled');
			}
			if (window.E_div == null) {
				document.getElementById('divFormButton').classList.add('divchoicesDisabled');
			}
		};
	};
});