import { initApp } from 'dwayne-test-utils';
import { strictEqual } from 'assert';
import { Block } from 'dwayne';
import Html from '../src';

let remove;

Html.transform = (html) => (
  `<span>${ html }</span>`
);

class App extends Block {
  static html = html`
    <div Html="{value}"/>
  `;

  value = '<i>123</i>';
}

describe('it should test html mixin', () => {
  before(remove = initApp(App));
  after(remove);

  it('should inject html into the element', () => {
    strictEqual($container.html(), '<div><span><i>123</i></span></div>');
  });
});
