// var str = "Катюша";
// if (~str.indexOf("ор")) {
//     console.log ("yeap!");
// }
// else {console.log ("NOpe ");}
//
// console.log (2<<3)
// console.log (2<<4)
// console.log (2<<6)
// console.log (1<<5)
//
//
// console.log (16>>2)
// console.log (6>>2)
// console.log (20>>2)
//
//
// function isInteger(num) {
//      return (num ^ 0)===num;
//
// }
//
// console.log(isInteger(1));
// console.log(isInteger(1.5));
// console.log(isInteger(-0.5));

// var test = prompt("test", ' ');
// console.log('vam ' + test + ' let ');

/*var name;*/
// name = confirm('Как вас зовут?');
// console.log('Вас зовут' + name );


//
// forgetMeNot: for (var i= 0; i<10; i++){
//     for (var j = 0; j<10; j++){
//         var input = prompt('Koordinates' + i, +j,' ');
//         if (!input) break forgetMeNot;
//
//     }
// }
// alert('Done!');

//
// for (var i = 2; i < 10; i++) {
//     if (i % 2 !== 0) continue;
//     {
//         console.log(i);
//     }
// }

// var i = 0;
//
// while ( i < 3) {
//
//     console.log( "номер " + i + "!" );
//
//     ++i;
// }

// for (var i = 2; i < 10; i++){
//     if(i % 2 ==0) continue;
//     {
//         console.log(i);
//     }
// }


//создание функции, которая выводит циклически числа
// forgetMeNot:
// for (i = 2; i <= 10; i++){
//     for (j = 2; j < i; j++)
//     {
//         if (i % 2 == 0) continue forgetMeNot;
//     }
//     console.log(i);
// }

//вывод необходимого числа посредствам перебора значений
// var num = 2+2;
//
// switch (num){
//     case 3:
//         console.log('too small')
//         break;
//     case 4:
//         console.log('this is it!!')
//         break;
//     case 5:
//         console.log('too much! ')
//         break;
//     default:
//         console.log(' what is it I dont know...');
// }


// вычисление мимнимума 2х чисел
// function min(a, b) {
//     if (a < b){ return a;}
//     else {return b;}
// }
//
// console.log(min(2,5));
// console.log(min(3,-1));
// console.log(min(1,1));

// вычисление степени любого числа
// function pow(x, n) {
//     if (n!=1){
//         return x * pow(x, n-1);
//     }
//     else { return x;}
//
// }
//
// console.log(pow(2,9));

//
// function someTo(n) {
//     if (n < 1){
//         return n+someTo(n-1);
//     }
// else {return n;}
// }
//
// console.log(someTo(1))
// console.log(someTo(2))
// console.log(someTo(3))
// console.log(someTo(4))
// console.log(someTo(1))


// function someTo(n) {
//     var result = 0;
//     for (var i=1; i<=n; i++){
//         result += i;
//
//         }
//         return result;
//     }
//
// console.log(someTo(100))
//
//
//
//
// function sumTo(n) {
//     if (n == 1) return 1;
//     return n + sumTo(n - 1);
// }
//
// console.log( sumTo(100) );

//вычисление факториал рекурсия
// function fact(n) {
//  if    (n != 1) {return  n * fact(n - 1);}
//  else {return n;}
//
// }
//
// console.log(fact(5));
//
// Fibonnachi
//   # 1 # цикл
//
//
// function fib(n) {
//     var a =1;
//     var  b=1;
//     for (var i = 3; i <= n; i++) {
//         var c = a+b;
//         a=b;
//         b=c;
//
//     }
//     return b;
// }
//
// console.log(fib(3));
// console.log(fib(7));
// console.log(fib(77));
//
//   # 2 # рекурсия
//
// function fib(n) {
//     return n <= 1 ? n : fib(n - 1)
//         + (n - 2);}
//
//     console.log(fib(3));
//     console.log(fib(7));
//
//
//
// function g() { return 1; }
//
// console.log(g);
//


/**/


// привидение числа к строке. побитовые операции. основание может быть только <=36
// var n = 101;
// console.log(n.toString(36));
//
// округление битовыми операторами
// console.log(~~15.6);
//
//
//
// округляет до определенного кол-ва символов, которое указано в скобках
// var n = 12.34;
// console.log(n.toFixed(1));
//


/**/


// var price = 6.35;
//
// console.log( price.toFixed(1) ); // 6.3
// console.log( Math.round(price * 10) / 10 ); // 6.4
//
// console.log(9999999999999999) // выведет 10000000000000000 согласно стандарту
//
// меняет регистры букв. выводит только тот символ, который указан в [ ]
// console.log( 'massage'[0].toUpperCase());
// console.log('Kate' [0].toLowerCase());

// function ucFirst(str) {
//     // только пустая строка в логическом контексте даст false
//     if (!str) return str;
//
//     return str[0].toUpperCase() + str.slice(1);
// }
//
// console.log( ucFirst("вася") );


/**/


//доступ через переменную, в которой хранится ключ
// var person = {};
// person.age = 25;
// var key = 'age';
//
// console.log( person[key] );
//
// var user = {};
// user.name = 'Вася';
// user.surname = 'Petrov';
// user.name = 'Sergey';
// delete user.name;


/**/

// var menu = {
//     width: 300,
//     height: 200,
//     title: "Menu"
// };
//
// for (var key in menu) {
//     // этот код будет вызван для каждого свойства объекта
//     // ..и выведет имя свойства и его значение
//
//     console.log( "Ключ: " + key + " значение: " + menu[key] );
// }


/**/


//матрица
// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
//
// console.log( matrix[1][1] ); // центральный элемент. не забываем, что отсчет в массивах с нуля

// var goods = ["apple", "orange","banana"];

// var last = goods [goods.length -1];

// goods.push("MacBook")
//
// console.log(goods);

// for (var i=0; i < goods.length; i++ );

// console.log(goods.length - 1);


/**/

// var styles = ["Jazz", "Blues"];
// styles.push("Rock");
// styles [styles.length-2] = "Classic";
// styles.shift();
// styles.unshift("Rap", "Reggi");
//
//
//
//  console.log(styles);


/**/


//поиск элемента массива. сравнение на идентичность
//
// arr = ["test", 2, 1.5, false];
//
// find(arr, "test"); // 0
// find(arr, 2); // 1
// find(arr, 1.5); // 2
// find(arr, 0); // -1
//
//
//  function find (arr, value)
// {
//
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == value) console.log(i);
//
//     }
// console.log(-1);
// }


/**/


// //функция принмает на вход массив, анализирует другой и создает новый массив в необходимом диапазоне
//
// var arr = [5, 4, 3, 8, 0];
//
// var filtered = filterRange(arr, 3, 5);
//  console.log(filtered);
//
// function filterRange(arr, a, b) {
//
//     var results = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] >= a && arr[i] <= b) {
//             results.push(arr[i]);
//         }
//     }
//     return results;
//
// }


/**/


/*Целое число, большее 1, называется простым, если оно не делится нацело ни на какое другое, кроме себя и 1.

Древний алгоритм «Решето Эратосфена» для поиска всех простых чисел до n выглядит так:

    1.Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
    2.Пусть p=2, это первое простое число.
    3.Зачеркнуть все последующие числа в списке с разницей в p, т.е. 2*p, 3*p, 4*p и т.д. В случае p=2 это будут 4,6,8....
    4.Поменять значение p на первое не зачеркнутое число после p.
    5.Повторить шаги 3-4 пока p2 < n.
    6.Все оставшиеся не зачеркнутыми числа – простые  */


// шаг 1
// var arr = [];
//
// for (var i = 2; i < 100; i++) {
//     arr[i] = true
// }
//
// // шаг 2
// var p = 2;
//
// do {
//     // шаг 3
//     for (i = 2 * p; i < 100; i += p) {
//         arr[i] = false;
//     }
//
//     // шаг 4
//     for (i = p + 1; i < 100; i++) {
//         if (arr[i]) break;
//     }
//
//     p = i;
// } while (p * p < 100); // шаг 5
//
// // шаг 6 (готово)
// // посчитать сумму
// var sum = 0;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//         sum += i;
//     }
// }
//
// alert( sum );


/**/

/*На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

    Задача – найти непрерывный подмассив arr, сумма элементов которого максимальна.

    Ваша функция должна возвращать только эту сумму.*/
//
// function getMaxSubSum(arr) {
//     var maxSum = 0,
//         partialSum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         partialSum += arr[i];
//         maxSum = Math.max(maxSum, partialSum);
//         if (partialSum < 0) partialSum = 0;
//     }
//     return maxSum;
// }
//
// alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
// alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
// alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
// alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
// alert( getMaxSubSum([1, 2, 3]) ); // 6
// alert( getMaxSubSum([-1, -2, -3]) ); // 0



// var names = 'Маша, Петя, Марина, Василий';
//
// var arr = names.split(', ');
//
// for (var i = 0; i < arr.length; i++) {
//     console.log( 'Вам сообщение ' + arr[i] );
// }


//повторение строки. трюк
//console.log(new Array(4).join('la'));


// var origArray = [2,5,4,6,7,8];
//
// var newArray = origArray. slice(0, 1);
//
// console.log(newArray);
//
//
// var str1 = 'Приближается утро.';
// var str2 = str1.slice(4, -1);
//
// console.log(str2);





// var arr = ["Я", "сейчас", "изучаю", "JavaScript"];
//
// // удалить 3 первых элемента и добавить другие вместо них
// arr.splice(0, 3, "Мы", "изучаем");
//
// console.log( arr ) ;// теперь ["Мы", "изучаем", "JavaScript"]
//
//
// var array = ["go", "move", "slow"];
//
// array.splice(0, 2, "fine");
//
// console.log(array);
//
//
//
// var newArr = ["must", "do", "everything"];
//
// newArr.splice(0, 2, "fine");
//
// console.log(newArr);
//
//
// arr = ["Я", "изучаю", "JavaScript"];
//
// // с позиции 2
// // удалить 0
// // вставить "сложный", "язык"
// arr.splice(2, 0, "сложный", "язык");
//
// console.log( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript
//
//
// /**/
//
// //взять все элементы с номера 1
// var go = ["why", "study", "yes"];
//
// console.log(go.slice(1));


/**/
// обратный порядок в массиве

// var arr = [1, 3, 5, 7];
//
// arr.reverse();
//
// console.log(arr);


/**/


// соединяет два массива в новый

// var arr = [1, 4, 6, 7];
//
// var arr1 = arr.concat(1,4,6,8,3);
//
// console.log(arr1);

/**/
//поиск элемента ===. возварщает номер индекса элемента в массиве. перебор элемнтов, поэтому долго, если массив большой
//
// var arr = [1, 4 , true];
//
// console.log(arr.indexOf(3));// -1 тк такого элемента нет
// console.log(arr.indexOf(1));
// console.log(arr.indexOf(true));


//нужно быстро проверять: есть ли в ней какой-то элемент
// var store = {}; // объект для коллекции
//
// var items = ["div", "a", "form"];
//
// for (var i = 0; i < items.length; i++) {
//     var key = items[i]; // для каждого элемента создаём свойство
//     store[key] = true; // значение здесь не важно
// }
// if (store[key])
// {console.log(key)}


//работа с массивом
// var arr = {
//     name : "Petya",
//     age: 23
// };
//
// var keys = Object.keys(arr);
// console.log(keys);
//
//
// function addClass(obj, cls) {
//     var classes = obj.className ? obj.className.split(' ') : [];
//
//     for (var i = 0; i < classes.length; i++) {
//         if (classes[i] == cls) return; // класс уже есть
//     }
//
//     classes.push(cls); // добавить
//
//     obj.className = classes.join(' '); // и обновить свойство
// }
//
// var obj = {
//     className: 'open menu'
// };
//
// addClass(obj, 'new');
// addClass(obj, 'open');
// addClass(obj, 'me');
// console.log(obj.className) ;// open menu new me

/**/

//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// function camelize(str) {
//     var arr = str.split('-');//превращаем строку в массив по разделителю
//     //
//      for (var i = 1; i < arr.length; i++)
//
//      {
//          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);//возвращем первый символ после разделения,
//                                                                     // делаем его заглавным, удаляет второй элемент массива
//      }
//     return arr.join('');//совмещаем полученное без пробела
// }
//
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));


//У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:
//Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
// function removeClass(obj, cls) {
//     var classes = obj.className.split(' ');
//
//     for (var i = 0; i < classes.length; i++) {
//         if (classes[i] == cls) {
//             classes.splice(i, 1); // удалить класс
//             i--; // (*)
//         }
//     }
//     obj.className = classes.join(' ');
//
// }
//
// var obj = {
//     className: 'open menu menu'
// };
//
// removeClass(obj, 'blabla');
// removeClass(obj, 'menu');
//console.log(obj.className); // open

/*В примере выше есть тонкий момент. Элементы массива проверяются один за другим. При вызове splice удаляется текущий, i-й элемент, и те
элементы, которые идут дальше, сдвигаются на его место.

 Таким образом, на месте i оказывается новый, непроверенный элемент.

 Чтобы это учесть, строчка (*) уменьшает i, чтобы следующая итерация цикла заново проверила элемент с номером i. Без нее функция будет работать с ошибками.*/

//
// function filterRangeInPlace1(arr1, a, b){
//
//     for (var i = 0; i<arr1.length; i++)
//     {
//         var val1 = arr1[i];
//         if (val1 < a|| val1 > b) {
//             arr1.slice(i--, 1);
//         }
//     }
// }
//
// var arr = [5, 6, 1, 7, 9];
//
// filterRangeInPlace1(arr, 1, -3);
//
// console.log(arr);//не работает. бесконечный цикл


// var arr = ['is', 'there', 'life', 'in Mars', '?'];
//
// var arrLength = arr.map(function (name) {return name.length});
//
// console.log(arrLength);

// var arr = [1,3,5,7,3,6];
//
// var newArr = arr.reduce(function (sum, current) {return sum + current }, 0);


function Sum(arr) {
    var result = [];
    if(!arr.length) return result;


    arr.reduce(function (sum, item) {result.push(sum) ;
        return sum + item  });

    return result;
}

console.log(Sum([1,4,5,7,2]));


function sayHi() {
    for (var i=0; i<arguments.length; i++){
        console.log('Hi  ' + arguments[i])
    }
}

sayHi('Пятачок');
sayHi("Винни-Пух");


function f(x) {
    'use strict';
    arguments[0] = 5;
    console.log(x);
}
f(1);


