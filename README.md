# homework4
objects
 1.Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:

let obj = {a: 1, b: 2, c: 3};

2. Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.

let obj = {Коля: '1000', Вася: '500', Петя: '200'};

 3. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - нулевой и т.д.). Выведите на экран текущий день недели.

 Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.

4. Напишите функцию на JavaScript, чтобы перечислить свойства объекта JavaScript.
Пример объекта:
let student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Пример вывода: name, sclass, rollno
5. Напишите функцию на JavaScript, чтобы удалить свойство rollno из следующего объекта. Также выведите объект в console.log() до или после удаления свойства. Пример объекта:
let student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

6. Напишите функцию на JavaScript, чтобы получить длину объекта JavaScript.
Пример объекта:
let student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

7. Напишите функцию на JavaScript для отображения статуса чтения (т.е. отображения названия книги, имени автора и статуса чтения) для следующих книг:
let library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}];
(Внутри функции используйте for...in)
