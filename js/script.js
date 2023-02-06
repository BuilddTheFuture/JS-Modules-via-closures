'use strict';

// + function findInputSum(selectBtn, select1, select2, select3) {
//     let btn = document.querySelector(selectBtn);
//     let inp1 = document.querySelector(select1);
//     let inp2 = document.querySelector(select2);
//     let inp3 = document.querySelector(select3);
//     function func (num1, num2, num3) {
//         alert (+num1 + +num2 + +num3);
//     }
//     btn.addEventListener('click', function() {
//         func(inp1.value, inp2.value, inp3.value)
//     })
// }('#btn', '#inp1', '#inp2', '#inp3') 

//
// + function getSumInputs (selectBtn, select1, select2, select3) {
//     let btn = document.querySelector(selectBtn);
//     let inp1 = document.querySelector(select1);
//     let inp2 = document.querySelector(select2);
//     let inp3 = document.querySelector(select3);

//     function func(inp1, inp2, inp3) {
//         alert(+inp1 + +inp2 + +inp3)
//     }
//     btn.addEventListener('click', function() {
//         func(inp1.value, inp2.value, inp3.value)
//     })
// } ('#btn', '#inp1', '#inp2', '#inp3');

//
// +function getSum (selector) {
//     let parent = document.querySelector(selector);
//     let elem1 = parent.querySelector('#elem1');
//     let elem2 = parent.querySelector('#elem2');
//     let elem3 = parent.querySelector('#elem3');
//     let res = parent.querySelector('#res');
//     let btn = parent.querySelector('#btn');

//     btn.addEventListener('click', function(){
//         res.textContent = +elem1.textContent + +elem2.textContent + +elem3.textContent 
//     })
// }('#parent')

//
// let config = {
// 	root:  '#parent',
// 	type:  'p',
// 	amount: 5
// }
// ;(function(config) {
// 	let parent = document.querySelector(config.root);
// 	for (let i = 1; i <= config.amount; i++) {
// 		let elem = document.createElement(config.type);
// 		elem.textContent = i;
// 		parent.append(elem);
// 	}
// })(config);

// ;(function({root, type, amount}) {
// 	let parent = document.querySelector(root);
// 	for (let i = 1; i <= amount; i++) {
// 		let elem = document.createElement(type);
// 		elem.textContent = i;
// 		parent.append(elem);
// 	}
// })(config);

//
// let config = {
// 	root:  '#parent',
// 	amount: 5
// }
// ;(function({root, type = 'p', amount}) {	
// 	let parent = document.querySelector(root);
// 	for (let i = 1; i <= amount; i++) {
// 		let p = document.createElement(type);
// 		p.textContent = i;
// 		parent.appendChild(p)
// 	}
// })(config)

//
// ;(function() {
// 	let str = 'переменная модуля';
// 	function func() {
// 		console.log('функция модуля');
// 	}
// 	window.func = func;
// })();
// func()

//
// ;( function() {
// 	let str = 'переменная модуля';
// 	function func() {
// 		console.log('функция модуля');
// 	}
// 	function func2() {
// 		console.log(str);
// 	}
// 	window.func = func;
// 	window.func2 = func2;
// })();
// func() // 'функция модуля'
// func2() // 'переменная модуля'
// console.log(str); // ошибка

//
// ;(function (){
// 	function square(num) {
// 		return num ** 2;
// 	};
// 	function cube(num) {
// 		return num ** 3;
// 	}
// 	function avg(arr) {
// 		return sum(arr)/arr.length;
// 	}
// 	function digitsSum(num) {
// 		return sum(String(num).split(''));
// 	}
// 	function sum(arr) {
// 		let res = 0;
// 		for (let elem of arr) {
// 			res += elem;
// 		}
// 		return res;
// 	}
// 	window.math = {square, cube, avg, digitsSum}
// })()
// console.log(math.cube(3));

//
// ;(function() {
// 	function avg1(arr) {
// 		return sum(arr, 1) / arr.length;
// 	}
// 	function avg2(arr) {
// 		return sum(arr, 2) / arr.length;
// 	}
// 	function avg3(arr) {
// 		return sum(arr, 3) / arr.length;
// 	}
// 	// вспомогательная функция
// 	function sum(arr, pow) {
// 		let res = 0;
// 		for (let elem of arr) {
// 			res += elem ** pow;
// 		}
// 		return res;
// 	}
// 	window.math = {avg1, avg2, avg3};
// })()
// console.log(math.avg2([1, 2, 3, 4, 5]));  //11
// console.log(math.avg3([1, 2, 3, 4, 5]));  //45

// each([1, 2, 3], func1);
// each({one: 1, two: 2, three: 3}, func2);
// filter([1, 2, 3, 4, 5, 6, 8, 10, 3, 4], getNewArr) // [2, 4, 6, 8, 10, 4]




















