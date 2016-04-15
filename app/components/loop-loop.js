import Ember from 'ember';

export default Ember.Component.extend({

  timeCount: Ember.inject.service(),

  actions: {
    startCount() {
      this.get('timeCount').startCountUp();
    },

    kickAtOne() {
      var kick = {
        position: 1,
        sound: new Audio('new-samples/Do_K1.wav'),
      };
      this.get('timeCount').add(kick);
    },

    kickAtTwo() {
      var kick = {
        position: 2,
        sound: new Audio('new-samples/Do_K1.wav'),
      };
      this.get('timeCount').add(kick);
    },

    kickAtThree() {
      var kick = {
        position: 3,
        sound: new Audio('new-samples/Do_K1.wav'),
      };
      this.get('timeCount').add(kick);
    },

    kickAtFour() {
      var kick = {
        position: 4,
        sound: new Audio('new-samples/Do_K1.wav'),
      };
      this.get('timeCount').add(kick);
    },

    kickAtFive() {
      var kick = {
        position: 5,
        sound: new Audio('new-samples/Do_K1.wav'),
      };
      this.get('timeCount').add(kick);
    },

    kickAtSix() {
      var kick = {
        position: 6,
        sound: new Audio('new-samples/Do_K1.wav'),
      };
      this.get('timeCount').add(kick);
    },

    kickAtSeven() {
      var kick = {
        position: 7,
        sound: new Audio('new-samples/Do_K1.wav'),
      };
      this.get('timeCount').add(kick);
    },

    kickAtEight() {
      var kick = {
        position: 8,
        sound: new Audio('new-samples/Do_K1.wav'),
      };
      this.get('timeCount').add(kick);
    },

    snareAtOne() {
      var snare = {
        position: 1,
        sound: new Audio('new-samples/02_03_claps.wav'),
      };
      this.get('timeCount').add(snare);
    },

    snareAtTwo() {
      var snare = {
        position: 2,
        sound: new Audio('new-samples/02_03_claps.wav'),
      };
      this.get('timeCount').add(snare);
    },

    snareAtThree() {
      var snare = {
        position: 3,
        sound: new Audio('new-samples/02_03_claps.wav'),
      };
      this.get('timeCount').add(snare);
    },

    snareAtFour() {
      var snare = {
        position: 4,
        sound: new Audio('new-samples/02_03_claps.wav'),
      };
      this.get('timeCount').add(snare);
    },
    
    snareAtFive() {
      var snare = {
        position: 5,
        sound: new Audio('new-samples/02_03_claps.wav'),
      };
      this.get('timeCount').add(snare);
    },

    snareAtSix() {
      var snare = {
        position: 6,
        sound: new Audio('new-samples/02_03_claps.wav'),
      };
      this.get('timeCount').add(snare);
    },

    snareAtSeven() {
      var snare = {
        position: 7,
        sound: new Audio('new-samples/02_03_claps.wav'),
      };
      this.get('timeCount').add(snare);
    },

    snareAtEight() {
      var snare = {
        position: 8,
        sound: new Audio('new-samples/02_03_claps.wav'),
      };
      this.get('timeCount').add(snare);
    }
  }
});
