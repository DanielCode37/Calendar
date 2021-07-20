export default class Calendar {
	data!: Number[][];
	month!: number;
	year!: number;
	now: Date = new Date;

	constructor() {
		this.now.getDay()
	}

	calcStartColumn() {
		const monthStart = new Date(this.year, this.month, 1);
		const weekdayOfFirstOfMonth = monthStart.getDay();

		if (weekdayOfFirstOfMonth === 0) return 7; // Sunday

		return weekdayOfFirstOfMonth;
	}

	calcMonthLength() {
		switch (this.month) {
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
}
