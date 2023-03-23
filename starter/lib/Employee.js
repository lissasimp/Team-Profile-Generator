// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email, role) {
    // or whatever parameters are required
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  getName() {
    return this.name;
    console.log(this.name, "This is the user name");
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    //returns employee
    return "Employee";
  }
}

const userOne = new Employee();
userOne.getName();
userOne.getEmail();
userOne.getId();
userOne.getRole();

module.exports = Employee;
