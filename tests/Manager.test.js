 const Manager = require("../lib/Manager");
 
 test ("confirms that an office number is accepted", () => {
    const officeNumber = 1234
    const manager = new Manager("Test", 1, "test@gmail.com", officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
   });