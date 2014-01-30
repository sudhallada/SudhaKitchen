/**
 * @author srisudha
 */
function BreatkFastScripts() {
	$("#BreakfastContent").click(function() {
		HiddenDiv("#MainContent");
		DisplayDiv("#MainContentDetails");
        HiddenDiv("#TipContent");
        
		$("#MainContentDetails").load("DetailPages/BreakFastDetails.html #BreakFastDetailsContent", function() {

			$("#RagIdliSpan").click(function() {

				$("#MainContentDetails").load("DetailPages/IngredientsDetails.html", function() {

				});
				
			

			});
		});
	});
		
		
	
	
}