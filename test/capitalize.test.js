const fnct = require('../code/functions')



test('Capitalize 123 throws an error', () =>{
  expect(() => fnct.capitalize(123)).toThrow("Non String")
});

test('Capitalize "" is ""', () => {
  expect(fnct.capitalize('')).toBe('');
})


test('Capitalize of apple is Apple', () => {
  expect(fnct.capitalize('apple')).toBe("Apple");
})

test('Capitalize of APple is APple', () => {
  expect(fnct.capitalize('APple')).toBe("APple");
})

test('Capitalize of aPple is APple', () => {
  expect(fnct.capitalize('aPple')).toBe("APple");
})


test('Reverse of apple is ellpa', () => {
  expect(fnct.reverseString('apple')).toBe("elppa");
})

test('Reverse of i love pizza is azzip evol i', () => {
  expect(fnct.reverseString('i love pizza')).toBe("azzip evol i");
})

test('Reverse of 48799 throws an error', ()=>{
expect(() => fnct.reverseString(48799)).toThrow()
})

test('Reverse of  "" is ""', () => {
  expect(fnct.capitalize('')).toBe('');
})

test('Addition Checking', () =>{
  expect(fnct.calculator.add(5,3)).toBe(8);
  expect(fnct.calculator.add(0.55,0.35)).toBe(0.9);
  expect(() => fnct.calculator.add('5',3)).toThrow();
  expect(fnct.calculator.add(8.48,3.5)).toBe(11.98);
})


test('Subtraction Checking', () =>{
  expect(fnct.calculator.subtract(5,3)).toBe(2);
  expect(() => fnct.calculator.subtract('5',3)).toThrow();
  expect(fnct.calculator.subtract(8.48,3.5)).toBe(4.98);
})


test('Multiplication Checking', () =>{
  expect(fnct.calculator.multiply(5,3)).toBe(15);
  expect(() => fnct.calculator.multiply('5',3)).toThrow();
  expect(fnct.calculator.multiply(8.48,3.5)).toBe(29.68);
})


test('Division Checking', () =>{
  expect(fnct.calculator.divide(5,3)).toBeCloseTo(1.666666);
  expect(() => fnct.calculator.divide('5',3)).toThrow();
  expect(fnct.calculator.divide(9,4)).toBe(2.25);
})

test('Division Checking', () =>{
  expect(fnct.calculator.divide(5,3)).toBeCloseTo(1.666666);
  expect(() => fnct.calculator.divide('5',3)).toThrow();
  expect(fnct.calculator.divide(9,4)).toBe(2.25);
})

test('Analyze Array Testing', () =>{
  expect(fnct.analyzeArray([1,2,3,4,5])).toStrictEqual({
    min:1,
    max:5,
    average:3,
    length:5
  });
  expect(fnct.analyzeArray([1.5,23,3.3,4.5,12])).toEqual({
    min:1.5,
    max:23,
    average:8.86,
    length:5
  });
  expect(() => fnct.analyzeArray(['1', 2, 10 , 'wow'])).toThrow();
  expect(() => fnct.analyzeArray([])).toThrow("Array");
  expect(fnct.analyzeArray([0])).toEqual({
    min:0,
    average:0,
    length:1,
    max:0,
  })
})

test('Cipher Testing', () => {
  expect(fnct.cipher('a', 1)).toBe('b');
  expect(() => fnct.cipher('abcqqqeqe', 1.5)).toThrow();
  expect(fnct.cipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
  expect(fnct.cipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza');
  expect(fnct.cipher('attack at dawn Brothers and Sister!!', 5)).toBe('fyyfhp fy ifbs gwtymjwx fsi xnxyjw!!');
})