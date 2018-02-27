const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello, ${name}!`;

test("adding two numbers", () => {
    const result = add(2, 5);

    const expected = 7;    
    expect(result).toBe(expected);
});

test("generating greeting", () => {
    const result = generateGreeting("John");

    const expected = "Hello, John!";    
    expect(result).toBe(expected);
});

test("generating greeting for no name", () => {
    const result = generateGreeting();

    const expected = "Hello, Anonymous!";    
    expect(result).toBe(expected);
});