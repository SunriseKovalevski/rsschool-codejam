
//Реализовать функцию make, которую можно вызвать следующим образом:

//make(15)(34, 21, 666)(41)(sum); // return 777

//function sum(a, b) {
    //return a + b;
//}
//Пока переданный аргумент не функция, запоминаем значения аргументов (способы перечислены ниже), затем применяем функцию к аргументам по принципу Array.prototype.reduce, возвращаем полученное значение

//Step	a   	b	    result
//0   	15  	34	    49
//1 	49  	21   	70
//2	    70	    666	    736
//3 	736	    41   	777
//нельзя использовать глобальные переменные, сохранять промежуточные значения в make.smth или в make.prototype

//Cпособы:

//через замыкание
//частичное применение (google: "partial application javascript")
//рекурсия (для гиков smirk_cat)

function sum (a, b) {
	return a + b;
}

function make() {
	let args = [...arguments];

	function f() {
		args.push(...arguments)

		if (args.find(arg => typeof arg === 'function')) {
			const functionPosition = args.map(arg => typeof arg).indexOf('function');
			const result = args
			  .slice(0, functionPosition)
			  .reduce((result, arg) => result + arg, 0)

			return result;
		}

		return f;		
	}

	return f;
}

