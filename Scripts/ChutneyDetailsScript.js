/**
 * @author srisudha
 */
function ChutneyDetailsScripts() {
  
   	$("#ChutneyContent").click(function() {		
		
		HiddenDiv("#MainContent");
		
		DisplayDiv("#MainContentDetails");
		HiddenDiv("#TipContent");
		
	
		$("#MainContentDetails").load("DetailPages/ChutneyDetails.html  #ChutneyDetailsContent", function() {

		});
	});



}	