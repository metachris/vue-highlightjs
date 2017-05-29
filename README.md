# vue-highlightjs

[Vue.js](https://vuejs.org/) syntax highlighting made easy, using [highlight.js](https://highlightjs.org/).

[![Build Status](https://travis-ci.org/metachris/vue-highlightjs.svg?branch=master)](https://travis-ci.org/metachris/vue-highlightjs)

## Quickstart

### Installation

    npm install --save vue-highlightjs

### Using vue-highlightjs

In your main JavaScript file (eg. `main.js`):

```javascript
// Import Vue and vue-highlgihtjs
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)
```

In your template, in order to highlight javascript code:

```html
<!-- If your source-code lives in a variable called 'sourcecode' -->
<pre v-highlightjs="sourcecode"><code class="javascript"></code></pre>

<!-- If you want to highlight hardcoded source-code -->
<pre v-highlightjs><code class="javascript">const s = new Date().toString()</code></pre>
```
---

* You can see a live example here: https://www.python-boilerplate.com/
* Fiddle with it: https://jsfiddle.net/metachris/1vz9oobc/
* See also this blog post for more information: https://www.metachris.com/2017/02/vuejs-syntax-highlighting-with-highlightjs/


## Contributing

Any sort of contributions and feedback is much appreciated. Just
leave an issue or pull-request!

This project uses the [AirBnB code style](https://github.com/airbnb/javascript).

Please run `npm run lint` and `npm run test` before you submit a pull request! <3


## About

Author: Chris Hager <chris@linuxuser.at> (https://www.metachris.com)

License: MIT

Contributors:

* [Chris Hager](https://www.metachris.com)
* [mr-krille](https://github.com/mr-krille)
* [Duoc Nguyen](https://github.com/nguyenvanduocit)
* [Shu Ding](https://github.com/shudin)


## Changelog

v1.3.3

* Documentation

v1.3.1

* Changed `const` to `var` for compatibility with PhantomJS and UglifyJS
* [Bugfix](https://github.com/metachris/vue-highlightjs/pull/6) to allow empty content

v1.2.2

* Fixed displaying and highlighting HTML tags passed as value to the directive (thanks @nguyenvanduocit)
