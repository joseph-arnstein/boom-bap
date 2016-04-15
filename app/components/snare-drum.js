import Ember from 'ember';

export default Ember.Component.extend({
  selectAudio: Ember.inject.service(),

  doubleClick: function() {
    var testInput = {
      sound: new Audio('new-samples/snare (35).wav')
    };
    console.log(testInput);
    alert("You have selected 'Snare' and can add it to your loop below!");
    this.get('selectAudio').add(testInput);
  }
});
