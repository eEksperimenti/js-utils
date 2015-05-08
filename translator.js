$( document ).ready(function() {
    //CHANGE HERE: //////////////////////////////////////////////////
    var baseLanguage='sl'; //jezik, v katerem so originalni napisi
    var translations=
    [
     {'sl':'shrani meritev','en':'save measurement'},
     {'sl':'izvoz','en':'export'}
    ];
    ///////////////////////////////////////////////////
    function translator(fromLang,toLang)
    {
        if (toLang===undefined || toLang=='') toLang=baseLanguage;
        if (fromLang===undefined || fromLang=='') fromLang=baseLanguage;
        
            $('body *').contents().filter(function() { 
                if (this.nodeType == 3)
                {
                    for (var i=0;i<translations.length;++i)
                    {
                        if (this.nodeValue==translations[i][fromLang]) {
                            this.nodeValue=translations[i][toLang];
                        }
                    }
                }
            });
    }
    translator(baseLanguage,location.hash.substr(1));
    $('.translate').click(function(){translator(location.hash.substr(1),$(this).attr('href').substr(1))});
});