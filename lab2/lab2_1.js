
export function* giveCurrentSecond() {
	let i = 0;
	while (true) {
		yield i;
		i++
	}
}