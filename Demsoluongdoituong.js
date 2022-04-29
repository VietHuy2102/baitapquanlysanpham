var Application = /** @class */ (function () {
    function Application(name) {
        this.name = name;
        Application.count++;
    }
    Application.count = 0;
    return Application;
}());
console.log(Application.count);
var App1 = new Application("One");
console.log(Application.count);
var App2 = new Application("Two");
console.log(Application.count);
