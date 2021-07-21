export default class Calendar {
	data: number[][] = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
	month!: number;
	year!: number;
	finishedRow!: number;

	calcStartColumn(month: number, year: number) {
		const monthStart = new Date(year, month, 1);
		const weekdayOfFirstOfMonth = monthStart.getDay();

		if (weekdayOfFirstOfMonth === 0) return 7; // Sunday

		return weekdayOfFirstOfMonth;
	}

	constructor() {
		const now = new Date;
		this.month = now.getMonth();
		console.log(this.month);

		this.year = now.getFullYear();
		for (let i = 0; i < 7; i++) {
			for (let j = 0; j < 6; j++) {
				this.data[j][i] = 0;
			}
		}
	}

	calcMonthLength(month: number) {
		switch (month) {
			case 1:
				return this.isLeapYear() ? 29 : 28;

			case -1: // december previous year
			case 0:
			case 2:
			case 4:
			case 6:
			case 7:
			case 9:
			case 11:
			case 12: // january next year
				return 31;

			case 3:
			case 5:
			case 8:
			case 10:
				return 30;

			default:
				throw `Invalid month ${this.month}`;
		}
	}

	isLeapYear() {
		if (this.year % 400 === 0) return true;
		if (this.year % 100 === 0) return false;
		return this.year % 4 === 0;
	}

	calcTable() {
		this.printCurrentMonth();
		this.printLastMonth();
		this.printNextMonth()
		return this.data;
	}

	printCurrentMonth() {
		let start = this.calcStartColumn(this.month, this.year) - 1;
		let currentRow = 0;
		let day = 1;

		if (start === this.data.length) currentRow++;

		while (day <= this.calcMonthLength(this.month)) {
			this.data[currentRow][start++] = day++;
			if (start === this.data[0].length) {
				start = 0;
				currentRow++;
			}
		}
		this.finishedRow = currentRow;
	}

	//TODO: implement for last year
	printLastMonth() {
		let start = this.calcStartColumn(this.month - 1, this.year) - 2;
		let day = this.calcMonthLength(this.month - 1);

		while (start >= 0) {
			this.data[0][start--] = day--;
		}
	}

	//TODO: implement for next year
	printNextMonth() {
		let start = 4; //this.calcStartColumn(this.month + 1, this.year);
		let day = 1;
		let row = this.finishedRow;

		while (start == 7) {
			this.data[row][start++] = day++;
		}
	}
}