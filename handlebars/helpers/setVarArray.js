function setVarArray (varName, varValue, options) {
  options.data.root[varName] = JSON.parse(varValue);
}

module.exports = setVarArray
