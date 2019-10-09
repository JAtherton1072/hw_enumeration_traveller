const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeyStartLocationArray = this.journeys.map((journey) => {
    return journey.startLocation
  });
    return journeyStartLocationArray
};


Traveller.prototype.getJourneyEndLocations = function () {
  const journeyEndLocationArray = this.journeys.map((journey) => {
    return journey.endLocation
  });
    return journeyEndLocationArray
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport  === transport;
  });
};


Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance  >= minDistance;
  });
};



Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((runningTotal, currentJourney) => {
    return runningTotal + currentJourney.distance
  },0);
  return total
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let array = [];
   let journeys = this.journeys
   journeys.forEach((journey) => {
     if (!array.includes(journey.transport)) {
       array.push(journey.transport)
     }
   })
   return array


};


module.exports = Traveller;
