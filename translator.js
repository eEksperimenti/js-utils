$( document ).ready(function() {
    //CHANGE HERE: //////////////////////////////////////////////////
    var baseLanguage='sl'; //jezik, v katerem so originalni napisi
    var translations=
    [
     {'sl':'shrani meritev','en':'save measurement'},
     {'sl':'izvoz','en':'export'}
    ];
    ///////////////////////////////////////////////////
    
    var language = location.hash.substr(1);
    if (language===undefined || language=='') language=baseLanguage;
    
        $('body *').contents().filter(function() { 
            if (this.nodeType == 3)
            {
                for (var i=0;i<translations.length;++i)
                {
                    if (this.nodeValue==translations[i][baseLanguage]) {
                        this.nodeValue=translations[i][language];
                    }
                }
            }
        });
});