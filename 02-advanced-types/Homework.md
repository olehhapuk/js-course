## Завдання 1. Робота з масивом

Є масив і список дій. Допиши код так, щоб в результаті в result був масив: `["apple", "banana", "grape", "peach"]`.

```javascript
const fruits = ['apple', 'orange'];
// Додай "banana" в кінець
// Додай "grape" на початок
// Заміни "orange" на "peach"

console.log(fruits); // ["apple", "banana", "grape", "peach"]
```

## Завдання 2. Робота з рядками

Є рядок, але він виводиться неправильно. Виправ код, щоб у message було:
Hello, my name is John!

```javascript
const name = 'John';
const message = 'Hello, my name is ' + name;
// допиши правильний код, щоб у кінці був знак оклику

console.log(message);
```

## Завдання 3. Умови

Код повинен перевіряти вік і видавати повідомлення:

- якщо age < 18 → "Too young"
- якщо age >= 18 → "Welcome"

```javascript
const age = 16;

// Напиши правильну умову
if (/* ... */) {
  console.log("Too young");
} else {
  console.log("Welcome");
}
```

## Завдання 4. Математичні операції

Є два числа. Потрібно знайти їх середнє арифметичне.

```javascript
const a = 10;
const b = 20;

// Обчисли середнє арифметичне і запиши в змінну avg
const avg = ...;

console.log(avg); // 15
```

## Завдання 5. Робота з масивами та рядками

Є масив чисел. Видали перше і останнє число, а потім об’єднай масив у рядок через дефіс `"-"`.
Очікуваний результат: `"20-30-40"`

```javascript
const numbers = [10, 20, 30, 40, 50];

// видали перший елемент
// видали останній елемент
// перетвори масив у рядок через "-"

const result = ...;
console.log(result); // "20-30-40"
```

## Завдання 6. Умови + логічні оператори

Є дві змінні `isStudent` та `age`:

- якщо `isStudent === true` або `age < 18`, то вивести `"Discount"`
- інакше — `"No discount"`

Протестуй виконання коду з різними значеннями змінних

```javascript
const isStudent = false;
const age = 16;

// напиши умову
if (/* ... */) {
  console.log("Discount");
} else {
  console.log("No discount");
}
```

## Завдання 7. Список студентів

Треба написати програму, яка працює з масивом студентів.
Поступово виконай кроки нижче (код уже частково написаний, треба його дописати).

```javascript
// Початковий масив студентів
const students = ['Olena', 'Ivan', 'Petro'];

// 1. Додай нового студента "Anna" в кінець масиву

// 2. Додай студента "Oleh" на початок масиву

// 3. Видали "Ivan" з масиву за допомогою методу splice (він відрахований)

// 4. Створи змінну group, де всі студенти будуть в одному рядку через кому
const group = ...; // "Oleh, Olena, Petro, Anna"

console.log(students); // ["Oleh", "Olena", "Petro", "Anna"]
console.log(group); // "Oleh, Olena, Petro, Anna"
```
