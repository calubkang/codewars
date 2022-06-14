Student.prototype.total = function () {
    return this.fives * 5 + this.tens * 10 + this.twenties * 20;
}

function mostMoney(students) {
    if (students.length === 1) return students[0].name;

    let totals = new Set();
    students.forEach(student => {
        totals.add(student.total())
    })

    return totals.size === 1 ? 'all' : students.sort((a, b) => b.total() - a.total())[0].name
}

