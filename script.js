/*let obj = {a: 1, b: 2, c: 3};
console.log(obj.c);
console.log(obj["c"]); */


/*let obj = {
 Colea: '1000',
 Vasea: '500', 
 Petea: '200'};
 console.log(obj.Colea);
 console.log(obj.Petea);*/

 /*let obj = {
   0 : 'luni' ,
   1 : 'marti' , 
   2 : 'miercuri' ,
   3 : 'joi' ,
   4 : 'Vineri' , 
   5 : 'Simbata',
   6 : 'Duminica',
  
 }
 
console.log(obj["6"]);
let day = 3;
console.log(obj[day]);*/


/*4. Напишите функцию на JavaScript, чтобы перечислить свойства объекта JavaScript.
Пример объекта:
let student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Пример вывода: name, sclass, rollno*/

/*let student = { 
  name : "David Rayy",
   sclass : "VI", 
   rollno : 12 };
 
  function proper(){
    for(let key in student){
      console.log(key);
    }
  }
  proper();*/


 /*5. Напишите функцию на JavaScript, чтобы удалить свойство rollno из следующего объекта. Также выведите объект в console.log() до или после удаления свойства. Пример объекта:
let student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };*/


/*let student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 };

  function del(sudent){
    delete(student.rollno);
    console.log(student);
  }

  del(student );*/


  /*6. Напишите функцию на JavaScript, чтобы получить длину объекта JavaScript.
Пример объекта:
let student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 }; */



/*let student = {
  name : "David Rayy", 
  sclass : "VI",
  rollno : 12 };

  function leng(){
     let num = ["name : David Rayy", "class : VI", "rollno : 12"];
    console.log(num.length);
  }

  leng();*/


 /* 7. Напишите функцию на JavaScript для отображения статуса чтения (т.е. отображения названия книги, имени автора и статуса чтения) для следующих книг:
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
(Внутри функции используйте for...in) */


/*let library = [
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


  function read(library){
   for(let key in library) {
   console.log(library[key]);
   }
  }

read(library);



function read(library){
  for(let i = 0; i < library.length; i++){
for(let key in library[i]) {
  console.log(library[i][key]);
  }
  }
 }*/
