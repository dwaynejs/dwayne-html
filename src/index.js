import { Mixin } from 'dwayne';

export default class Html extends Mixin {
  static transform(html) {
    return html;
  }

  afterUpdate(value) {
    this.elem.html(
      value == null
        ? ''
        : this.constructor.transform(value)
    );
  }

  beforeRemove(isElementRemoved) {
    if (!isElementRemoved) {
      this.elem.html('');
    }
  }
}
