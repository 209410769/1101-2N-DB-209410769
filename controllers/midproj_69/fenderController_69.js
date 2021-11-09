const serviceFenderController_69 = require('./serviceFenderController_69');

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceFenderController_69.getCategories();
    console.log('results', JSON.stringify(results));
    res.render('crown_69/crown2_69', {
      data: results,
      title: 'midproj_69',
      name: 'YanBo Lin',
      id: `209410769`,
    });
  } catch (err) {
    console.log('crow2Controller getCategories', err);
  }
};

