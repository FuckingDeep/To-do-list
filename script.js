jQuery(function() {
    
    $('.add').on('click', function() {
        var ol = document.createElement("ol");
        ol.innerHTML = "<label><input class='real-check' type='checkbox'><span class='custom-checkbox'></span><span class='text'></span></label>";
        $('.Checklist').append(ol);

        var inp = $("input").val();
        $(".Checklist ol:last span.text").html(inp);
    })
}) 