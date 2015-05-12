$( document ).ready(function() {
    //CHANGE HERE: //////////////////////////////////////////////////
    var baseLanguage='en'; //jezik, v katerem so originalni napisi
    var translations=
    [
		{'sl':'Samodejna prilagoditev napetostnega merilnega območja','en':'Autoscale'},
        {'sl':'Kanal','en':'Channel'},
        {'sl':'čas','en':'Time'},
        {'sl':'Povprečenje signalov','en':'Averaging'},
        {'sl':'Privzeto merilno območje','en':'Reset zoom'},
		{'sl':'Zunanji izvor','en':'External'},
		{'sl':'Izvor prožilnega signala','en':'Source'},
		{'sl':'Način proženja','en':'Mode'},
		{'sl':'Enkratno','en':'Single'},
		{'sl':'Običajno','en':'Normal'},
		{'sl':'Ponavljajoče','en':'Continuous'},
		{'sl':'Samodejno','en':'Auto'},
		{'sl':'Prehod signala za proženje','en':'Edge'},
		{'sl':'Pozitiven prehod','en':'Rising'},
		{'sl':'Negativen prehod ','en':'Falling'},
		{'sl':'Prag proženja','en':'Level'},
		{'sl':'Enkratno proženje','en':'Single '},
		{'sl':'Merilno območje','en':'Range'},
		{'sl':'Časovna baza','en':'X axis'},
		{'sl':'Napetostno merilno območje','en':'Y axis'},
		{'sl':'Premik y osi','en':'Offset'},
		{'sl':'Prikaz signalnih parametrov','en':'Measure'},
		{'sl':'Najmanjša napetost','en':'Min'},
		{'sl':'Največja napetost','en':'Max'},
		{'sl':'Vršna napetost (Vpp)','en':'Amp (Vpp)'},
		{'sl':'Povprečna napetost','en':'Avg'},
		{'sl':'Frekvenca','en':'Freq'},
		{'sl':'Perioda','en':'Period'},
		{'sl':'Nastavitve ojačanja','en':'Gain settings'},	
		{'sl':'Signalni generator','en':'Signal Generator'},
		{'sl':'Samodejna prilagoditev merilnega območja','en':'AUTO'},
		{'sl':'Merilni sondi','en':'Gain setting'},
		{'sl':'Signalni generator in osciloskop','en':'Generator & Oscilloscope'},
		{'sl':'Faktor slabljenja','en':'Probe attenuation'},
		{'sl':'Oblika izhodnega signala','en':'Signal type'},
		{'sl':'Sinusna','en':'Sine'},
		{'sl':'Pravokotna','en':'Square'},
		{'sl':'Trikotna','en':'Triangle'},
		{'sl':'Iz datoteke','en':'From file'},
		{'sl':'Vršna amplituda','en':'Amplitude (Vpp)'},
		{'sl':'Frekvenca ','en':'Frequency'},
		{'sl':'Enosmerna komponenta','en':'DC offset'},
		{'sl':'Način proženja','en':'Trigger mode'},
		{'sl':'Napetost','en':'Voltage'},
		{'sl':'Naloži datoteko','en':'File upload'},
		{'sl':'Proženje','en':'Trigger'},
		{'sl':'','en':''},
		{'sl':'','en':''},
		{'sl':'','en':''},
		{'sl':'','en':''},
		{'sl':'','en':''},
		{'sl':'','en':''},
		{'sl':'','en':''},
		{'sl':'','en':''},
		{'sl':'','en':''},
		{'sl':'','en':''},
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