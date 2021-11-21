const Frontpage_69 = require('../../models/midproj_69/Frontpage_69');

exports.getCategories = async (req, res) => {
  try {
    return await Frontpage_69.fetchAll();
  } catch (err) {
    console.log('getCategories', err);
  }
};

exports.getShop = async(req,res)=> {
  try {
    return await Shop_69.fetchAll();
  } catch (err) {
    console.log('getShop', err);
  }
}

exports.getProductsByCategory = async (category) => {
  console.log('service',category);
  try {
  const cid = await Frontpage_69.fetchCatIdByName(category);
  const results = await Shop_69.fetchByCatId(cid);
  //console.log('service getProductsByCategory',JSON.stringify(results));
  return results;
  } catch(err){
    console.log(err);
  }
}