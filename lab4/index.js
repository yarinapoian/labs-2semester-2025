let arr = []

function enqueue (item, priority) {
	arr.push({value: item, priority: priority})
}
function dequeue (type) { // 'lowest', 'highest', 'oldest', 'newest'
	if (type === "lowest") {
		let minPriorityIndex = 0
		for(let i = 0;i<arr.length; i++) {
			if (arr[i].priority < arr[minPriorityIndex].priority) {
				minPriorityIndex = i
			}
		}
		let deletedItem = arr[minPriorityIndex]
		arr.splice(minPriorityIndex, 1)
		return deletedItem
	} else if (type === "highest") {
		let maxPriorityIndex = 0
		for(let i = 0;i<arr.length; i++) {
			if (arr[i].priority > arr[maxPriorityIndex].priority) {
				maxPriorityIndex = i
			}
		}
		let deletedItem = arr[maxPriorityIndex]
		arr.splice(maxPriorityIndex, 1)
		return deletedItem
	} else if (type === 'oldest') {
		return arr.shift()
	} else if (type === 'newest') {
		return arr.pop();
	}
}

function peek(type) {
	if (type === "lowest") {
		let minPriorityIndex = 0
		for(let i = 0;i<arr.length; i++) {
			if (arr[i].priority < arr[minPriorityIndex].priority) {
				minPriorityIndex = i
			}
		}
		return arr[minPriorityIndex]
	} else if (type === "highest") {
		let maxPriorityIndex = 0
		for(let i = 0;i<arr.length; i++) {
			if (arr[i].priority > arr[maxPriorityIndex].priority) {
				maxPriorityIndex = i
			}
		}
		return arr[maxPriorityIndex]
	} else if (type === 'oldest') {
		return arr[0]
	} else if (type === 'newest') {
		return arr[arr.length-1]
	}
}

enqueue(5, 5)
enqueue(10, 3)
enqueue(7, 2)
enqueue(2, 10)

console.log(peek('lowest'))
console.log(peek('highest'))
console.log(peek('oldest'))
console.log(peek('newest'))