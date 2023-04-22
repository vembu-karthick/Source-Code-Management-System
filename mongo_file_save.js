const express=require('express');
const cors = require("cors");
const multer = require('multer');
const {jsonData}=require('./JSONDataStruct.js');
const GridFsStorage = require('multer-gridfs-storage');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
const uri ="mongodb+srv://vembu_karthick:0sJ98iEuQsh3qjxY@cluster0.mslvczx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const sampleJsonData={
    userName:"",
    repos:[
        {
        repoName:"",
        size:"",
        repoFiles:[{
            fileName:"",
            fileSize:"",
            content:"",
            noOfCommits:"",
            version:[{
                content:"",
                dateTime:"",
                commiterName:"",
                }],
        }],
        stars:""
        }
    ],
    password:"",
    commits:[{
        repoName:"",
        fileName:"",
        commiter:"",
        dateTime:"",
        content:""
    }]
};
const newData=jsonData;
console.log(newData);
async function run() {
        try {
                console.log('hi');
                await client.connect();
                console.log('Connected to MongoDB Atlas');
                const collection = client.db('database1').collection('collection1');
                // const collection=db.createCollection('collection1', function(err, collection) {
                //     if (err) throw err;
                //     console.log('Collection created!');
                //   });
                try{
                    await collection.insertOne(newData);
                }
                catch(err){
                    console.log(err.stack);
                }
               // res.send({result:"okay"})
            }
        catch (err) {
            console.log(err.stack);
        }    
        finally {
            await client.close();
            }
        }        
       run().catch(console.dir);
