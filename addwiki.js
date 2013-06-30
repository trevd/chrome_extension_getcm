
  
   
    

    // The md5 element class type is used in both columns
    // for formatting. In the device column the element with the 
    // md5 class actually contains the formal device name
    var md5s = document.getElementsByClassName("md5");
    
    
    var i = 0 ;
    do{ 
        
        // Then check 2 nodes back to see if we are in the device column
        // this is determined because previousSibling + 1 is a anchor
        // element with an href containing the text device=        
        if( (md5s[i].previousSibling.previousSibling != null) && 
            (md5s[i].previousSibling.previousSibling.nodeName == 'A' ) &&
            (md5s[i].previousSibling.previousSibling.href.indexOf("device=") > 0)){
            
            // The index text of the link "should" contain the device code name                 
            var codeName = md5s[i].previousSibling.previousSibling.innerText ; 
            if(codeName == null || codeName.length == 0 ) {
                // something went wrong. skip ahead
                i+=2 ;
                continue ; 
            }
            var newlink = document.createElement("a") ;    
            // which means the md5 element "should" contain the device "formal" name
            newlink.innerText = md5s[i].innerText;
            newlink.setAttribute('href', 'http://wiki.cyanogenmod.org/w/'+codeName+'_Info');
            
            md5s[i].innerText = "";
            md5s[i].appendChild(newlink);
            newlink = null;
            
        }
        i+=2 ;
       
    }while(i <= md5s.length);
