# Primer prevajanja aplikacije Osciloskop
1. V mapo aplikacije (/opt/www/apps/scope) skopiraj translator.js
2. Dodaj prevode v translator.js in (pravtako v translator.js) za baseLanguage vpiši 'en'.
3. [V index.html dodaj translator.js] (https://github.com/eEksperimenti/js-utils/commit/945c04e314d105c593bb499ddc93bac4c509157d)

  ```html
  <script src="translator.js"></script>
  ```

4. [V index.html dodaj izbirnike za jezik] (https://github.com/eEksperimenti/js-utils/commit/b8e7bb626c12c8e623a6b3d06ada2325c557614a)

  ```html
    <a href='#sl' class='translate'>sl</a>
    <a href='#en' class='translate'>en</a>
  ```
5. Večina napisov se avtomatsko prevede, izjema so napisi, ki so "zapečeni" v JavaScriptu. Te lahko (s translator.js) prevedemo na dva načina:

* [s proženjem funkcije translate na izbranem elementu] (https://github.com/eEksperimenti/js-utils/commit/90b5ccdda2c6a4f74a636ede1be4ee835eb5b18e):
  
  ```javascript
  $('#xtitle').text('Time [ ' + timeu_lbl + ' ]').trigger('translate');
  ```

* [tako da prestavimo napis iz JavaScripta v nevidni HTML element] (https://github.com/eEksperimenti/js-utils/commit/3b43aa74f0d15d2678439d450d8928836dce1286):

  ```html
  <span id='t-channel' style='display: none'>Channel</span>
  ```
in 
  ```javascript
    var t_channel=$('#t-channel').text();
    for(var i=0; i<dresult.datasets.g1.length; i++) {
      dresult.datasets.g1[i].color = i;
      dresult.datasets.g1[i].label = t_channel+' ' + (i+1);          
      datasets.push(dresult.datasets.g1[i]);
    }
  ```
