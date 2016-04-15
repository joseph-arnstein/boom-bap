import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('synth-kick', 'Integration | Component | synth kick,', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{synth-kick}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#synth-kick}}
      template block text
    {{/synth-kick}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
