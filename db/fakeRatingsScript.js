const fs = require('graceful-fs');
const faker = require('faker');
const sellerRatingDataFile = __dirname + '/../data/sellerRating.txt';
const wstream = fs.createWriteStream(sellerRatingDataFile);

function writeTenMillionTimes(){
  let i = 10000000;
  write();
  function write(){
    let ok = true;
    do {
      i--;
      if(i === 0){
        const rating = Math.ceil(Math.random()*5);
        const raterID = Math.ceil(Math.random()*10000000);
        const sellerID = Math.ceil(Math.random()*10000000);
        wstream.write(rating + ',' + raterID + ',' + sellerID + '\n', (err) => {
          if(err){
            console.log("There was an err writing the file", err);
          } else {
            console.log("Data generation complete!");
          } 
      });
    } else {
        const rating = Math.ceil(Math.random()*5);
        const raterID = Math.ceil(Math.random()*10000000);
        const sellerID = Math.ceil(Math.random()*10000000);
      ok = wstream.write(rating + ',' + raterID + ',' + sellerID + '\n', (err) => {
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
//about 80 seconds 

writeTenMillionTimes();