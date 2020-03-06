module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arr = members.map(function getArr(item) {
      if (typeof item == 'string')
      return item.trim().toUpperCase().split('')[0];
    })
    return arr.sort().join('');
  }
  return false;
};