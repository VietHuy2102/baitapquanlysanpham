var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setName = function (name) {
        this.name = name;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Product;
}());
var ManagerProduct = /** @class */ (function () {
    function ManagerProduct() {
        this.listProduct = [];
    }
    ManagerProduct.prototype.add = function (data) {
        this.listProduct.push(data);
    };
    ManagerProduct.prototype.delete = function (index) {
        this.listProduct.splice(index, 1);
    };
    ManagerProduct.prototype.edit = function (product, name, price) {
        product.setName(name);
        product.setPrice(price);
    };
    return ManagerProduct;
}());
var managerProduct = new ManagerProduct();
var product1 = new Product("Huy", 2000);
var product2 = new Product("Uyen", 2001);
var product3 = new Product("Suki", 2002);
managerProduct.add(product1);
managerProduct.add(product2);
managerProduct.add(product3);
managerProduct.delete(0);
console.log(managerProduct);
managerProduct.edit(product2, "tieu uyen", 2003);
console.log(managerProduct);
