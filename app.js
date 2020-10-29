// const car = {
//     make: 'Tesla',
//     model: 'Model S',
//     color: 'blue'
// }

// function start() {
//     return 'Outta here...';
// }

// function stop() {
//     return 'Push the brakes';
// }


const car = {
    make: 'Tesla',
    model: 'Model S',
    color: 'blue',
    start: function() {
        return 'Outta here...'
    },
    stop: function() {
        return 'Push the brakes';
    }
};

console.log(car.start());

const employee = {
    name: 'Rome Bell',
    role: 'SEI Instructor',
    salary: 100000
}

function salaryIncrease(salary) {
    return salary * 1.1;
}

console.log(salaryIncrease(employee.salary));

employee.salary = salaryIncrease(employee.salary);

console.log(employee);