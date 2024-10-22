var Student = /** @class */ (function () {
    function Student(name, id) {
        this.name = name;
        this.id = id;
    }
    Student.prototype.display = function () {
        console.log("name ".concat(this.name, " id ").concat(this.id));
    };
    return Student;
}());
var std = new Student("Golam Mustafa", 333);
std.id = 33;
std.name = "golam mustfa";
std.display();
