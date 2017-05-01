export default (transformFn = identity) => {
  return (Mixin) => {
    return class extends Mixin {
      afterUpdate(value) {
        this.elem.html(
          value == null
            ? ''
            : transformFn(value)
        );
      }

      beforeRemove(isElementRemoved) {
        if (!isElementRemoved) {
          this.elem.html('');
        }
      }
    };
  };
};

function identity(html) {
  return html;
}
