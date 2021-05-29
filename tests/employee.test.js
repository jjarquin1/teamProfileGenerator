const Employee = require('../lib/employee')

describe("Employee", () => {
    it("Creates an object with employee data", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });

    it("Creates a name through constructor", () => {
        const name = "JJ";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });

    it("Creats an Id through constructor", () => {
        const testValue = 100;
        const employee = new Employee("Foo", testValue);
        expect(employee.id).toBe(testValue);
    });

    it("Creates an Email through constructor", () => {
        const testValue = "employee@test.com";
        const employee = new Employee("Foo", 11, testValue);
        expect(employee.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Grabs a name using getName() function", () => {
            const testValue = "JJ";
            const employee = new Employee(testValue);
            expect(employee.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Grabs an Id using getId() function", () => {
            const testValue = 100;
            const employee = new Employee("Foo", testValue);
            expect(employee.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Grabs an email using getEmail() function", () => {
            const testValue = "employee@test.com";
            const employee = new Employee("Foo", 11, testValue);
            expect(employee.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const employee = new Employee("JJ", 11, "employee@test.com");
            expect(employee.getRole()).toBe(testValue);
        });
    });
    
});
