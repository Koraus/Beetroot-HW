// Завдання 3

//   Реалізуй клас Employee, що описує працівника, і 
//створи масив працівників банку.

//   Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку.
//  Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

//  Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().


class Employee {  // Реалізуй клас Employee, що описує працівника
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  };

  set fullName(lastName) {
    [this._firstName, this._lastName] = lastName.split(' ');
  }
  get fullName2() {
    return `${this._firstName} ${this._lastName}`;
  }

};

let employee1 = new Employee('Dmytro', 'Yaroslavovych');
let employee2 = new Employee('Vasyl', 'Ivanovych');
let employee3 = new Employee('Oleg', 'Viktorovych');
let arrEmployee = [employee1, employee2, employee3] //створи масив працівників банку.
// console.log(arrEmployee);



class EmpTable { // Реалізуй клас EmpTable
  constructor(arrEmployee) { //Масив працівників необхідно передавати через конструктор
    this._arrEmployee = arrEmployee;
  }

  get getHtml() { //генерації HTML-коду таблиці зі списком працівників банку.
    let napovnenna = ``;

    for (let i = 0; i < this._arrEmployee.length; i++) {
      napovnenna = napovnenna + `<tr> <td> ${i + 1} </td> <td> ${this._arrEmployee[i]._firstName} </td>  <td>${this._arrEmployee[i]._lastName} </td></tr>`;
    }
    let info = `<table> ${napovnenna}  </table>`
    return info;
  }
  info = `<table> ${napovnenna}  </table>`
       return info;
  }

}

let table = new EmpTable(arrEmployee);
console.log(table.getHtml)//отримувати HTML-код за допомогою методу get
