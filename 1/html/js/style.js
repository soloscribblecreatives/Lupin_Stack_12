
clickitem.volume = 1.0;
error.volume = 0.5;
success.volume = 0.8;
congrats.volume = 1.0;

$('#ortho').click(function(){
	if ($('#ortho').data('clicked', true))
	{
		clickitem.play();
		$("#ortho").val("clicked1");
		$("#migraine,#gastro").css("opacity", "0.3");
		$("#migraine,#gastro").prop("disabled", true);
	}
});

$('#migraine').click(function(){
	if ($('#migraine').data('clicked', true))
	{
		clickitem.play();
		$("#migraine").val("clicked2");
		$("#ortho,#gastro").css("opacity", "0.3");
		$("#ortho,#gastro").prop("disabled", true);
	}
});

$('#gastro').click(function(){
	if ($('#gastro').data('clicked', true))
	{
		clickitem.play();
		$("#gastro").val("clicked3");
		$("#ortho,#migraine").css("opacity", "0.3");
		$("#ortho,#migraine").prop("disabled", true);
	}
});

	$(".cure, .disease").click(function() {
		if ($('#ortho').val() == "clicked1" && $('#jointex').is(":hover"))
		{
			$(".wrong").hide();
			$(".correct").show();
			$('.disease, .cure').prop("disabled", true);
			$("#ortho").val("win1");
			$(".disease, .cure").not("#ortho,#jointex").css("opacity", "0.3");
			success.play();
			setTimeout(function(){
				success.pause();
				success.currentTime = 0;
			}, 1500);
			setTimeout(function(){
				$(".correct").hide();
				$(".disease, .cure").css("opacity", "1");
				$('.disease, .cure').prop("disabled", false);
				$('.disease, .cure').prop("checked", false);
			}, 2000);
		}
		
		else if ($('#ortho').val() == "clicked1" && $('#cure').is(":hover"))
		{
			$(".correct").hide();
			$(".wrong").show();
			$('.disease, .cure').prop("disabled", true);
			$("#ortho").val("lose1");
			$(".disease, .cure").css("opacity", "0.3");
			error.play();
			setTimeout(function(){
				error.pause();
				error.currentTime = 0;
			}, 700);
			setTimeout(function(){
				$(".wrong").hide();
				$(".disease, .cure").css("opacity", "1");
				$('.disease, .cure').prop("disabled", false);
				$('.disease, .cure').prop("checked", false);
			}, 1200);
		}
		
		else if ($('#migraine').val() == "clicked2" && $('#equate').is(":hover"))
		{
			$(".wrong").hide();
			$(".correct").show();
			$('.disease, .cure').prop("disabled", true);
			$("#migraine").val("win2");
			$(".disease, .cure").not("#migraine,#equate").css("opacity", "0.3");
			success.play();
			setTimeout(function(){
				success.pause();
				success.currentTime = 0;
			}, 1500);
			setTimeout(function(){
				$(".correct").hide();
				$(".disease, .cure").css("opacity", "1");
				$('.disease, .cure').prop("disabled", false);
				$('.disease, .cure').prop("checked", false);
			}, 2000);
		}
		
		else if ($('#migraine').val() == "clicked2" && $('#cure').is(":hover"))
		{
			$(".correct").hide();
			$(".wrong").show();
			$('.disease, .cure').prop("disabled", true);
			$("#migraine").val("lose2");
			$(".disease, .cure").css("opacity", "0.3");
			error.play();
			setTimeout(function(){
				error.pause();
				error.currentTime = 0;
			}, 700);
			setTimeout(function(){
				$(".wrong").hide();
				$(".disease, .cure").css("opacity", "1");
				$('.disease, .cure').prop("disabled", false);
				$('.disease, .cure').prop("checked", false);
			}, 1200);
		}
		
		else if ($('#gastro').val() == "clicked3" && $('#gasomex').is(":hover"))
		{
			$(".wrong").hide();
			$(".correct").show();
			$('.disease, .cure').prop("disabled", true);
			$("#gastro").val("win3");
			$(".disease, .cure").not("#gastro,#gasomex").css("opacity", "0.3");
			success.play();
			setTimeout(function(){
				success.pause();
				success.currentTime = 0;
			}, 1500);
			setTimeout(function(){
				$(".correct").hide();
				$(".disease, .cure").css("opacity", "1");
				$('.disease, .cure').prop("disabled", false);
				$('.disease, .cure').prop("checked", false);
			}, 2000);
		}
		
		else if ($('#gastro').val() == "clicked3" && $('#cure').is(":hover"))
		{
			$(".correct").hide();
			$(".wrong").show();
			$('.disease, .cure').prop("disabled", true);
			$("#gastro").val("lose3");
			$(".disease, .cure").css("opacity", "0.3");
			error.play();
			setTimeout(function(){
				error.pause();
				error.currentTime = 0;
			}, 700);
			setTimeout(function(){
				$(".wrong").hide();
				$(".disease, .cure").css("opacity", "1");
				$('.disease, .cure').prop("disabled", false);
				$('.disease, .cure').prop("checked", false);
			}, 1200);
		}		
		
		if (($('#ortho').val() == "win1") && ($('#migraine').val() == "win2") && ($('#gastro').val() == "win3"))
		{
			setTimeout(function(){
				congrats.play();
				congrats.currentTime = 0;
				congrats.loop = true;
				$('.winnerbox').show();
				$(".wrong, .correct").hide();
				$('.disease, .cure').prop("disabled", false);
			}, 2000);
		}
		
		else
		{
			$('.winnerbox').hide();
		}		
	});