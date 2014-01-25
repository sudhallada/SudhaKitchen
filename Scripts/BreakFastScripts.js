/**
 * @author srisudha
 */
function BreatkFastScripts() {
	$("#BreakfastContent").click(function() {
		HiddenDiv("#MainContent");
		DisplayDiv("#MainContentDetails");

		$("#MainContentDetails").load("DetailPages/BreakFastDetails.html #BreakFastDetailsContent", function() {

			$("#RagIdliSpan").click(function() {

				$("#MainContentDetails").load("DetailPages/IngredientsDetails.html", function() {

				});
				
			

			});
		});
	});
}