// Определение пользовательской функции для расчета по формуле
function calculateFormula(x) {
    if (x <= 7) {
      return -3 * x + 9;
    } else {
      if (x !== 7) {
        return 1 / (x - 7);
      } else {
        throw "Ошибка: деление на ноль!";
      }
    }
  }
  
  // Вызов пользовательской функции и получение результата
  var a = -3;
  var formulaResult = calculateFormula(a);
  
  // Отображение результатов в HTML-документе
  document.write("<h1>Результат расчета формулы:</h1>");
  document.write("<p>Результат формулы: " + formulaResult + "</p>");
  