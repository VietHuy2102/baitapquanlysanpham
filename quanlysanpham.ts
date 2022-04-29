class Product{
    private name : string;
    private price : number;

    constructor(name:string,
                price : number) {
        this.name = name;
        this.price = price;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    setName(name: string):void{
        this.name = name
    }
    setPrice(price: number){
        this.price = price
    }
}
class ManagerProduct {
    listProduct : Product[] = [];

    add(data: Product){
        this.listProduct.push(data)
    }

    delete(index: number){
        this.listProduct.splice(index,1)
    }

    edit(product:Product, name : string, price : number ){
        product.setName(name)
        product.setPrice(price)

    }

}
let managerProduct = new ManagerProduct()
let product1 = new Product(`Huy`, 2000);
let product2 = new Product(`Uyen`, 2001);
let product3 = new Product(`Suki`, 2002);
managerProduct.add(product1);
managerProduct.add(product2);
managerProduct.add(product3);

managerProduct.delete(0)
console.log(managerProduct)
managerProduct.edit(product2,`tieu uyen`, 2003)
console.log(managerProduct)

