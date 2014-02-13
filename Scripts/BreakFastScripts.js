/**
 * @author srisudha
 */
function BreatkFastScripts() {
	$("#BreakfastContent").click(function() {

		HiddenDiv("#MainContent");
		DisplayDiv("#MainContentDetails");
		HiddenDiv("#TipContent");

		$("#MainContentDetails").load("DetailPages/BreakFastDetails.html #BreakFastDetailsContent", function() {

			$("#IdliSpan").click(function() {

				$("#MainContentDetails").load("DetailPages/IdliIngredientsDetails.html", function() {

				});
			});
			$("#MasaladosaSpan").click(function() {

				$("#MainContentDetails").load("DetailPages/MasalaDosaIngredientsDetails.html", function() {

				});
			});

			
		});

	});

}