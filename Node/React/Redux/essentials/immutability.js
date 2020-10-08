const obj = { a:1, b:2 };
//Still the same object pointer, but a value has changed
obj.b = 3;

const arr = ['a', 'b'];
// I think you're changing the value rather than the actual array...Dig into this more?
arr.push('c');
arr[1] = 'd';

// Copying
const obj2 = { a: { c: 3 }, b: 2};
const obj3 = { 
	//copy
	...obj2,
	//overwrite
	a: {
		//copy
		...obj.a,
		//overwrite
		c: 42
	}
}

const arr2 = ['a', 'b']
// Create and append to copy
const arr3 = arr2.concat('c');
// Copy and mutate
const arr4 = arr2.slice();
arr4.push('c');
