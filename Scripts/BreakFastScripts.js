/**
 * @author srisudha
 */
function BreatkFastScripts() {
	$("#BreakFstSpan").click(function() {
		HiddenDiv("#MainContent");
		DisplayDiv("#MainContentDetails");
		$("#MainContentDetails").load("DetailPages/BreakFastDetails.html #BreckFastDetails", function() {

			$("#breakFastImageDetails").click(function() {

				$("#MainContentDetails").load("DetailPages/IngredientsDetails.html", function() {

					$('.slideshow').cycle({
						fx : 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
					});

				});

			});
		});
	});
}