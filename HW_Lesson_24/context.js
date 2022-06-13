let group = {
    title: 'Java 47',
    students: ['Maria', 'Anastasia', 'Olga', 'Tatiana'],
    showList: function () {
        const show = (name) => {
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show);
    }
}

//Unmodifyed
group.showList();
const newGroup = group;
group = null;
console.log('=======================');
newGroup.showList();