const fs = require('graceful-fs');
const faker = require('faker');
const sellerInfoDataFile = __dirname + '/../data/sellerInfo.txt';
const wstream = fs.createWriteStream(sellerInfoDataFile);

function writeTenMillionTimes(){
  let i = 10000000;
  write();
  function write(){
    let ok = true;
    do {
      i--;
      if(i === 0){
        const randomName = faker.name.findName();
        const randomEmail = faker.internet.email();
        const raterID = Math.ceil(Math.random()*10000000);
        wstream.write(randomName + ',' + randomEmail + ',' + raterID + '\n', (err) => {
          if(err){
            console.log("There was an err writing the file", err);
          } else {
            console.log('successfully generated data');
          }
      });
    } else {
      const randomName = faker.name.findName();
      const randomEmail = faker.internet.email();
      const raterID = Math.ceil(Math.random()*10000000);
      ok = wstream.write(randomName + ',' + randomEmail + ',' + raterID + '\n', (err) => {
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


