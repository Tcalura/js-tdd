import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Main', function() {
  var arr;

  // roda todas as vezes, antes de CADA bloco
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // testar tipos ou se existe (smoke test)
  it('should be an array', function() {
    expect(arr).to.be.a('array');
  });

  it('should have a size of 4 when push another value to the array', function() {
    arr.push(4);
    // console.log(arr.length); // 4
    expect(arr).to.have.lengthOf(4);
  });

  it('should remove the value 3 when use pop in the array', function() {
    // console.log(arr.pop() === 3); // true
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should return true when pop 3 from the array', function() {
    expect(arr.pop() === 3).to.be.true;
  });

  it('should have a size of 2 when pop a value from the array', function() {
    arr.pop();
    console.log(arr.length); // 2
    expect(arr).to.have.lengthOf(2);
  });
});

describe('Calc', function() {

  //smoke tests
  // describe('Smike tests', function(){

  //   it('should exist the calc lib', function(){
  //     expect(calc).to.exist;
  //   });

  //   it('should exist the method `sum`', function(){
  //     expect(calc.sum).to.exist;
  //     expect(calc.sum).to.be.a('function'); // to.be.a.function; nao funcionou
  //   });

  //   it('should exist the method `sub`', function(){
  //     expect(calc.sub).to.exist;
  //     expect(calc.sub).to.be.a('function');
  //   });

  //   it('should exist the method `div`', function(){
  //     expect(calc.div).to.exist;
  //     expect(calc.div).to.be.a('function');
  //   });

  //   it('should exist the method `mult`', function(){
  //     expect(calc.mult).to.exist;
  //     expect(calc.mult).to.be.a('function');
  //   });

  // });

  describe('Sum', function() {
    it('should return 4 when `sum(2,2)`', function() {
      expect(sum(2,2)).to.be.equal(4);
    });
  });

  describe('Sub', function() {
    it('should return 4 when `sub(6,2)`', function() {
      expect(sub(6,2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6,10)`', function() {
      expect(sub(6,10)).to.be.equal(-4);
    });
  });

  describe('Div', function() {
    it('should return 3 when `div(6,2)`', function() {
      expect(div(6,2)).to.be.equal(3);
    });

    it('should return `Não é possivel divisão por zero!` when divide by 0', function() {
      expect(div(6,0)).to.be.equal('Não é possivel divisão por zero!');
    });
  });

  describe('Mult', function() {
    it('should return 12 when `mult(6,2)`', function() {
      expect(mult(6,2)).to.be.equal(12);
    });
  });

});
