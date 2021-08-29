const Intern = require("../lib/Intern");
 
test ("confirms that school name is accepted", () => {
   const school = "University";
   const intern = new Intern("Test", 3, "test2@gmail.com", school);
   expect(intern.school).toBe(school);
  });