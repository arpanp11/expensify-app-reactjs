//NOTE: expect(actual value) --> output value from the actual function,
//.to...(our value) --> received value(our exeptation) that we can compare
//with actual function outcomes
//*****OR
//Expected value (actual function value),
//Received value(accepted value that we are want to compare with expected value)
//***** OR
//expect(received).toBe(expected)

const add = (a, b) => a + b;
const square = (a) => a * a;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should square the number', () => {
  const result = square(5);
  expect(result).toBe(25);
});

test('should return zero', () => {
  const result = square(0);
  expect(result).toBe(0);
});

test('should generate greeting from name', () => {
  const result = generateGreeting('Mike');
  expect(result).toBe('Hello Mike!');
});

test('should generate greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});
