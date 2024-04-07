const getRandomIntInRange = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}


const coolnessGauge = (numOfFridges) => {
  return numOfFridges >= 4 ? 'You are downright chilly!' : 'You need more fridges.';
};
console.log(coolnessGauge(0))


const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  } else if (numOfFunkoPops >= 1 && numOfFunkoPops <= 10) {
    console.log('Only a few? Keep having fun!');
  } else if (numOfFunkoPops >= 10 && numOfFunkoPops <= 20) {
    console.log('You have a problem.');
  } else if (numOfFunkoPops >= 20 && numOfFunkoPops <= 30) {
    console.log('You need help!');
  } else if (numOfFunkoPops > 30) {
    console.log('You need an intervention!!!');
  }
};

funkoPopAddictionLevel(0) //no pops 
funkoPopAddictionLevel(1)//few  
funkoPopAddictionLevel(10)// few
funkoPopAddictionLevel(11)// problem 
funkoPopAddictionLevel(20)// problem 
funkoPopAddictionLevel(21)//help
funkoPopAddictionLevel(30)//help 
funkoPopAddictionLevel(31)// intervention 
funkoPopAddictionLevel(100)// intervention





const getWeatherReport = (temperature) => {
  let weatherReport;
  if (temperature > 90) {
    weatherReport = "It's hot and gross out."
  } else if (temperature > 70) {
    weatherReport = "At least it's a dry heat."
  } else if (temperature >= 32 && temperature <= 70) {
    weatherReport = "It's not too bad!"
  } else if (temperature < 32) {
    weatherReport = "Wow, it's cold out."
  }

  console.log(weatherReport);
  console.log("And that's your report!")
  return weatherReport
};

console.log(getWeatherReport(71));



const returnPositiveNegativeZero = (num) => {
  if (num < 0) {
    return "Negative"
  } else if (num > 0) {
    return "Positive"
  } else if (num === 0) {
    return "Zero"
  }
  console.log(returnPositiveNegativeZero(4))
};

module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
