const Vue = require('vue/dist/vue');
const VueHighlightJS = require('../index');

Vue.use(VueHighlightJS);

test('highlighting pre-defined code', () => {
  const template = `
    <div id="app">
      <pre v-highlightjs><code class="javascript">// Static source code
      function(test) {
          console.log(test)
      }</code></pre>
    </div>
  `;

  const vm = new Vue({
    template,
  }).$mount();

  const result = vm.$el.innerHTML;
  expect(result).toEqual(expect.stringContaining('<span class="hljs-comment">'));
  expect(result).toEqual(expect.stringContaining('<span class="hljs-function">'));
  expect(result).toEqual(expect.stringContaining('<span class="hljs-keyword">'));
  expect(result).toEqual(expect.stringContaining('<span class="hljs-params">'));
  expect(result).toEqual(expect.stringContaining('<span class="hljs-built_in">'));
});

describe('highlighting dynamic code', () => {
  let vm, result;

  beforeEach(() => {
    const template = `
      <div id="app">
        <pre v-highlightjs="sourcecode"><code class="javascript"></code></pre>
      </div>
    `;

    vm = new Vue({
      template,
      data: {
        sourcecode: 'const str = "This sourcecode will update dynamically"',
      },
    }).$mount();
  });

  it('should highlight initial code', () => {
    result = vm.$el.innerHTML;
    expect(result).toEqual(expect.stringContaining('<span class="hljs-keyword">'));
    expect(result).toEqual(expect.stringContaining('<span class="hljs-string">'));
  })

  it('should highlight code when updating variable', () => {
    vm.sourcecode = '123';
    Vue.nextTick(function () {
      result = vm.$el.innerHTML;
      expect(result).toEqual('<pre><code class="javascript hljs"><span class="hljs-number">123</span></code></pre>');
    });
  });

  it('should updated highlighted block when updating code without any content', () => {
    vm.sourcecode = '';
    Vue.nextTick(function () {
      result = vm.$el.innerHTML;
      // console.log('result', result);
      expect(result).toEqual('<pre><code class="javascript hljs"></code></pre>');
    });
  });
});
