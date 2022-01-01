const Category_69 = require('../../models/crown_69/Category_69');
const Shop_69 = require('../../models/crown_69/Shop_69');

// CREATE
exports.create =async(body)=>{
  try {
    return await Shop_69.create(body);
  }catch(err){
    console.log('create',err)
  }
}
// READ
exports.getCategories = async (req, res) => {
  try {
    return await Category_69.fetchAll();
  } catch (err) {
    console.log('getCategories', err);
  }
};

exports.getShop = async (req, res) => {
  try {
    return await Shop_69.fetchAll();
  } catch (err) {
    console.log('getShop', err);
  }
}

exports.getProductsByCategory = async (category) => {
   console.log('service', category);
   
   try {
    const cid = await Category_69.fetchCatIdByName(category);
    const results = await Shop_69.fetchByCatId(cid);
    // console.log('sevv getProductsByCategory', JSON.stringify(results));
    return results;
   } catch(err){
     console.log(err);
   }

}
// UPDATE
exports.update =async(body)=>{
  try {
    return await Shop_69.updateById(body);
  }catch(err){
    console.log('update',err)
  }
}

//DELETE
exports.deleteById = async(id)=>{
  try{
    return await Shop_69.deleteById(id);
  }catch(err){
    console.log(err)
  }
}