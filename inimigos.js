function inc() {
	if(frameCount%50===0){
		var rend=Math.round(random(1,gin.length));
		if(gin[rend]!== undefined){
		var shot=createSprite(gin[rend].position.x,gin[rend].position.y,8,2);
		shot.velocityX=-9;
		gti.add(shot);
		}
	}

}