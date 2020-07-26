const express = require("express");
const router = express.Router();
const user = require('../controllers/user/userCtrl');
const admin = require('../controllers/admin/adminCtrl')
const category = require('../controllers/category/categoryCtrl')
const product = require('../controllers/product/productCtrl')


router.post("/register", user.Register)
router.post("/login", user.Login)

router.post('/course', admin.Course)
router.get('/coursedata', admin.CourseGet)

router.post('/category', category.CategoryFunc)

router.post('/subcategory', category.SubcategoryFunc)

router.post('/addproduct', product.ProductFunc)
router.get('/getproduct', product.ProductGetFunc)





// router.post('/item', admin.AddItem)
// router.get('/itemdata', admin.ItemGet)
// router.get('/itemdata/:id', admin.ItemById)



router.get('/user/:id', user.UserGet)
router.post('/user/:id', user.updated)

router.post('/pro', admin.AddProd)
router.get('/pro/:id', admin.GetPro)










router.get("/get", user.test)




module.exports = router;