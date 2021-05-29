const Intern = require('../lib/intern')

test("Sets the school name", () => {
    const testValue = "UCI";
    const employee = new Intern("Foo", 3, "employee@test.com", testValue);
    expect(employee.school).toBe(testValue);
  });
  
  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const employee = new Intern("Foo", 3, "employee@test.com", "UCI");
    expect(employee.getRole()).toBe(testValue);
  });
  
  test("Grabs school using getSchool() function", () => {
    const testValue = "UCI";
    const employee = new Intern("Foo", 3, "employee@test.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
  });
