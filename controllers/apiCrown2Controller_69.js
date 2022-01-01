const serviceCrown2Controller_69 = require('./crown_69/serviceCrown2Controller_69');

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_69.getCategories();
    return res.json(data);
  } catch (err) {
    console.log('crow2Controller getCategories', err);
  }
};

exports.getShop = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_69.getShop();
    return res.json(data);
  } catch (err) {
    res.status(404).json(err);
  }
}

exports.getProductsByCategory = async (req, res) => {
  console.log('category', req.params.category);
  try {
     const data = await serviceCrown2Controller_69.getProductsByCategory(req.params.category);
    //  console.log('getProductsByCategory', JSON.stringify(data));
     return res.json(data);
  } catch (err) {
    res.status(404).json(err);
  }
}