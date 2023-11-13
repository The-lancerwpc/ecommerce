
const connectdatabase=require('./config/database')
const aap=require('./aap')
const dotenv=require('dotenv');
// Dotenv is a zero-dependency module that
//  loads environment variables from a .env file
//   into process.env. Storing configuration
//    in the environment separate from code
//     is based on The Twelve-Factor App methodology.
//https://www.npmjs.com/package/dotenv




//setting up config file
dotenv.config({path:'backend/config/config.env'})

//connecting to db
connectdatabase();

aap.listen(process.env.PORT,()=>{
    console.log(`server started on port: ${process.env.PORT} in ${process.env.NODE_ENV}  mode.`)
    // process starting on 4000 port and production mode defined
    // in config.env folder
})