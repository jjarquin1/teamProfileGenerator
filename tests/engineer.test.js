const Engineer = require("../lib/engineer");

test("Sets the Github account", () => {
    const testValue = "github";
    const employee = new Engineer("Foo", 2, "employee@test.com", testValue);
    expect(employee.github).toBe(testValue);
  });
  
  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Foo", 2, "employee@test.com", "gitHub");
    expect(employee.getRole()).toBe(testValue);
  });
  
  test("Grabs github using getGithub() function", () => {
    const testValue = "github";
    const employee = new Engineer("Foo", 2, "employee@test.com", testValue);
    expect(employee.getGithub()).toBe(testValue);
  });
  