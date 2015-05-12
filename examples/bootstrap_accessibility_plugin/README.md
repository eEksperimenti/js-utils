Če imamo npr. spodnji `html`:
```html
<div class="panel-group" id="accordion">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
          Collapsible Group Item #1
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in">
      <div class="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
```
in želimo, da `paypal bootstrap accessibility plugin` na `HTML` elemente doda `ARIA` atribute, moramo v datoteko dodati:
```html
  <link rel="stylesheet" href="bootstrap-accessibility_1.0.3.css">
```
in
```html
<script src="bootstrap-accessibility_1.0.3.min.js"></script>
```
**Slednji mora biti dodan na konec `<body>` elementa HTML in ne v `<head>`.**

Plugin spremeni zgornji `HTML` v:
```html
<div id="accordion" class="panel-group" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default" role="presentation">
    <div class="panel-heading" role="presentation">
      <h4 class="panel-title" role="presentation">
        <a href="#collapseOne" data-parent="#accordion" data-toggle="collapse" class="accordion-toggle" role="tab" aria-selected="true" aria-expanded="true" id="ui-collapse-517" aria-controls="collapseOne" tabindex="0">
          Collapsible Group Item #1
        </a>
      </h4>
    </div>
    <div class="panel-collapse collapse in" id="collapseOne" role="tabpanel" tabindex="0" aria-labelledby="ui-collapse-517" aria-hidden="false">
      <div class="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
```
