const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

 // find all tags
  // be sure to include its associated Product data
router.get('/', (req, res) => {
  Tag.findAll({
    inculde: [{
      model: Product,
      through: ProductTag,
      as: 'products'
    }]
  })
  .then(data => res.json(data))
  .catch(err => {
    console.log (err);
    res.status(500).json(err);
  });
});

// find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    inculde: [{
      model: Product,
      through: ProductTag,
      as: 'products'
    }]
  })
  .then(data => res.json(data))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create a new tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(data => res.json(data))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
