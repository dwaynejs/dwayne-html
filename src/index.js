export default (transformFunction = identity) => {
  return (Mixin) => {
    return class extends Mixin {
      afterUpdate(value) {
        const { elem } = this;
        const html = value == null
          ? ''
          : transformFunction(value);

        elem.html(html);
      }
    };
  };
};

function identity(html) {
  return html;
}
