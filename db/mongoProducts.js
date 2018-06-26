const fs = require('graceful-fs');
const faker = require('faker');
const productInfoDataFile = __dirname + '/../data/mongoProducts.txt';
const wstream = fs.createWriteStream(productInfoDataFile);

let indexID = 1; 

index = () => (
  indexID++
);

function writeTenMillionTimes(){
  let i = 10;
  write();
  function write(){
    let ok = true;
    do {
      i--;
      if(i === 0){
        const productName = faker.commerce.productName();
        const productPrice = faker.commerce.price();
        const productDescription = faker.lorem.sentences();
        const sellerID = Math.ceil(Math.random()*10000000);
        wstream.write(index() + ',' + productName + ',' + productPrice + ',' + productDescription + ',' + sellerID + '\n', (err) => {
          if(err){
            console.log("There was an err writing the file", err);
          } else {
            console.log('successfully generated data');
          }
      });
    } else {
        const productName = faker.commerce.productName();
        const productPrice = faker.commerce.price();
        const productDescription = faker.lorem.sentences();
        const sellerID = Math.ceil(Math.random()*10000000);
        ok = wstream.write(index() + ',' + productName + ',' + productPrice + ',' + productDescription + ',' + sellerID + '\n', (err) => {
        if(err){
          console.log("There was an err writing the file", err);
          } 
       })
     }
   } while (i > 0 && ok);
   if(i > 0){
     wstream.once('drain', write);
   }
  }
};

// writeTenMillionTimes();


