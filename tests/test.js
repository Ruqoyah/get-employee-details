const assert = require('chai').assert;
const expect = require('chai').expect
const should = require('chai').should
const StoreKeeper = require('../src/main.js').StoreKeeper;
const Employee = require('../src/main.js').Employee;
const Manager = require('../src/main.js').Manager;
const CreativeDesigner = require('../src/main.js').CreativeDesigner;
const Director = require('../src/main.js').Director;

  const ruqoyah = new Employee ('Ruqoyah','Odukoya',22,'female','single',15);
  const bukky = new Manager ('Bukky','Brown',32,'female','married');
  const joy = new CreativeDesigner ('Joy','Akpan',27,'female','single');
  const charles = new Director ('Charles','Russell',42,'male','married');
  const lukman = new StoreKeeper ('Lukman','Adesina',45,'male','married');

  describe('Check for implementation of inheritance', () => {
    describe('Ensure inheritance across all subclass', () => {

      it('All Employees subclass should have a base salary of 5000', () => {
        expect(ruqoyah.baseSalary).to.be.equal(5000);
      });

      it('All Employees subclass should have a base salary of 5000', () => {
        expect(bukky.baseSalary).to.be.equal(5000);
      });

      it('All Employees subclass should have a base salary of 5000', () => {
        expect(joy.baseSalary).to.be.equal(5000);
      });

      it('All Employees subclass should have a base salary of 5000', () => {
        expect(charles.baseSalary).to.be.equal(5000);
      });

      it('All Employees subclass should have a base salary of 5000', () => {
        expect(lukman.baseSalary).to.be.equal(5000);
      });

    })
  })

  describe('Test for methods in base classes', () => {
    describe('Ensure all methods are functional', () => {

      it('ruqoyah.fullName should return Ruqoyah Odukoya', () => {
        expect(ruqoyah.fullName).to.be.equal('Ruqoyah Odukoya');
      });

      it('joy.getNetMonthly() should return Joy Akpan earns a net monthly salary of 90000 naira', () => {
        expect(joy.getNetMonthly()).to.be.equal('Joy Akpan earns a net monthly salary of 90000 naira');
      });

      it('charles.getPension() should return Charles Russel is entitled to a pension allowance of 1875 naira', () => {
        expect(charles.getPension()).to.be.equal('Charles Russell is entitled to a pension allowance of 1875 naira');
      });

      it('bukky.getCategory() should return Bukky Brown is a Manager', () => {
        expect(bukky.getCategory()).to.be.equal('Bukky Brown is a Manager');
      });

      it('bukky.getLeaveDays() should return Bukky Brown is entitled to a leave of 14 days in a year.', () => {
        expect(bukky.getLeaveDays()).to.be.equal('Bukky Brown is entitled to a leave of 14 days in a year.');
      });

      it('ruqoyah.getLoanAllowance() should return Ruqoyah Odukoya can access a loan of 225000 naira per annum.', () => {
        expect(ruqoyah.getLoanAllowance()).to.be.equal('Ruqoyah Odukoya can access a loan of 225000 naira per annum.');
      });

      it('joy.getLeaveAllowance() should return Joy Akpan is entitled to a leave allowance of 36000 naira', () => {
        expect(joy.getLeaveAllowance()).to.be.equal('Joy Akpan is entitled to a leave allowance of 36000 naira');
      });

      it('ruqoyah.personalOffice to be undefined', () => {
        expect(ruqoyah.personalOffice).to.be.equal(undefined);
      });

    })
  })