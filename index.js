var hljs = require('highlight.js')

var vueHighlightJS = {}

vueHighlightJS.install = function (Vue) {
	Vue.directive('highlightjs', {
	deep: true,
	bind: function (el, binding) {
		// on first bind, highlight all targets
		let targets = el.querySelectorAll('code')
		targets.forEach((target) => {
		// if a value is directly assigned to the directive, use this
		// instead of the element content.
		if (binding.value) {
			target.innerHTML = binding.value
		}
		hljs.highlightBlock(target)
		})
	},
	componentUpdated: function (el, binding) {
		// after an update, re-fill the content and then highlight
		let targets = el.querySelectorAll('code')
		targets.forEach((target) => {
		if (binding.value) {
			target.innerHTML = binding.value
			hljs.highlightBlock(target)
		}
		})
	}
	})
}

module.exports = vueHighlightJS
