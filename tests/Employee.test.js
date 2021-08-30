const Employee = require("../lib/Employee");

test ("confirms that employee class accepts a name", () => {
 const name = "Jamie"
 const employee = new Employee (name)
 expect(employee.name).toBe(name)
});

test("confirms if id is accepted", () =>{
    const name = "Jamie"
    const id = 123
    const employee = new Employee (name,id)
    expect(employee.id).toBe(id)

});

test("confirms if email is accepted", () =>{
    const name = "Jamie"
    const id = 123
    const email = "test@gmail.com"
    const employee = new Employee (name,id, email)


    expect(employee.email).toBe(email)

});




