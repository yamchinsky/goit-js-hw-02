// Форматирование строки в зависимости от длинны строки
// Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength
// символов и добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.

1  вариант решения
function formatString(string, maxLength) {
  if (maxLength === null) {
    if (string.length > 40) {
      string = string.substring(0, 40) + '...';
    } else string = string;
  } else if (string.length > maxLength) {
    string = string.substring(0, maxLength) + '...';
  } else string = string;

  return string;
}

2  вариант решения
function formatString(string, maxLength = 40) {
  if (string.length > maxLength) {
    string = string.substring(0, maxLength) + '...';
  } else string = string;
  return string;
}

3  вариант решения
function formatString(string, maxLength = 40) {
  if (string.length < maxLength) {
    return string;
  } else {
    string = string.slice(0, maxLength) + '...';
    return string;
  }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//('Curabitur ligula sapien, tincidunt non.');

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//('Vestibulum facilisis, purus nec pulvinar...');

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
//'Vestibulum facilisis, purus ne...');

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//('Curabitur ligula sapien, tincidunt non.');

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//('Vestibulum facilisis, purus nec pulvinar...');

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
//('Vestibulum facilisis, purus ne...');

Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
Если длина больше 40 символов, то функция обрезает строку до 40 - ка символов
и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

const formatString = function (string) {
  let result = "";
  if (string.length > 40) {
    result = `${string.substr(0, 40)}...`;
  } else {
    result = `${string}`;
  }
  return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
