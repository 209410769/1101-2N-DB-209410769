const serviceFenderController_69 = require('./midproj_69/serviceFenderController_69');

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceFenderController_69.getCategories();
    return res.json(data);
  } catch (err) {
    console.log('fenderController getCategories', err);
  }
};

exports.getShop = async (req, res) => {
  try{
    const data = await serviceFenderController_69.getShop();
    return res.json(data);
  } catch (err) {
    res.status(694).json(err);
  }
}

exports.getProductsByCategory = async (req,res) => {
  console.log('category',req.params.category)
  try {
    const data = await serviceFenderController_69.getProductsByCategory(req.params.category);
    //console.log('getProductsByCategory',JSON,stringify(data))
    return res.json(data);
  } catch (err){
    res.status(694).json(err);
  }
}