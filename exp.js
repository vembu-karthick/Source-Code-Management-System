const express=require('express');
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri ="mongodb+srv://vembu_karthick:qIJhXNYpyf2XSq5S@cluster0.mslvczx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log('hi');
const app = express();
app.use(cors());
app.use(express.json());
// app.get("/",(req,res)=>{
//     res
// })
app.get("/message", (req, res) => {
    const dbName = "";  
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
  
});
app.listen(8003, () => {
  console.log(`Server is running on port 8003.`);
});
// const home="C:/node_programs/Practice/form.html";
// const user=function(req,res){
//     res.sendFile(home);
// }
// app.get('/',user);
// app.listen(9000);
//const uri = "mongodb+srv://vembu_karthick:qIJhXNYpyf2XSq5S@cluster0.mslvczx.mongodb.net/?retryWrites=true&w=majority";

// async function run() {
//     try {
//        await client.connect();
//         const db=client.db("sample_database");
//         console.log(db.databaseName);
//         await db.renameCollection("sample_collection_1","sample_collection_3");
//         const all= await db.listCollections();
//         while(all.hasNext()){
//             console.log(all.next());
//         }
//          //   console.log(db.listCollections());
//         console.log("Connected correctly to server");
//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);
 // The database to use
 