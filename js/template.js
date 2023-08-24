<script>
var open = false;
function handleMenu() {
/** open the menu **/
 if (!open) {
    document.getElementById("navigation").classList.add("opened");
    open = true;
   
    
  } 
/** else close the menu **/  
 else {
      document.getElementById("navigation").classList.remove("opened");
    open = false;
  }
 }
}
</script>
