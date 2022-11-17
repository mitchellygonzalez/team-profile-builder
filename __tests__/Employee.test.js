const Employee = require ('../lib/Employee');
const employee = new Employee ('Michi', '1120005', 'Michi1@gmail.com');

test ('values for engineer will be fed in', () => {
    expect(employee.name).toBe('Michi');
    expect(employee.id).toBe('1120005');
    expect(employee.email).toBe('Michi1@gmail.com');
});

test ('here we get the name of the employee', () => {
    expect(employee.getName()).toBe('Michi');
});

test ('here we get the id of the employee"', () => {
    expect(employee.getId()).toBe('1120005');
});

test ('here we get the email of the employee', () => {
    expect(employee.getEmail()).toBe('Michi1@gmail.com');
});

test ('here we get the role of the employee', () => {
    expect(employee.getRole()).toBe('Employee');
});

