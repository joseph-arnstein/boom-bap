import Ember from 'ember';

export default Ember.Component.extend({
  selectAudio: Ember.inject.service(),

  doubleClick: function() {
    var testInput = {
      sound: new Audio('new-samples/Clap (2).wav')
    };
    console.log(testInput);
    this.get('selectAudio').add(testInput);
  }
});
