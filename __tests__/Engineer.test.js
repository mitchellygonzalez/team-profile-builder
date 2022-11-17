const Engineer = require('../lib/Engineer');
const engineer = new Engineer ('Michi', '1120005', 'Michi1@gmail.com','Michi1')

test('values for engineer will be fed in', () => {
    expect(engineer.name).toBe('Michi');
    expect(engineer.id).toBe('1120005');
    expect(engineer.email).toBe('Michi1@gmail.com');
    expect(engineer.github).toBe('Michi1');
});

test('here we get the name of the engineer', () => {
    expect(engineer.getName()).toBe('Michi');
});

test('here we get the id of the engineer', () => {
    expect(engineer.getId()).toBe('1120005');
});

test('here we get the email of the engineer', () => {
    expect(engineer.getEmail()).toBe('Michi1@gmail.com');
});

test('here we get the github of the engineer', () => {
    expect(engineer.getGitHub()).toBe('Michi1');
});

test('ere we get the role of the engineer', () => {
    expect(engineer.getRole()).toBe('Engineer')
});