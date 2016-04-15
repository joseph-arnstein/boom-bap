import Ember from 'ember';

export default Ember.Service.extend({
  chosen: null,


  add(obj){
    var test = obj;
    this.set('chosen', test);
    //this.get('chosen').pushObject(obj);
    console.log(this.get('chosen'));
    //var otherTest = this.get('chosen');
    //otherTest.sound.play();
  }

});
