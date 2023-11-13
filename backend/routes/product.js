const express=require('express')
const router = express.Router();

//require and store in get product route
const{getproducts}=require('../controllers/productcontroller')
// ../ is used to get out of the current folder
// bcz productcontroller.js file is in another folder called controllers

//get req to route
router.route('/products').get(getproducts);
module.exports = router;