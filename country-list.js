'use strict'

let data = require('./data.json')

/**
 * Precompute name and code lookups.
 */
let nameMap = {}
let codeMap = {}
data.forEach(function (country) {
  nameMap[country.name.toLowerCase()] = country.code
  codeMap[country.code.toLowerCase()] = country.name
})

module.exports = CountryList
function CountryList () {
  if (!(this instanceof CountryList)) return new CountryList()
};

CountryList.prototype.getCode = function getCode (name) {
  return nameMap[name.toLowerCase()]
}

CountryList.prototype.getName = function getName (code) {
  return codeMap[code.toLowerCase()]
}

CountryList.prototype.getNames = function getNames () {
  return data.map(function (country) {
    return country.name
  })
}

CountryList.prototype.getCodes = function getCodes () {
  return data.map(function (country) {
    return country.code
  })
}

CountryList.prototype.getCodeList = function () {
  return codeMap
}

CountryList.prototype.getNameList = function () {
  return nameMap
}

CountryList.prototype.getData = function getData () {
  return data
}