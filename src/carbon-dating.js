const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string'){
    return false;
  }

  let act = parseFloat(sampleActivity);
  let coof = (Math.log(MODERN_ACTIVITY/act)*HALF_LIFE_PERIOD)/0.693;

  if (act<=MODERN_ACTIVITY && act>0 ){
    return Math.ceil(coof);
  }
  return false;
};
