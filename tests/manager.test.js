const Manager = require('../lib/manager')

test("Creates an office number using constructor", () => {
    const testValue = 100;
    const manager = new Manager("Foo", 1, "manaer@test.com", testValue);
    expect(manager.officeNumber).toBe(testValue);
  });
  
  test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const manager = new Manager("Foo", 1, "manager@test.com", 100);
    expect(manager.getRole()).toBe(testValue);
  });
  
  test("grabs the office number using getOffice() function", () => {
    const testValue = 100;
    const manager = new Manager("Foo", 1, "manager@test.com", testValue);
    expect(manager.getOfficeNumber()).toBe(testValue);
  });
  