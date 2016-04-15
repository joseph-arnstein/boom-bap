import Ember from 'ember';

export default Ember.Component.extend({
  timeCount: Ember.inject.service(),

  actions: {
    testAction(params, number){
      //console.log(params);
      //console.log(number);
      var sampleSound = params;
      var pos = number;

      var newSound = {
        position: pos,
        sound: sampleSound.sound,
      };
      //console.log(newSound);
      this.get('timeCount').add(newSound);
    },
  }
});
