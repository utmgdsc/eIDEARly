//import Realm from "realm";
//import {RealmContext, Material} from "./RealmSetup/RealmContext";
//const {RealmProvider} = RealmContext;


export function getMaterialsText(collection, name){

        //const collection = collection;

        let m = "";
        
        /*
        const { MongoClient, ServerApiVersion } = require('mongodb');
        const uri = "mongodb+srv://elDearly:elDearly@cluster0.u8qivjq.mongodb.net/?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        client.connect(err => {
          const collection = client.db("eldearly").collection(collection);
          // perform actions on the collection object
          collection.findOne({title: name}, function(err, result) {
                if (err) throw err;
                m = result.content;
                db.close();
              });
          client.close();
        });
        */

        //let m = materials[id-1];
        return m;
}
