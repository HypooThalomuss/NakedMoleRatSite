//molerat script

document.getElementById('MoleratHome').src="C:\Users\Rachael\Desktop\WebProgramming\Molerat Page Project\Images\toolbar\home_hover.png";

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//attempt 2
// 6. Hide the item with the id #menu  
//*******TO DO**********COMPLETE STEP 6*********
$('#dropdownMenu').hide();


// 7. When the element with the id #trigger is clicked, 
	// a) slide toggle item with id #menu
$('#dropdownButton').on('click', function () {
	$("#dropdownMenu").slideToggle();
});