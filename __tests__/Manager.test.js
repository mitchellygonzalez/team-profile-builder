const Manager = require('../lib/Manager');
const manager = new Manager ('Michi', '1120005', 'Michi1@gmail.com','3602')

test('gets the constructor values for the manager object', () => {
    expect(manager.name).toBe('Michi');
    expect(manager.id).toBe('1120005');
    expect(manager.email).toBe('Michi1@gmail.com');
    expect(manager.officeNumber).toBe('3602');
});

test('gets the name from the getName() method', () => {
    expect(manager.getName()).toBe('Michi');
});

test('gets the id from the getId() method', () => {
    expect(manager.getId()).toBe('1120005');
});

test('gets the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('Michi1@gmail.com');
});

test('gets the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('3602');
});

test('gets the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager')
});
