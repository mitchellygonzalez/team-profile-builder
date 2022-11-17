const Manager = require('../lib/Manager');
const manager = new Manager ('Michi', '1120005', 'Michi1@gmail.com','3602')

test('values for engineer will be fed in', () => {
    expect(manager.name).toBe('Michi');
    expect(manager.id).toBe('1120005');
    expect(manager.email).toBe('Michi1@gmail.com');
    expect(manager.officeNumber).toBe('3602');
});

test('here we get the name of the manager"', () => {
    expect(manager.getName()).toBe('Michi');
});

test('getting the id of the manager', () => {
    expect(manager.getId()).toBe('1120005');
});

test('getting the email of the manager', () => {
    expect(manager.getEmail()).toBe('Michi1@gmail.com');
});

test('getting the office number of the manager', () => {
    expect(manager.getOfficeNumber()).toBe('3602');
});

test('getting the role of the manager', () => {
    expect(manager.getRole()).toBe('Manager')
});
