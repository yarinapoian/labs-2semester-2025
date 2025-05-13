// function a(...params) {
// 	console.log('function called with param ' + params)
// 	return params.length;
// }
//
// let memory = {}
// function wrapper(...params) {
// 	let key = params.join()
// 	if(!(key in memory)) {
// 		memory[key] = a(...params)
// 	}
// 	return memory[key]
// }
//
// console.log(wrapper(1, 555));
// console.log(wrapper(2));
// console.log(wrapper(3));
// console.log(wrapper(1, 555));
// console.log(wrapper(2));

let cacheSize = 2
let memory = [] // [{key: 123, value: 123, timestamp: 5}, {key: 123, value: 123, timestamp: 2}, {key: 123, value: 123, timestamp: 10}]
let timestamp = 0


function get(key) {
	for( let i = 0; i<memory.length;i++) {
		let cacheItem = memory[i]
		timestamp++
		if (cacheItem.key === key) {
			memory[i].timestamp = timestamp
			return cacheItem.value
		}
	}
}

function add(key, value) {
	timestamp++
	for(let i=0; i<memory.length; i++) {
		if(memory[i].key === key) {
			memory[i].value = value;
			memory[i].timestamp = timestamp
			return memory[i].value
		}
	}
	if(memory.length >= cacheSize) {
		memory.sort((a, b) => a.timestamp - b.timestamp)
		memory.shift()
	}
	memory.push({key:key, value: value, timestamp: timestamp})
}

function customSum(a, b) {
	console.log('calculate')
	return a+b;
}

function wrapper(a,b) {
	let key = a + "-" + b;
	let found = get(key)
	if(!found) {
		let result = customSum(a, b)
		add(key, result)
	}
	return get(key)
}
console.log(wrapper(23456, 8765));
console.log(wrapper(23456, 23456));
console.log(wrapper(23456, -543));
console.log(wrapper(23456, 0));
console.log(wrapper(23456, 1));
console.log(wrapper(23456, 8765));
console.log(wrapper(23456, 8765));
console.log(wrapper(23456, 1));






