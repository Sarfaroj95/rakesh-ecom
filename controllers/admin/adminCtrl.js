const Course = require('../../model/admin/courses')
const Product = require('../../model/admin/products')
const { normalizeErrors } = require('../../helper/mongoose');


exports.Course = function (req, res) {
    const data = req.body;
    const course = new Course(data);
    course.save(function (err) {
        if (err) {
            return res
                .status(422)
                .send({ errors: normalizeErrors(err.errors) });
        } else {
            return res.json({ msg: 'sucess' });
        }
    });
}

exports.CourseGet = function (req, res) {
    Course.find({})
        .select('title')
        .select('dec')
        .select('image')
        .select('video_path')
        .select('category')
        .select('item_id')
        .exec(function (err, foundCou) {

            res.json(foundCou);
        });
}





exports.AddProd = function (req, res) {
    // const product = new Product({
    //     title: req.body.title,
    //     dec: req.body.dec,
    //     auther: req.body.auther,
    //     ttime_hrs: req.body.ttime_hrs,
    //     price: req.body.price,
    //     videos: [
    //         {
    //             title: req.body.title,
    //             dec: req.body.dec,
    //             path: req.body.path,
    //             timeMin: req.body.timeMin

    //         }
    //     ]
    // });

    const data = req.body
    const product = new Product(data)

    product.save(function (err) {
        if (err) {
            return res
                .status(422)
                .send({ errors: normalizeErrors(err.errors) });
        } else {
            return res.json({ msg: 'sucess' });
        }
    });
}

// exports.ItemGet = function (req, res) {
//     Item.find({})
//         .select('title')
//         .select('category')
//         .select('videos')
//         .exec(function (err, foundCou) {

//             res.json(foundCou);
//         });
// }

exports.GetPro = function (req, res) {
    Product.findById({ _id: req.params.id })
        .select('title')
        .select('dec')
        .select('auther')
        .select('ttime_hrs')
        .select('price')
        .select('videos')
        .exec(function (err, foundCou) {
            res.json(foundCou);
        });
}

