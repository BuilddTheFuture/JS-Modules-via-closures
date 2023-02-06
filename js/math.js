'use strict';

;(function() {
    
    //1
    function each(list, func) {
        if (Array.isArray(list) === true) {
            list.forEach((element, index) => {
                func1(element, index, list)
            });
        } else {
            for (let key in list) {
                func2(list[key], key, list)
            }
        }        
    }
    function func1(element, index, arr) {
        console.log(element, index, arr);
    };
    function func2(value, key, obj) {
        console.log(value, key, obj);
    };
    window.each = each;
    window.func1 = func1;
    window.func2 = func2;

    //2
    function filter(list, func) {
        func(list);
    }
    function getNewArr(list) {
        let newArr = [];
        list.forEach(element => {
            if (element % 2 == 0) {
                newArr.push(element)
            }
        });
        console.log(newArr);
    }
    window.filter = filter;
    window.getNewArr = getNewArr;

    //3
    function find(list, func) {
        for (let element of list) {
            if(func(element)) {
                return element;
            }
        }
    }
    function getFirstResult(num) {
        return num % 2 == 0;
    }
    window.find = find;
    window.getFirstResult = getFirstResult;

    //4 не смог
    // let listOfPlays = [{title: "Cymbeline", author: "Shakespeare", year: 1611},
    // {title: "The Tempest", author: "Shakespeare", year: 1611},
    // {title: "Cymbeline", author: "Shakespeare", year: 1612},
    // {title: "The Tempest", author: "Shakespeare", year: 1613}];

    // function where(listOfPlays, properties) { 
    //     for (let obj of listOfPlays) {
    //         console.log(obj);
    //         let res = Object.keys(properties).every(
    //             function (key) {
    //                 console.log(key);
    //                 return obj[key] === properties[key]
    //             }
    //         )
    //         if (res === true) {
    //             console.log(obj);
    //         }
    //     }
    // }  
    // window.listOfPlays = listOfPlays;
    // window.where = where;
    // return list.filter(item => // рабочий код 
    //     Object.keys(query).every(key => 
    //     item[key] === query[key])
    // );

    //5
    function every(arr, func) {
        let arr2 = [];
        for (let num of arr) {
            func(num, arr2);
        }
        return arr.length == arr2.length;
    }
    function chekArr(num, arr2) {
        if (num % 2 == 0) {
            arr2.push(num)
        }
    };
    window.chekArr = chekArr;

    //6
    function some(arr) { 
        for (let elem of arr) {
            if (elem == true) {
                console.log(elem + ' - true');
                return true;
            }
        } 
        return false
    }
    

    //7
    function contains(list, value) { 
        for (let elem of list) {
            if (elem == value) {
                return true
            };
        }
        return false
    }

    //8
    let stooges = [{name: 'moe', age: 40}, 
    {name: 'larry', age: 50}, 
    {name: 'curly', age: 60}];
    function pluck(list, propertyName) {
        let arr = [];
        for (let obj of list) {
            for (let key in obj) {
                if (key == propertyName) {
                    arr.push(obj[key])
                }
            }
        }
        return arr;
    }
    window.stooges = stooges;

    //9
    let eployees = [{name: 'moe', age: 40}, 
    {name: 'larry', age: 60}, 
    {name: 'curly', age: 50}];
    function max (list, func) {
        func(list);
    }
    function getMaxAge (list) {
        for (let i = 0; i < eployees.length; i++) {
            if (eployees[i].age > eployees[0].age) {
                eployees[0].age = eployees[i].age;
            }
        }
        console.log(eployees[0]); 
    }
    window.eployees = eployees;
    window.getMaxAge = getMaxAge;
    
    //10
    function min(list, func) {
        func(list);
    }
    function getMinElem(list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i] < list[0]) {
                list[0] = list[i]
            }
        }
        console.log(list[0]);
    }
    window.getMinElem = getMinElem;

    //11
    function groupBy (list, func) {
        func(list)
    };
    function groupByFirstNum(list) {
        let obj = {};
        let keys = [];
        for (let i = 0; i < list.length; i++) {
            keys.push(String(list[i]).split('.')[0]);
            for( let j = 0; j < keys.length-1; j++) {
                if (keys[j] == keys[j+1]) {
                    keys.splice(keys[j+1], 1)
                }
            }
        }
        for (let i of keys) {
            obj[i] = [];
            for (let j = 0; j < list.length; j++) {
                if (String(list[j]).split('.')[0] == i) {
                    obj[i].push(list[j])
                }
            }
        }
        console.log(obj);
    }
    window.groupByFirstNum = groupByFirstNum;


    window.math = {each, filter, find, every, some, contains, pluck, max, min, groupBy}
})();
// console.log(math.find([1, 5, 3, 4, 2], getFirstResult));
// console.log(math.where(listOfPlays, {author: "Shakespeare", year: 1611}));  
// console.log(math.every([2, 4, 8], chekArr, [])); // false
// console.log(math.some([0, ''])); // false
// console.log(math.some([1, 2, 3])); // true
// console.log(math.contains([1, 2, 3], 3));
// console.log(math.pluck(stooges, 'name'));
// math.max(eployees, getMaxAge); // {name: 'moe', age: 60}
// math.min([10, 5, 100, 2, 1000], getMinElem) // 2
math.groupBy([1.2, 1.3, 2.1, 2.4, 11.5, 11.7], groupByFirstNum) // {1: [1.2, 1.3], 2: [2.1, 2.4], 11: [11.5, 11.7]}




































































































































