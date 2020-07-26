const { normalizeErrors } = require('../../helper/mongoose');
const Category = require('../../model/category/category')
const Subcategory = require('../../model/category/sub-category')

//Main Category Post
exports.CategoryFunc = function (req, res) {
    const { category_name } = req.body;

    if (!category_name) {
        res.status(422).send({ errors: [{ title: 'Data missing!', details: 'Provide category!' }] });
    }
    const category = new Category({
        category_name,
    });

    category.save(function (err) {
        if (err) {
            return res.status(422).send({ errors: normalizeErrors(err.errors) });
        }
        return res.json({ msg: 'Add category successfull' });
    })

    // res.json({username, email});
};

// Sub Category Post
exports.SubcategoryFunc = function (req, res) {
    const { sub_category_name } = req.body;

    if (!sub_category_name) {
        res.status(422).send({ errors: [{ title: 'Data missing!', details: 'Provide sub-category!' }] });
    }
    const subcategory = new Subcategory({
        sub_category_name,
    });

    subcategory.save(function (err) {
        if (err) {
            return res.status(422).send({ errors: normalizeErrors(err.errors) });
        }
        return res.json({ msg: 'Add sub category successfull' });
    })

    // res.json({username, email});
};
