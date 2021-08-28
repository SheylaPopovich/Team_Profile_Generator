const Employee = require("../lib/Employee");

test ("confirms that employee class accepts a name", () => {
 const name = "Jamie"
 const employee = new Employee (name)
 expect (employee.name).toBe(name)
});

test("confirm if id is accepted", () =>{
    const name = "Jamie"
    const id = 123
    const employee = new Employee (name,id)
    expect (employee.id).toBe(id)

})