# ng-prettify-file-input
A light weight directive for overriding the default file input styles.

Based upon an excellent tutorial by [Osvaldas Valutis](http://osvaldas.info/) at (Tympanus.net)[http://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/].

This is an Angular implementation with a few modifications of the tutorial.

## Get started
- Install node and npm
- Install grunt and grunt-cli
- Run `npm install`
- Run `grunt`

## Usage
- Include the provided script file and css file. Either use the compiled files in the dist folder or include the SASS and original JS files in the src folder.
- Include the ngPrettifyFileInputProjectApp module in your app dependenices.

The directive is attached to a container that contains an file input field and a label. It is important the label is defined after the input. It can handle the multiple attribute.
```
<div ng-prettify-file-input>
    <input id="fileInput" type="file" multiple>
    <label for="fileInput">Choose a file...</label>
</div>
```

If you want to add an icon include it in the label. The default styles will look for either a i, .icon or .glyphicon.
```
<div ng-prettify-file-input>
    <input id="fileInput" type="file" multiple>
    <label for="fileInput"><i class="icon-upload"></i>Choose a file...</label>
</div>
```