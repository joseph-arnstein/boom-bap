import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    makeSound(){
      var sound = new Audio('http://sounds.ucode.com/assets/meow.wav');
      setInterval(function(){ sound.play(); }, 3000);
    },

    kickDrum() {
      var kick = new Audio ('http://freewavesamples.com/files/Bass-Drum-1.wav');
      kick.play();
    },

    snareDrum() {
      var snare = new Audio('/dumbsounds.mp3');
      snare.play();
    }
  }
});
