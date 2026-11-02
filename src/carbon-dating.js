const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  const activity = Number(sampleActivity);

  if (
    sampleActivity.trim() === '' ||
    !Number.isFinite(activity) ||
    activity <= 0 ||
    activity > MODERN_ACTIVITY
  ) {
    return false;
  }

  const age = -(
    HALF_LIFE_PERIOD / Math.log(2)
  ) * Math.log(activity / MODERN_ACTIVITY);

  return Math.round(age);
}

module.exports = {
  dateSample
};