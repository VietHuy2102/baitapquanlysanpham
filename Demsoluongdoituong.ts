class Application {
    private name:string;
    static count: number = 0;

    constructor(name:string) {
        this.name = name
        Application.count++
    }
}

console.log(Application.count)
let App1 = new Application(`One`)
console.log(Application.count)
let App2 = new Application(`Two`)
console.log(Application.count)