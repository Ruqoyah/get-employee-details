class Employee {
    constructor(firstName,lastName, age, sex, maritalStatus,level,baseSalary = 5000) {
      this._age = age;
      this._sex = sex;
      this._level = level;
      this._lastName = lastName;
      this._firstName = firstName;
      this._baseSalary = baseSalary;
      this._maritalStatus = maritalStatus;
    }

    get baseSalary () {
      return this._baseSalary;
    }
    get fullName () {
      return `${this._firstName} ${this._lastName}`;
    }

    getNetMonthly () {
      return `${this.fullName} earns a net monthly salary of ` + `${this._baseSalary}` * `${this._level}` + ' naira';
    }

    getLeaveAllowance () {
      return `${this.fullName} is entitled to a leave allowance of `+`${this._baseSalary}` * `${this._level}` * 0.02 + ' naira';
    }

    getPension () {
      return `${this.fullName} is entitled to a pension allowance of ` + `${this._baseSalary}` * `${this._level}` * 0.015 + ' naira';
    }

    getCategory () {
      if(this._level >= 25) {
        return `${this.fullName} is a Director`;
      }
      else if (this._level >= 20) {
        return `${this.fullName} is a Manager`;
      }
      else if(this._level >= 15){
        return `${this.fullName} is at Creativity`;
      }
      else{
        return `${this.fullName} is an Intern`;
      }
    }

    getLeaveDays () {
      if(this._level >= 25){
        return `${this.fullName} is entitled to a leave of 21 days in a year.`;
      }
      else if (this._level >= 20){
        return  `${this.fullName} is entitled to a leave of 14 days in a year.`;
      }
      else if(this._level >= 15){
        return `${this.fullName} is entitled to a leave of 10 days in a year.`;
      }
      else {
        return `${this.fullName} is entitled to a leave of 5 days in a year.`;
      }
    }

    getLoanAllowance () {
      if(this._level >= 15){
        return `${this.fullName} can access a loan of `+ `${this._baseSalary}` * 12 * 0.25 * `${this._level}` + ' naira per annum.';
      }
      else {
        return `${this.fullName} has no loan entitlements.`;
      }
    }

    getBasicInformation () {
      return `${this.fullName} is a ${this._age} years old  ${this._sex} as a ${this._level} at the company.`
    }
    
  }


class Director extends Employee {
    constructor(firstName,lastName, age, sex, maritalStatus, personalOffice) {
      super(firstName,lastName, age, sex, maritalStatus)
      this._personalOffice = 'has a personal office';
      this._level = 25;
    }
   
    getLeaveAllowance () {
      return `${this.fullName} is entitled to a leave allowance of `+`${this._baseSalary}` * `${this._level}` * 0.75 + ' naira';
    }

  }

class Manager extends Employee {
    constructor(firstName,lastName, age, sex, maritalStatus, personalOffice) {
      super(firstName,lastName, age, sex, maritalStatus)
      this._personalOffice = 'has a personal office';
      this._level = 20;
    }
    getLeaveAllowance () {
      return `${this.fullName} is entitled to a leave allowance of `+`${this._baseSalary}` * `${this._level}` * 0.5 + ' naira';
    }
  }

class CreativeDesigner extends Employee {
    constructor(firstName,lastName, age, sex, maritalStatus, personalOffice) {
      super(firstName,lastName, age, sex, maritalStatus)
      this._personalOffice = 'has a personalOffice';
      this._level = 18;
    }
    getLeaveAllowance () {
      return `${this.fullName} is entitled to a leave allowance of `+`${this._baseSalary}` * `${this._level}` * 0.4 + ' naira';
    }
  }

class StoreKeeper extends Employee {
    constructor(firstName,lastName, age, sex, maritalStatus, personalOffice) {
      super(firstName,lastName, age, sex, maritalStatus)
      this._personalOffice = 'has a personalOffice';
      this._level = 15;
    }
  }

module.exports = {
  Employee:Employee,
  Director:Director,
  Manager:Manager,
  CreativeDesigner:CreativeDesigner,
  StoreKeeper:StoreKeeper
}