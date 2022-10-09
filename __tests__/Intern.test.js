const Intern = require('../lib/Intern');
const intern = new Intern('Michi', '1120005', 'Michi1@gmail.com','Columbia University')

test('get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('Michi');
    expect(intern.id).toBe('1120005');
    expect(intern.email).toBe('Michi1@gmail.com');
    expect(intern.school).toBe('Columbia University');
});

test('gets the name from the getName() method', () => {
    expect(intern.getName()).toBe('Michi');
});

test('gets the id from the getId() method', () => {
    expect(intern.getId()).toBe('1120005');
});

test('gets the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('Michi1@gmail.com');
});

test('gets the school from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Columbia University');
});


test('gets the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern')
});