# `tree-fold`

Minimalistic but perfect treeview/folder plugin

## Why tree-fold?

I was working on a private project where I needed a simplistic way to view a folder like structure. Since I couldn't find one, I created my VERY FIRST plugin for jQuery.

I hope you like it!

## [Demo](https://primus852.github.com/tree-fold/)

[It's on the GitHub Pages](https://primus852.github.com/tree-fold/).

## Install

#### NPM

The best way to install and use tree-fold is with NPM.
It's registered on [npm](https://www.npmjs.com/package/tree-fold) as `tree-fold`.

```
$ npm install tree-fold --save
```

#### Manually

You can download the latest stable version with download links [here](https://primus852.github.io/tree-fold/).
You also can find all releases on [Releases](https://github.com/primus852/tree-fold/releases).

## How to use

First of all, please check if the container element meets the
requirements.

```html
<link rel='stylesheet' href='dist/css/tree-fold.min.css' />
```

```html
<script src='jquery.latest.min.js'></script>
<script src='dist/js/tree-fold.min.js'></script>
```

## jQuery

After importing it, you can use the plugin in the usual way.

```javascript
$('#container').treeFold(); // Plain init
```

To modify parameters:
```javascript
$('#container').treeFold({
	baseClass: 'fa', // 'glyphicon or whatever you prefer'
	openedClass: 'fa-minus', // class to toggle when folder is opened
	closedClass: 'fa-plus', // class to toggle when folder is closed
	onLastItem: function (row) {
		var a = row.attr('data-link');
		alert('Load me in a DIV via ajax: ' + a);
		// Do whatever you want here, I make an ajax call...
	}
});
```

## Helpdesk

If you have any idea to improve this project or any problem
using this, please feel free to upload an
[issue](https://github.com/primus852/tree-fold/issues).

## License

Copyright (c) 2017 Torsten Wolter BSD & MIT license

The MIT License (MIT)

Copyright (c) 2017 Torsten Wolter

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

The BSD License

Copyright (c) 2017 Torsten Wolter
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.