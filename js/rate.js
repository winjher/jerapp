function averageSME(){
        var id_outstanding = document.getElementById("id_outstanding");
        var id_very_good = document.getElementById("id_very_good");
        var id_good = document.getElementById("id_good");
        var id_fair = document.getElementById("id_fair");
        var id_poor = document.getElementById("id_poor");
        var sme = float(id_outstanding).value + float(id_very_good).value + float(id_good).value + float(id_fair.value) + float(id_poor).value

           document.getElementById("average").innerHTML = sme[i].value;

       
    }