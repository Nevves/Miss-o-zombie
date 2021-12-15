var npcz1, npcz1_Amt;


function preload(){
    npcz1_Amt = loadAnimation("../imagens/left1.png", 
    "../imagens/left2.png", "../imagens/left3.png", 
    "../imagens/left4.png");

}

function setup(){
    canvas = createCanvas(400,400);
    
    npcz1 = createSprite(200,200,20,20);
    npcz1.addAnimation("animação do npc", npcz1_Amt);
    npcz1.scale = 0.05;
}

function draw(){
    background("white");

    if (keyDown("A")){
        npcz1.x -= 3;
    }

    if (keyDown("D")){
        npcz1.x += 3;
    }

    if (keyDown("W")){
        npcz1.y -= 3;
    }

    if (keyDown("S")){
        npcz1.y += 3;
    }

    drawSprites();
}