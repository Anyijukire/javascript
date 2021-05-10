class Mkulima {
    constructor(farms, products, vendors) {
    this.farms = [];
    this.products = [];
    this.vendors= [];
}    
     addFarm(farmId,name, farmer, phone, address){
        var farm =[ farmId= farmId,
            name= name,
            farmer= farmer,
            phone= phone,
            address= address
        ]
           this.farms.push(farm)
           return this.farms
    }
     removeFarm(farmId){
        let remove=this.farms.find(remove=>remove.farmId===farmId)
        return delete this.farms[remove]
        }
     updateFarm(farmId, name, farmer, phone, address){
        var farm =[ farmId= farmId,
            name= name,
            farmer= farmer,
            phone= phone,
            address= address,
        ]
           this.farms.push(farm);
           return this.farms;
    }
     getFarm(farmId){
        
        let farmx = this.farms.find(farmx=>farmx.farmId==farmId);
        return farmx
    }
     addProduct(productId, name, price){
        var product =[ 
            productId= productId,
            name= name,           
            price= price,
        ]
           this.products.push(product)  
           return this.products;
    }
     removeProduct(productId){
        let remove=this.products.find(remove=>remove.productId===productId)
        return delete this.products[remove]
    }
     updateProduct(productId, name, price){
        var product =[ 
            productId= productId,
            name= name,
            price= price,
        ]
           this.products.push(product);
           return this.products;
     }
     getProduct(productId) {
let xproduct=this.products.find(xproduct=>xproduct.productId===productId)
return xproduct;
     }
printProducts() {
for (let produt of this.products){
    console.log( produt.name + " " + produt.price);
}
}
calculateOrderCost(productId,quantity) {
        var cost=quantity*this.products.price;
        console.log(`${productId} costs ${cost}`);
    }
}
let mkulima = new Mkulima([],[],[]);
console.log(mkulima.addFarm(344,"Jade ltd","Frank",46565,"BKR"));
console.log(mkulima.addFarm(455,"kwihingaltd", "efuka",576857,"Kihihi"));

console.log(mkulima.removeFarm(344));
console.log(mkulima.getFarm(344));

console.log(mkulima.addProduct(555,"beans",4000));
console.log(mkulima.addProduct(33,"maize",300));
console.log(mkulima.addProduct(45,"corn",377));
console.log(mkulima.addProduct(7,"rice",50000));

console.log(mkulima.getProduct(555));
mkulima.printProducts();
console.log(mkulima.removeProduct(555));


