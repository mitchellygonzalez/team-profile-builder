const Engineer = require('../lib/Engineer');
const engineer = new Engineer ('Michi', '1120005', 'Michi1@gmail.com','Michi1')

test('gets the constructor values for the eningeer object', () => {
    expect(engineer.name).toBe('Michi');
    expect(engineer.id).toBe('1120005');
    expect(engineer.email).toBe('Michi1@gmail.com');
    expect(engineer.github).toBe('Michi1');
});

test('gets the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Michi');
});

test('gets the id from the getId() method', () => {
    expect(engineer.getId()).toBe('1120005');
});

test('gets the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('Michi1@gmail.com');
});

test('gets the office number from the getGitHub() method', () => {
    expect(engineer.getGitHub()).toBe('Michi1');
});

test('gets the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer')
});