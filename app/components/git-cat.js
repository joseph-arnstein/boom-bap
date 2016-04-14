import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    gitMeow(){
      var meow = new Audio('');
      meow.play();
    }
  }
});
