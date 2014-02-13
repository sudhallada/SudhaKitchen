/**
 * @author srisudha
 */
function CurryDetailsScripts() {
  
   	$("#CurrysContent").click(function() {		
		
		HiddenDiv("#MainContent");
		DisplayDiv("#MainContentDetails");
		HiddenDiv("#TipContent");
		
	
		$("#MainContentDetails").load("DetailPages/CurryDetails.html  #CurryDetailsContent", function() {

		});
	});



}	