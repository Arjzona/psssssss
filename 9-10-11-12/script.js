// Определение строковых переменных
var s1 = "Алексейчук Валерия";
var s2 = "Новооктябрская 14";

// Определение длины строки s2
var lengthS2 = s2.length;
document.write("<h1>Длина строки s2: </h1>" + lengthS2 );

var reversedS1 = s1.split("").reverse().join("");
document.write("<p>Первая строка в обратном порядке: </p>" + reversedS1);

// Преобразование второй строки в нижний регистр
var lowerCaseS2 = s2.toLowerCase();
document.write("<p>Вторая строка в нижнем регистре: </p>" + lowerCaseS2);
