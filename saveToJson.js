const fs = require('fs');
const shortid = require('shortid');


function saveToJson(globalOrder) {
  let data = JSON.stringify(globalOrder);
  let name = globalOrder.fullName.split(' ')[0];
  let filename = name + '-' + shortid.generate();
  fs.writeFileSync('orders/' + filename + '.json', data);
};

module.exports = saveToJson;
