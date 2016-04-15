import Ember from 'ember';

export default Ember.Component.extend({
  selectAudio: Ember.inject.service(),

  doubleClick: function() {
    var testInput = {
      sound: new Audio('new-samples/02_03_claps.wav')
    };
    console.log(testInput);
    alert("You have selected 'Clap' and can add it to your loop below!");
    this.get('selectAudio').add(testInput);
  }
});
