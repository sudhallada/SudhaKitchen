/**
 * @author srisudha
 */
function BreatkFastScripts() {
	$("#BreakfastContent").click(function() {

		PreviousPage=HomePage;
		CurrentPage="DetailPages/BreakFastDetails.html #BreakFastDetailsContent";
		
		
			
		NextPage="DetailPages/BreakFastDetails.html #BreakFastDetailsContent";			
		
		
		
		
		if(NextPage)
		
		HiddenDiv("#MainContent");
		DisplayDiv("#MainContentDetails");
		HiddenDiv("#CommentDiv");

		$("#MainContentDetails").load("DetailPages/BreakFastDetails.html #BreakFastDetailsContent", function() {

			$("#IdliSpan").click(function() {

				$("#MainContentDetails").load("DetailPages/IdliIngredientsDetails.html", function() {
                 DisplayDiv("#CommentDiv");
                 
                 
                 PreviousPage="DetailPages/BreakFastDetails.html #BreakFastDetailsContent";
                 CurrentPage="DetailPages/IdliIngredientsDetails.html";
                 NextPage=CurrentPage;
                 
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