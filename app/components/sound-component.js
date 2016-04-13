import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    makeSound(){
      var sound = new Audio('http://sounds.ucode.com/assets/meow.wav');

      sound.play();
    },

    kickDrum() {
      var kick = new Audio ('http://freewavesamples.com/files/Bass-Drum-1.wav');
      kick.play();
    },

    snareDrum() {
      var snare = new Audio('http://freewavesamples.com/files/Kawai-K1r-Snare.wav');
      snare.play();
    }
  }
});
