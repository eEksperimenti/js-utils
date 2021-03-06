# js-utils
JavaScript utilities

## translator.js
1. Add translations to the `translator.js` file into the `translations` variable, e.g.

  ```javascript
  var translations=
    [
     {'sl':'shrani meritev','en':'save measurement'},
     {'sl':'izvoz','en':'export'}
    ];
  ```
2. Include the `translator.js` file into the head section of your html document after the jQuery script, e.g.

  ```html
  <script src="../assets/bootstrap-3.0.0/js/jquery.js"></script>
  <script src="../assets/bootstrap-3.0.0/js/bootstrap.min.js"></script>
  
  <script src="translator.js"></script>
  ```
3. Language is initially choosen by reading URL's hash value, e.g.

  ```
  http://192.168.1.100/celica/#sl
  ```
  ```
  http://192.168.1.100/celica/#en
  ```
4. To have the language changed on hyperlink click add a hyperlink with the class `.translate` to your html document, e.g.

  ```html
  <a href='#sl' class='translate'>sl</a>
  <a href='#en' class='translate'>en</a>
  ```

## Prilagoditve za slepe in slabovidne

Če kontrole še nimajo ustreznih oznak lahko uporabljamo [Paypal bootstrap accessibility plugin](https://www.paypal-engineering.com/2014/01/28/bootstrap-accessibility-plugin-making-the-popular-web-development-framework-better/), primer uporabe: https://github.com/eEksperimenti/js-utils/tree/master/examples/bootstrap_accessibility_plugin, sicer pa so primeri na [bootstrap strani](http://getbootstrap.com/) večinoma že z [`ARIA`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) oznakami.

## beep.js

Doda zvok, ko pritisnemo element `<button/>`. Uporabljamo tako, da v datoteko `HTML` vključimo datoteko [beep.js](https://github.com/eEksperimenti/js-utils/blob/master/beep.js)
