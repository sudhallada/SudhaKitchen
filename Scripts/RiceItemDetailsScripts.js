/**
 * @author srisudha
 */
function RiceItemDetailsScripts() {
	
	$("#RiceItemContent").click(function() {		
		
		HiddenDiv("#MainContent");
		DisplayDiv("#MainContentDetails");
		HiddenDiv("#TipContent");
		
	
		$("#MainContentDetails").load("DetailPages/RiceItemsDetails.html #RiceItemDetailsContent", function() {

		});
	});

}	