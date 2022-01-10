const Frontpage_69 = require('../../models/midproj_69/Frontpage_69');

exports.getCategories = async (req, res) => {
  try {
    return await Frontpage_69.fetchAll();
  } catch (err) {
    console.log('getCategories', err);
  }
};