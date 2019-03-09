import { Fighter } from "./fighter";

// create a class "ImprovedFighter"
export class ImprovedFighter extends Fighter {
	constructor(name, power, health) {
		super('improved '+name, power, health);
	}

	doubleHit(enemy, point) {
		const two = 2;
		let doublePoint = point * two;
		this.hit(enemy, doublePoint);
	}
}