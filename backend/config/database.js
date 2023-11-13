const mongoose = require('mongoose');

const connectdatabase=()=>{
    mongoose.connect(process.env.DB_LOCAL_URI, {
        //to resolve deprecation warnings
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family:4,

        //family 4 bcz for  Enabling the IPV6 that MongoDB has disabled by default.
        //mongodb://127.0.0.1/test (ipv4)
        //the localhost alias resolves to IPv6 address
        //mongodb://localhost:27017/test(ipv6) see in config.env file
     }).then(con=>{
        console.log(`connected with host:${con.connection.host}`)
     })
}
module.exports=connectdatabase