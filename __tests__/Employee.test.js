const Employee = require ('../lib/Employee');
const employee = new Employee ('Michi', '1120005', 'Michi1@gmail.com');

test ('gets the constructor values for the employee object', () => {
    expect(employee.name).toBe('Michi');
    expect(employee.id).toBe('1120005');
    expect(employee.email).toBe('Michi1@gmail.com');
});

test ('gets the name from the getName() method', () => {
    expect(employee.getName()).toBe('Michi');
});

test ('gets the id from the getId() method', () => {
    expect(employee.getId()).toBe('1120005');
});

test ('gets the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('Michi1@gmail.com');
});

test ('gets the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});

