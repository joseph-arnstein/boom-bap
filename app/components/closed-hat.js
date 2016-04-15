import Ember from 'ember';

export default Ember.Component.extend({
  selectAudio: Ember.inject.service(),

  doubleClick: function() {
    var testInput = {
      sound: new Audio('new-samples/Cid_H1.wav')
    };
    console.log(testInput);
    alert("You have selected 'Close High-Hat' and can add it to your loop below!");
    this.get('selectAudio').add(testInput);
  }
});
