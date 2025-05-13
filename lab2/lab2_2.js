
import {giveCurrentSecond} from "./lab2_1.js";
let curSecondGenerator = giveCurrentSecond()

export function wrapper(iterator, delay) {
	let startDate = Date.now()
	while(Date.now() - delay < startDate) {
		console.log(iterator.next().value)
	}
}
