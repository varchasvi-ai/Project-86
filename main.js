var canvas = new fabric.canvas("myCanvas");

var canvas = new fabric.Canvas("myCanvas");

var player_x = 10;
var player_y = 10;
var block_image_width = 50;
var block_image_height = 50;

var player_object = "";
var block_image_object = "";

function player_update()
{
    fabric.Image.fromURL( "https://lh6.googleusercontent.com/iA0PwVk9X6FN7aIKINe3CiXXNP0TMF15N8Z3IOMVbb9zERHHbWmzb0bF1qtO-ShuPg4sZFlako4hrrZGBprk=w1440-h789-rw" , function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL( get_image , function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}