window.onload = function(){
    canvas = document.createElement("canvas");
    pen = canvas.getContext("2d");
    canvas.width = 700;
    canvas.height = 500;
    //adding the canvas to HTML                                       
    document.body.appendChild(canvas);
    pen = canvas.getContext("2d");
    //scan for keyboard inputs
    document.addEventListener("keydown",keyPush);
    //mouse lisenter
    document.addEventListener("mousemove", mouseMoveHandler, false);//mouseMoveHandler isn't defined.
    document.addEventListener("mousedown", mouseClickHandler, false);
    
    var fps = 30;
    setInterval(update,1000/fps);
    //enemy spawn rate
    setInterval(spawn,1000 );
    
    spaceship = new Image();
    spaceship.src = "media/pictures/SpaceGame/PistolPete_SpaceShip.png"
  
  //"http://pluspng.com/img-png/png-pointing-finger-pointing-finger-png-image-43096-878.png"
  }; 
  var lives = (5);
  
  //player stats
  player_x = player_y = 100;
  player_speed = 15;
  player_dim = 30;
  
  //enemy stats
  enemy_list = [];
  enemy_speed = 5;
  enemy_dim = 25;
  
  //shot stats
  shots_list = [];
  shot_speed = 7;
  shot_dim = 4;
  
  
  total_score = 0;
  score = 0;
  
  
  
  //where the enemy spawns
  function spawn(){
    enemy_list.push({x:canvas.width,y:Math.random()*canvas.height});
  }
  
  //updates each frame
  function update(){
    //create black background
    pen.fillStyle="black";
    pen.fillRect(0,0,canvas.width,canvas.height);
    //create our player
  
    
    if (player_y > canvas.height-player_dim){
      player_y = canvas.height-player_dim;
    }
  
    pen.drawImage(spaceship,
    player_x - player_dim / 2,
    player_y - player_dim / 2,
    player_dim,
    player_dim);
    
    pen.fillStyle = "white";
    pen.font = "25px Arial";
    pen.fillText("Lives Left:", 0, 25);
    pen.fillText(lives, 120,25);
    
    pen.fillText("Total score:",190,25)
    pen.fillText(total_score,320,25)
    
    pen.fillText("Score:",370,25)
    pen.fillText(score,445,25) 
  
    pen.font = "13px Arial"
    pen.fillText("Created by: Justin Moua",0,50)
    /*
    pen.fillStyle="white";
    pen.fillRect(player_x-player_dim/2,player_y-player_dim/2,player_dim,player_dim);
    */
                                                                
    //BOUNDRIES
    
    /*
    if (player_y < canvas.height){
      lives --; 
      player_x = player_y = 100;
      score = 0;
    }
    */
  
    //drawing our shots list
    pen.fillStyle = "blue";
    for(var s = 0; s<shots_list.length;s++){
      shots_list[s].x += shot_speed;
      pen.fillRect(shots_list[s].x-shot_dim/2, shots_list[s].y-shot_dim/2, shot_dim,shot_dim);
    
      for (var e = enemy_list.length-1; e>=0; e--){
        // Calculate the distance between the shots and enemies
        var diff_x = Math.abs(enemy_list[e].x - shots_list[s].x);
        var diff_y = Math.abs(enemy_list[e].y - shots_list[s].y);
        var dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y);
        // detects if a shot hits the enemy
        if (dist < (shot_dim + enemy_dim) / 2) {
          enemy_list.splice(e, 1);
          enemy_list.push({x:canvas.width,y:Math.random()*canvas.height})
        total_score++;
        score++;
        }
      }
    }
    
    // //drawing our enemy list
    // pen.fillStyle = 'red';
    // for (var e = 0; e < enemy_list.length; e++){
    //   enemy_list[e].x -= enemy_speed;
    //   pen.fillRect(
    //     enemy_list[e].x - enemy_dim / 2,
    //     enemy_list[e].y - enemy_dim / 2,
    //     enemy_dim,
    //     enemy_dim
    //   );

    // Load enemy image
    var enemyImage = new Image();
    enemyImage.src = "media/pictures/SpaceGame/OU_Enemy.png";

    // Drawing our enemy list
    for (var e = 0; e < enemy_list.length; e++) {
        enemy_list[e].x -= enemy_speed;
        pen.drawImage(
            enemyImage,
            enemy_list[e].x - enemy_dim / 5,
            enemy_list[e].y - enemy_dim / 5,
            enemy_dim,
            enemy_dim
        );
      //Calculate the distance
    var diff_x = Math.abs(enemy_list[e].x - player_x);
    var diff_y = Math.abs(enemy_list[e].y - player_y);
    var dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y);
  
    //detect if an enemy hits our hero.
    if (dist<(player_dim + enemy_dim) / 2){
      //Clear the stats and reset the player if he gets hit.
      shots_list = [];
      enemy_list = [];
      lives --; 
      player_x = player_y = 100;
      score = 0;
      break;
      
  }
  
  
      var diff_x = Math.abs(enemy_list[e].x - player_x);
      var diff_y = Math.abs(enemy_list[e].y - player_y);
      var dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y);
      
      if(lives === 0){
    //for(lives === 0; lives<-100; lives -1){ ===0){
    pen.fillStyle = "red";
    pen.fillRect(0,0,canvas.width, canvas.height);
    pen.fillStyle = "black";
    pen.font = "50px Arial";
    pen.fillText("GAME OVER :(",15,200);
    pen.font = "35px Arial"
    pen.fillText("Press R to restart!!",15,250);
    pen.fillText("Your total Score:",0,30)
    pen.fillText(total_score,260,30)
    score = 0;
    enemy_speed = 0;
    player_speed = 0;
    }
    }
  }
  
  
  
  
  function keyPush(evt){
    switch(evt.keyCode){
      case 32: //spacebar
      shots_list.push({x:player_x, y:player_y});
        break;
      
      case 37: //left arrow
        player_x -= player_speed;
        break;
      
      case 38: //up arrow
        player_y -= player_speed;
        break;
      
      case 39: //right arrow
        player_x += player_speed;
        break;
      
      case 40: //down arrow
        player_y += player_speed;
        break;
      
      case 82: //R key
        if(lives === 0){
         lives += 5;
         total_score = 0;
         score = 0;
         player_speed = 15;
         enemy_speed = 5;
         //make the red dots stop moving.
        }
        break;  
    }
  }
  
  
  function mouseMoveHandler(e){
    player_y = e.clientY
  }
  
  function mouseClickHandler(e){
    //this checks for the left button
    if(e.button === 0){
      shots_list.push({x:player_x, y:player_y});
    }
  }
  
  