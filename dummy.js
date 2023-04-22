const express=require('express');
const cors = require("cors");
const multer = require('multer');
const bodyParser = require('body-parser')
const GridFsStorage = require('multer-gridfs-storage');
const { MongoClient, ServerApiVersion } = require('mongodb');
const fs=require('fs');
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.post("/upload",(req,res)=>{
     console.log(req.body);
     const dbName = "test1";  
  var col;
  var myDoc;            
  async function run() {
    try {
        await client.connect();
        const db = client.db(dbName);
        // Use the collection "people"
        const col = db.collection("people");
        console.log(db.databaseName);
        // Find one document
          myDoc = await col.findOne({views:1250000});
        console.log(myDoc);
        res.send(myDoc);
        } 
    catch (err) {
        console.log(err.stack);
    }

    finally {
        await client.close();
    }
}
  console.log('bef');
  console.log(myDoc);
  run().catch(console.dir);
  console.log('aef');
  console.log(myDoc);
  res.send({re:"Hello response"});
});
app.listen(8003, () => {
  console.log(`Server is running on port 8003.`);
});
