
function preload() {
    bod1 = loadImage('pics/bodbod1.png')
    bod2 = loadImage('pics/bodbod2.png')
    bod3 = loadImage('pics/bodbod3.png')
    bod4 = loadImage('pics/bodbod4.png')
    bod5 = loadImage('pics/bodbod5.png')
    bod6 = loadImage('pics/bodbod6.png')
    arms1 = loadImage('pics/armmie1.png')
    arms2 = loadImage('pics/armmie2.png')
    arms3 = loadImage('pics/armmie3.png')
    arms4 = loadImage('pics/armmie4.png')
    legs1 = loadImage('pics/legday1.png')
    legs2 = loadImage('pics/legday2.png')
    legs3 = loadImage('pics/legday3.png')
    legs4 = loadImage('pics/legday4.png')
    legs5 = loadImage('pics/legday5.png')
    legs6 = loadImage('pics/legday6.png')
    eyes1 = loadImage('pics/eyeball1.png')
    eyes2 = loadImage('pics/eyeball2.png')
    eyes3 = loadImage('pics/eyeball3.png')
    eyes4 = loadImage('pics/eyeball4.png')
    eyes5 = loadImage('pics/eyeball5.png')
    eyes6 = loadImage('pics/eyeball6.png')
    mouth1 = loadImage('pics/mouthy1.png')
    mouth2 = loadImage('pics/mouthy2.png')
    mouth3 = loadImage('pics/mouthy3.png')
    mouth4 = loadImage('pics/mouthy4.png')
    mouth5 = loadImage('pics/mouthy5.png')

}
function setup() {
    createCanvas(900, 1000)
   imageMode(CENTER);
  
}


//mouse pressed in certain area?? or anywhere to get constant
//random matches
function draw() {
fill(0)
textSize(30)
text('Click to make your Confectionery Creature', 0, 50)

}



function mousePressed() {
background(51, 40, 35)

    legg(350, 550)
    arms(350, 360)
    body(350, 300)  
    mouth(350, 370)
    eyes(350, 280)

}

function arms(x, y) {
    let atom = [arms1, arms2, arms3, arms4]
    let armFu = random(atom)
    image(armFu, x, y, 420, 470)
}


function body(x, y) {
    //put random function in here
    let bo = [bod1, bod2, bod3, bod4, bod5, bod6]
    let bodPie = random(bo)
    image(bodPie, x, y, 250, 320)
}

function mouth(x, y) {
    let monty = [mouth1, mouth2, mouth3, mouth4, mouth5]
    let openMont = random(monty)
    image(openMont, x, y, 150, 150)
}

function eyes(x, y) {
    let ball = [eyes1, eyes2, eyes3, eyes4, eyes5, eyes6]
    let ballEye = random(ball)
    image(ballEye, x, y, 130, 130)
}

function legg(x, y) {
    let tes = [legs1, legs2, legs3, legs4, legs5, legs6]
    let limb = random(tes)
    image(limb, x, y, 250, 500)
}