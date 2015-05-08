$( document ).ready(function() {
    //CHANGE HERE: //////////////////////////////////////////////////
    var baseLanguage='en'; //jezik, v katerem so originalni napisi
    var translations=
    [
        {'sl':'kanal','en':'Channel'},
        {'sl':'čas [ μs ]','en':'Time [ μs ]'},
        {'sl':'napetost','en':'Voltage'},
        {'sl':'Povprečenje','en':'Averaging'},
        {'sl':'Ponastavi','en':'Reset'}
    ];
    ///////////////////////////////////////////////////
    function translator(fromLang,toLang,el)
    {
        if (toLang===undefined || toLang=='') toLang=baseLanguage;
        if (fromLang===undefined || fromLang=='') fromLang=baseLanguage;
        
        var selection;
        if (el===undefined)
            selection=$('body *');
        else
            selection=$(el);
            
        selection.contents().filter(function() { 
            if (this.nodeType == 3)
            {
                for (var i=0;i<translations.length;++i)
                {
                    this.nodeValue=this.nodeValue.replace(translations[i][fromLang],translations[i][toLang]);
                }
            }
        });
    }
    translator(baseLanguage,location.hash.substr(1));
    $('.translate').click(function(){translator(location.hash.substr(1),$(this).attr('href').substr(1))});
    $('body *').on("translate",function(){translator(baseLanguage,location.hash.substr(1),this)});
});