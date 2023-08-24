function displayOrganizeMatter() {
    var om = document.getElementsByName('organized_manner');
 
    for(organized_manner = 0; organized_manner < om.length; organized_manner++) {
        if(om[organized_manner].checked)
        document.getElementById("result").innerHTML
                = "Organized Manner: "+om[organized_manner].value;
               
    }
}

function displaySubjectMatter() {
    var sm = document.getElementsByName('subject_matter');
 
    for(i = 0; i < sm.length; i++) {
        if(sm[i].checked)
        document.getElementById("result1").innerHTML
                = "Subject Matter: "+ele[i].value;
               
    }
}

function displayOtherSubjects() {
    var os = document.getElementsByName('other_subjects');
      
    for(i = 0; i < os.length; i++) {
        if(os[i].checked)
        document.getElementById("result2").innerHTML
                = "Other Subjects: "+ele[i].value;
               
    }
}

function displayRealLifeSituation() {
    var rls = document.getElementsByName('real_life_situations');
      
    for(i = 0; i < rls.length; i++) {
        if(rls[i].checked)
        document.getElementById("result3").innerHTML
                = "Subject Matter: "+ele[i].value;
               
    }
}