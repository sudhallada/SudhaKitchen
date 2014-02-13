/**
 * @author srisudha
 */
function SpecialsDetailsScripts() {
  
   	$("#SpecialsContent").click(function() {		
		
		HiddenDiv("#MainContent");
		
		DisplayDiv("#MainContentDetails");
		HiddenDiv("#TipContent");
		
	
		$("#MainContentDetails").load("DetailPages/SpecialsDetails.html  #SpecialsDetailsContent", function() {

		});
	});



}	