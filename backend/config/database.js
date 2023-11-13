const mongoose = require('mongoose');

const connectdatabase=()=>{
    mongoose.connect(process.env.DB_LOCAL_URI, {
        //to resolve deprecation warnings
        useNewUrlParser: true,
        useUnifiedTopology: true
     }).then(con=>{
        console.log(`connected with host:${con.connection.host}`)
     })
}
module.exports=connectdatabase