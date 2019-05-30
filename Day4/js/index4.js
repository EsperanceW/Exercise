//将Object对象转化为数组
let obj = {
	name:'wang',
	age:19,
	gender:'male'
};
console.log(obj);
let arr = [];
for(let i in obj){
	arr.push(obj[i]);
}
console.log(arr);
//将数组转化为Object对象
let arr2 = [
    {name:"Bob"},
    {name:"Tom"},
    {name:"Charles"}
];
console.log(arr2);
let obj2 = {};
for(let j in arr2){
	 obj2[j] = arr2[j];
}
console.log(obj2);
//将数组转化为JSON对象
let arr3 = [1,2,3];
let jsonArr = JSON.stringify(arr);
console.log(arr3);
console.log(jsonArr);
//将JOSN对象转化为数组
let jsonStr = '[1,2,3,{"a":1}]';
let arr4 = JSON.parse(jsonStr);
console.log(jsonStr);
console.log(arr4);