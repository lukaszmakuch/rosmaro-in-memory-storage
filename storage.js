exports.default = function () {
  var data;

  return {
    get: function () {return data},
    set: function (newData) {data = newData;}
  };
};
