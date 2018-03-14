function makeGrid() {
    var table, height, width, box, row, remove, x;
    width = $("#input_width").val();
    height = $("#input_height").val();
    table = $("#pixel_canvas");
    remove = $('input[type="remove_table"]');
    x = 0;
    for(var i = 0; i < height; i++){
        table.append("<tr></tr>");
    }
    row = $("tr");
    while(x < width){
        row.append("<td></td>");
        x++;
    }
    box = table.find("td");
    remove.click(function(){
        $("pixel_canvas").children().remove();
    })
	box.click(function() {
        var color;
        color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
};

var submit;
submit = $('input[type="submit"]');

submit.click(function(event) {
  event.preventDefault();
  makeGrid();
});