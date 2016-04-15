import Ember from 'ember';

export default Ember.Component.extend({
  selectAudio: Ember.inject.service(),

  doubleClick: function() {
    var testInput = {
      sound: new Audio('new-samples/18CRS_SDCY.wav')
    };
    console.log(testInput);
    alert("You have selected 'Crash Cymbal' and can add it to your loop below!");
    this.get('selectAudio').add(testInput);
  }
});
