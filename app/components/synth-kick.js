import Ember from 'ember';

export default Ember.Component.extend({
  selectAudio: Ember.inject.service(),

  doubleClick: function() {
    var testInput = {
      sound: new Audio('new-samples/Dope Kicks (24).wav')
    };
    console.log(testInput);
    alert("You have selected 'Synth-Kick' and can add it to your loop below!");
    this.get('selectAudio').add(testInput);
  }
});
