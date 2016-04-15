import Ember from 'ember';

export default Ember.Component.extend({
  selectAudio: Ember.inject.service(),

  doubleClick: function() {
    var testInput = {
      sound: new Audio('new-samples/Do_K1.wav')
    };
    console.log(testInput);
    alert("You have selected 'Kick Drum' and can add it to your loop below!");
    this.get('selectAudio').add(testInput);
  }
});
