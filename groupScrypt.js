let group = {
    title: 'Cohort 34.1',
    students: ['Irina', 'Kateryna', 'Marina', 'Oksana', 'Tatiana'],
    
    showList: function() {
        const show = function(name)  {
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show.bind(this));
    }
//====================================================
    // showList: function () {
    //     this.students.forEach(function (name) {
    //         console.log(`${this.title}: ${name}`);
    //     }.bind(this));
    // }
    
    }

console.log(group);
console.log('===================');
//Unmodified
group.showList();
const newGroup = group;
group = null;
console.log('===================');
newGroup.showList();