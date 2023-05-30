const isNumber = (item) => {
  /*exprecion regular */
  return(/[0-9]+/.test(item)) /*verifica si ay una. A-Z */
};

export default isNumber;