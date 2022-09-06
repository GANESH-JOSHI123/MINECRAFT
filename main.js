var canvas=new fabric.Canvas('myCanvas');

blockwidth=30;
blockheight=30;

playerx=10;
playery=10;

var player_object="";
var block_object="";
function player_update()
{
   fabric.Image.fromURL("player.png",function(Img){

    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
      top:playery,
      left:playerx

    });
     canvas.add(player_object)

   });

}



function new_image(get_image)
{
   fabric.Image.fromURL(get_image,function(Img){

    block_object=Img;
    block_object.scaleToWidth(blockwidth);
    block_object.scaleToHeight(blockheight);
    block_object.set({
      top:playery,
      left:playerx

    });
     canvas.add(block_object)

   });

}


window.addEventListener("keydown",keypress);
function keypress(e)
{
var keypressed=e.keyCode;
if (e.shiftKey==true && keypressed=='80' )
{
blockwidth=blockwidth+10;
blockheight=blockheight+10;
document.getElementById("width").innerHTML=blockwidth;
document.getElementById("height").innerHTML=blockheight;

}

if (e.shiftKey==true && keypressed=='77' )
{
blockwidth=blockwidth-10;
blockheight=blockheight-10;
document.getElementById("width").innerHTML=blockwidth;
document.getElementById("height").innerHTML=blockheight;

}


if(keypressed=='38')
{
up();
console.log("up")
}

if(keypressed=='40')
{
down();
console.log("down")
}

if(keypressed=='37')
{
left();
console.log("left")
}

if(keypressed=='39')
{
right();
console.log("right")
}


if(keypressed=='87')
{
new_image('wall.jpg')
console.log("w")
}

if(keypressed=='71')
{
new_image('ground.png')
console.log("g")
}

if(keypressed=='85')
{
new_image('unique.png')
console.log("u")
}

if(keypressed=='82')
{
new_image('roof.jpg')
console.log("r")
}

if(keypressed=='72')
{
new_image('light_green.png')
console.log("l")
}

if(keypressed=='68')
{
new_image('dark_green.png')
console.log("d")
}

if(keypressed=='67')
{
new_image('cloud.jpg')
console.log("c")
}

if(keypressed=='84')
{
new_image('trunk.jpg')
console.log("t")
}

if(keypressed=='89')
{
new_image('yellow_wall.png')
console.log("y")
}


}

function up()
{
if (playery>=0)
{
  playery=playery-blockheight;
  console.log("block height="+blockheight);
  console.log("when up arrow key is pressed,  x= "+playerx+"y= "+playery );
  canvas.remove(player_object);
  player_update();
}

}

function down()
{
if (playery<=500)
{
  playery=playery+blockheight;
  console.log("block height="+blockheight);
  console.log("when down arrow key is pressed,  x= "+playerx+"y= "+playery );
  canvas.remove(player_object);
  player_update();
}

}

function left()
{
if (playerx>=0)
{
  playerx=playerx-blockwidth;
  console.log("block width="+blockwidth);
  console.log("when left arrow key is pressed,  x= "+playerx+"y= "+playery );
  canvas.remove(player_object);
  player_update();
}

}

function right()
{
if (playerx<=800)
{
  playerx=playerx+blockwidth;
  console.log("block width="+blockwidth);
  console.log("when right arrow key is pressed,  x= "+playerx+"y= "+playery );
  canvas.remove(player_object);
  player_update();
}

}