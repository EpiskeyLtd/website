$(document).ready(function() {
	$('#contact_box').hide();
	$('#details_box').hide();
	$('#work_box').hide();
	$('#staff_box').hide();

	$('#details').click(function() {
		$('#contact_box').hide();
		$('#work_box').hide();
		$('#staff_box').hide();
		$('#details_box').toggle();
		return false;	
	});

	$('#contact').click(function() {
		$('#details_box').hide();
		$('#work_box').hide();
		$('#staff_box').hide();
		$('#contact_box').toggle();
		return false;	
	});
	
	$('#work').click(function() {
		$('#details_box').hide();
		$('#contact_box').hide();
		$('#staff_box').hide();
		$('#work_box').toggle();
		return false;	
	});

	$('#staff').click(function() {
		$('#details_box').hide();
		$('#contact_box').hide();
		$('#work_box').hide();
		$('#staff_box').toggle();
		return false;
	});
	

});
