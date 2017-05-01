import { initApp } from 'dwayne-test-utils';
import { strictEqual } from 'assert';
import { Block, Mixin } from 'dwayne';
import html from '../src';

let a = {};
let b = {};
let remove;

class App extends Block {
  static template = html`
    <div html="{value}"/>
    <div html-transformed="{value}"/>
  `;

  value = '<i>123</i>';
}

Block.mixin('html', Mixin.wrap(html()));
Block.mixin('html-transformed', Mixin.wrap(
  html((html) => (
    `<span>${ html }</span>`
  ))
));

describe('it should test html mixin', () => {
  before(remove = initApp(App));
  after(remove);

  it('should inject html into the element', () => {
    strictEqual($container.html(), '<div><i>123</i></div><div><span><i>123</i></span></div>');
  });
});
