import Ember from 'ember';

export default Ember.Component.extend({

  timeCount: Ember.inject.service(),
  selectAudio: Ember.inject.service(),

  actions: {
    startCount() {
      this.get('timeCount').startCountUp();
    },

    kickAt(param){
      var pos = param;
      var kick = {
        position: pos,
        sound: new Audio('new-samples/Do_K1.wav'),
      };
      this.get('timeCount').add(kick);
    },

    snareAt(param){
      var pos = param;
      var snare = {
        position: pos,
        sound: new Audio('new-samples/02_03_claps.wav'),
      };
      this.get('timeCount').add(snare);
    },
  }
});
