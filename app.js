$(document).ready(function() {
    $('#submit-item').click(function() {
        var toAdd = $('#item-input').val();
        $('.list').append('<p class="item">' + toAdd + '</p>')

        $('#item-input').val('');
    });

    //////Mark Complete
    $(document).on('click', '.item', function() {
    	$(this).addClass('completed-item');
    	$(this).append()

    });

    //////Undo Complete
		$(document).on('click', '.completed-item', function() {
    	$(this).removeClass('completed-item');

    });


    /////Clear completed 
    $(document).on('click', '#clear-complete', function() {
    	$('.completed-item').remove();
    });
    
    	
});






 		