function calculateTax() {
	let person1 = document.getElementById('person1').value;
	let person2 = document.getElementById('person2').value;

	let year = document.getElementById('year').value;
	let tax;

	let income = person2 ? (parseInt(person1) + parseInt(person2)) / 2 : person1;

	switch (year) {
		case '2018':
			if (income <= 9000) {
				tax = 0;
			} else if (income <= 13996) {
				let y = (income - 9000) / 10000;
				tax = (997.8 * y + 1400) * y;
			} else if (income <= 54949) {
				let z = (income - 13996) / 10000;
				tax = (220.13 * z + 2397) * z + 948.49;
			} else if (income <= 260533) {
				tax = 0.42 * income - 8621.75;
			} else {
				tax = 0.45 * income - 16437.7;
			}
			break;

		case '2019':
			if (income <= 9186) {
				tax = 0;
			} else if (income <= 14254) {
				let y = (income - 9168) / 10000;
				tax = (980.14 * y + 1400) * y;
			} else if (income <= 55960) {
				let z = (income - 14254) / 10000;
				tax = (216.16 * z + 2397) * z + 965.58;
			} else if (income <= 265326) {
				tax = 0.42 * income - 8780.9;
			} else {
				tax = 0.45 * income - 16740.68;
			}

			break;

		case '2020':
			if (income <= 9408) {
				tax = 0;
			} else if (income <= 14553) {
				let y = (income - 9408) / 10000;
				tax = (972.87 * y + 1400) * y;
			} else if (income <= 57051) {
				let z = (income - 14532) / 10000;
				tax = (212.02 * z + 2397) * z + 972.79;
			} else if (income <= 270500) {
				tax = 0.42 * income - 8963.74;
			} else {
				tax = 0.45 * income - 17078.74;
			}
			break;
	}

	tax = tax.toFixed(2);
	document.getElementById('ergebnis').innerHTML = `Deine Einkommenssteuer beträgt ${tax} Euro`;

	console.log(tax);
}
