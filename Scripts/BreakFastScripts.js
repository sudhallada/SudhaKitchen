/**
 * @author srisudha
 */
function BreatkFastScripts() {
	$("#BreakfastContent").click(function() {

		HiddenDiv("#MainContent");
		DisplayDiv("#MainContentDetails");
		

		$("#MainContentDetails").load("DetailPages/BreakFastDetails.html #BreakFastDetailsContent", function() {

			$("#IdliSpan").click(function() {

				$("#MainContentDetails").load("DetailPages/IdliIngredientsDetails.html", function() {
                  DisplayDiv("#FacebookCommentDetails");
                 DisplayDiv("#FacebookLikeandShare");
				});
			});
			$("#MasaladosaSpan").click(function() {

				$("#MainContentDetails").load("DetailPages/MasalaDosaIngredientsDetails.html", function() {

				});
			});

			$("#VadaSpan").click(function() {

				$("#MainContentDetails").load("DetailPages/VadaMethod.html", function() {

				});
			});
               $("#UthappamSpan").click(function() {

				$("#MainContentDetails").load("DetailPages/UtappamMethod.html", function() {

				});
			});
			
                 $("#PooriSpan").click(function() {
                 	
                 $("#MainContentDetails").load("DetailPages/PorriMethod.html", function() {
					
				});
			});
			
                  $("#UpmaSpan").click(function() {
                 	
                 $("#MainContentDetails").load("DetailPages/UpmaMethod.html", function() {
					
				});
			});
               	 $("#OatsIdliSpan").click(function() {
                 	
                 $("#MainContentDetails").load("DetailPages/OatsIdliMethod.html", function() {
					
				});
			});
			 $("#RagiIdliSpan").click(function() {

				$("#MainContentDetails").load("DetailPages/RagiIdliMethod.html", function() {

				});
			});		 
 
		});

	});

}