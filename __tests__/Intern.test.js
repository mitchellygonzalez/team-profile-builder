const Intern = require('../lib/Intern');
const intern = new Intern('Michi', '1120005', 'Michi1@gmail.com','Columbia University')

test('values for engineer will be fed in', () => {
    expect(intern.name).toBe('Michi');
    expect(intern.id).toBe('1120005');
    expect(intern.email).toBe('Michi1@gmail.com');
    expect(intern.school).toBe('Columbia University');
});

test('here we get the name of the intern', () => {
    expect(intern.getName()).toBe('Michi');
});

test('here we get the id of the intern', () => {
    expect(intern.getId()).toBe('1120005');
});

test('here we get the email of the intern', () => {
    expect(intern.getEmail()).toBe('Michi1@gmail.com');
});

test('here we get the role of the intern', () => {
    expect(intern.getSchool()).toBe('Columbia University');
});


test('gets the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern')
});