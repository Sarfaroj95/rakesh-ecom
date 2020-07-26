const { normalizeErrors } = require('../../helper/mongoose');
const Allproduct = require('../../model/product/product')


exports.ProductFunc = function (req, res) {
    const { product_title, description, category, sub_category,
        brand, image, price, sell_price
    } = req.body;

    if (!product_title || !description) {
        res.status(422).send({ errors: [{ title: 'Data missing!', details: 'Provide Product or description' }] });
    }

    if (!category) {
        res.status(422).send({ errors: [{ title: 'Data missing!', details: 'Provide category' }] });
    }

    if (!brand || !image) {
        res.status(422).send({ errors: [{ title: 'Data missing!', details: 'Provide brand or image' }] });
    }

    if (!price || !sell_price) {
        res.status(422).send({ errors: [{ title: 'Data missing!', details: 'Provide price or sell_price' }] });
    }

    const allproduct = new Allproduct({
        product_title,
        description,
        category,
        sub_category,
        brand,
        image,
        price,
        sell_price
    });

    allproduct.save(function (err) {
        if (err) {
            return res.status(422).send({ errors: normalizeErrors(err.errors) });
        }
        return res.json({ msg: 'Add Product successfull' });
    })

    // res.json({username, email});
};

exports.ProductGetFunc = function (req, res) {
    Allproduct.find({})
        .select('product_title')
        .select('description')
        .select('category')
        .select('sub_category')
        .select('brand')
        .select('image')
        .select('price')
        .select('sell_price')
        .exec(function (err, foundData) {

            res.json({ "vegetable": foundData });
        });
}