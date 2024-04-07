const wildlyBiasedReview = (location) => {
  if (location !== 'NYC') {
    console.log('Yea that place is cool I guess');

    return;
  }
  console.log('THE GREATEST CITY IN THE WORLD');
  console.log('THE CITY THAT NEVER SLEEPS');
  console.log('WOW WHAT A CITY');
};
wildlyBiasedReview("NYC")

module.exports = {
  wildlyBiasedReview,
};
