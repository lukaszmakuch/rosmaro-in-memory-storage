module.exports = () => {
  let data;

  return {
    get: () => data,
    set: newData => {data = newData;}
  };
};
