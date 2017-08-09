'use strict';

var hljs;
var vueHighlightJS = {};
vueHighlightJS.install = function install(Vue, langs) {
  if (langs && Array.isArray(langs)) {
    // import hljs from 'highlight.js' and register only the needed languages.
    hljs = require("highlight.js/lib/highlight.js");
    for (var i = 0, len = langs.length; i < len; i++) {
      hljs.registerLanguage(langs[i], require('highlight.js/lib/languages/' + langs[i]));
    }
  } else {
    // import hljs from 'highlight.js' and register all languages.
    hljs = require('highlight.js');
  }
  Vue.directive('highlightjs', {
    deep: true,
    bind: function bind(el, binding) {
      // on first bind, highlight all targets
      var targets = el.querySelectorAll('code');
      var target;
      var i;

      for (i = 0; i < targets.length; i += 1) {
        target = targets[i];

        if (typeof binding.value === 'string') {
          // if a value is directly assigned to the directive, use this
          // instead of the element content.
          target.textContent = binding.value;
        }

        hljs.highlightBlock(target);
      }
    },
    componentUpdated: function componentUpdated(el, binding) {
      // after an update, re-fill the content and then highlight
      var targets = el.querySelectorAll('code');
      var target;
      var i;

      for (i = 0; i < targets.length; i += 1) {
        target = targets[i];
        if (typeof binding.value === 'string') {
          target.textContent = binding.value;
          hljs.highlightBlock(target);
        }
      }
    }
  });
};

module.exports = vueHighlightJS;
