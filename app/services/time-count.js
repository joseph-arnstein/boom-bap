import Ember from 'ember';

export default Ember.Service.extend({
  currentCount: 0,

  startCountUp(){

    var that = this;

    setInterval(function(){
      var count = that.get('currentCount');
      if (count === 8) {
        count = 0
      };
      that.set('currentCount', count);

      var tempCount = that.get('currentCount') + 1;
      that.set('currentCount', tempCount);
      console.log(that.get('currentCount'));
    }, 1000);

    //console.log(this.get('currentCount'));

  }

});
