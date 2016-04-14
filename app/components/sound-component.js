import Ember from 'ember';

export default Ember.Component.extend({
  timeCount: Ember.inject.service(),

  actions: {
    clapDrum(){
      var clap = new Audio('new-samples/02_03_claps.wav');
      clap.play();
    },

    kickDrum(){
      var kick = new Audio('new-samples/Do_K1.wav');
      kick.play();
    },

    synthKickDrum(){
      var synthKick = new Audio('new-samples/Dope Kicks (24).wav');
      synthKick.play();
    },

    snareDrum(){
      var snare = new Audio('new-samples/snare (35).wav');
      snare.play();
    },

    snare2Drum(){
      var snare2 = new Audio('new-samples/12_13_snare.wav');
      snare2.play();
    },

    rimShotDrum(){
      var rimShot = new Audio('new-samples/09_05_rim.wav');
      rimShot.play();
    },

    closedHatDrum(){
      var closedHat = new Audio('new-samples/Cid_H1.wav');
      closedHat.play();
    },

    clap2Drum(){
      var clap2 = new Audio('new-samples/Clap (2).wav');
      clap2.play();
    },

    crashDrum(){
      var crash = new Audio('new-samples/18CRS_SDCY.wav');
      crash.play();
    },

    openHatDrum(){
      var openHat = new Audio('new-samples/Brw_H.wav');
      openHat.play();
    },

    startCount(){
      this.get('timeCount').startCountUp();
    }
  }
});
