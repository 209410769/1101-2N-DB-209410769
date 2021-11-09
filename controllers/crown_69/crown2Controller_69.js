const serviceCrown2Controller_69 = require('./serviceCrown2Controller_69');

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_69.getCategories();
    console.log('results', JSON.stringify(results));
    res.render('crown_69/crown2_69', {
      data: results,
      title: 'Crown2_69',
      name: 'YanBo Lin',
      id: `209410769`,
    });
  } catch (err) {
    console.log('crow2Controller getCategories', err);
  }
};

