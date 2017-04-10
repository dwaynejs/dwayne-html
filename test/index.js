import { Block, Mixin, initApp, doc } from 'dwayne';
import { strictEqual } from 'assert';
import html from '../src';

class App extends Block {
  static template = '<div html="{html}" d-elem="div"/>';
}

Block.mixin('html', Mixin.wrap(html()));

describe('it should test html mixin', () => {
  let app;

  before((done) => {
    Block.block('App', App.wrap(
      afterRenderWrapper((block) => {
        app = block;
        done();
      })
    ));

    initApp('App', doc.create('div'));
  });

  it('should inject html into the element', (done) => {
    const { div } = app;

    strictEqual(div.html(), '');

    app.html = '<div><span></span><input></div>';

    deferTest(done, () => {
      strictEqual(div.html(), app.html);
    });
  });
});

function afterRenderWrapper(cb) {
  return (Block) => {
    return class extends Block {
      afterRender() {
        cb(this);
        super.afterRender();
      }
    };
  };
}

function deferTest(done, test) {
  setTimeout(() => {
    try {
      test();
      done();
    } catch (err) {
      done(err);
    }
  }, 0);
}
