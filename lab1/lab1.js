function* giveCurrentSecond() {
	let i = 0;
	while (true) {
		yield i;
		i++
	}
}
let curSecondGenerator = giveCurrentSecond()

function abc(iterator, delay) {
	let startDate = Date.now()
	while(Date.now() - delay < startDate) {
		console.log(iterator.next().value)
	}
}

abc(curSecondGenerator, 50)