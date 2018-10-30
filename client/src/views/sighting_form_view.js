const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  console.log(evt,"%%%%%%%");
  sighting = this.createSighting(evt.target)
  PubSub.publish("SightingForm:form-submitted", sighting)
}

SightingFormView.prototype.createSighting = function (form){
  sighting = {
    species: form.species.value,
    location: form.location.value,
    date: form.date.value
  }
  return sighting
}


module.exports = SightingFormView;
