n = 0.01
a = 0.1
particle = []
particle2 = []
focus = 0
let extraCanvas;

let joinedText ="Kubla Khan In Xanadu did Kubla Khan A stately pleasure-dome decree: Where Alph, the sacred river, ran Through caverns measureless to man Down to a sunless sea. So twice five miles of fertile ground With walls and towers were girdled round; And here were gardens bright with sinuous rills Where blossom'd many an incense-bearing tree; And here were forests ancient as the hills, Enfolding sunny spots of greenery. But oh that deep romantic chasm which slanted Down the green hill athwart a cedarn cover! A savage place! as holy and inchanted As e'er beneath a waning moon was haunted By woman wailing for her demon-lover! And from this chasm, with ceaseless turmoil seething, As if this earth in fast thick pants were breathing, A mighty fountain momently was forced: Amid whose swift half-intermitted Burst Huge fragments vaulted like rebounding hail, Or chaffy grain beneath the thresher's flail: And mid these dancing rocks at once and ever It flung up momently the sacred river. Five miles meandering with a mazy motion Through wood and dale the sacred river ran, Then reached the caverns measureless to man, And sank in tumult to a lifeless ocean: And 'mid this tumult Kubla heard from far Ancestral voices prophesying war! The shadow of the dome of pleasure Floated midway on the waves; Where was heard the mingled measure From the fountain and the caves. It was a miracle of rare device, A sunny pleasure-dome with caves of ice! A damsel with a dulcimer In a vision once I saw: It was an Abyssinian maid And on her dulcimer she play'd, Singing of Mount Abora. Could I revive within me Her symphony and song, To such a deep delight 'twould win me, That with music loud and long, I would build that dome in air, That sunny dome! those caves of ice! And all who heard should see them there, And all should cry, Beware! Beware! His flashing eyes, his floating hair! Weave a circle round him thrice, And close your eyes with holy dread: For he on honey-dew hath fed, And drank the milk of Paradise."
let alphabet
let posX, posY
let drawLetters = []
let drawLines = false
let drawText = true

var canvas;

// function windowResized(){
// 	resizeCanvas(windowWidth, windowHeight);
// 	background(175, 150, 70);
// }

// 背景
function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index','-1');
	extraCanvas = createGraphics(windowWidth, windowHeight);
	extraCanvas.clear();
	background(175, 150, 70);
	for (i = 0; i < 1000; i++) {
	particle.push(createVector(random(width), random(height)))
		particle2.push(createVector(random(width), random(height)))
	}	
}

function draw() {

	for (i = 0; i < random(200, 1000); i++) {
	p = particle[i]
		p2 = particle2[i]
			strokeWeight(random(2))
		stroke(0, random(0, random(1, random(2, random(5, 50)))))
		noFill()
		circle(p.x, p.y, random(1, random(20, 150)))
	
		p.x += random(-map(sin(n), -1, 1, 0, map(sin(a), -1, 1, 0, random(5, random(5, 20)))), map(sin(n), -1, 1, 0, map(sin(a), -1, 1, 0, random(5, random(5, 20)))))
		p.y += random(map(cos(n), -1, 1, 0, map(cos(a), -1, 1, 0, random(5, random(5, 20)))), -map(cos(n), -1, 1, 0, map(cos(a), -1, 1, 0, random(5, random(5, 20)))))
		
		p2.x += random(-map(cos(n), -1, 1, 0, map(cos(a), -1, 1, 0, random(5, random(5, 20)))), map(cos(n), -1, 1, 0, map(cos(a), -1, 1, 0, random(5, random(5, 20)))))
		p2.y += random(map(sin(n), -1, 1, 0, map(sin(a), -1, 1, 0, random(5, random(5, 20)))), -map(sin(n), -1, 1, 0, map(sin(a), -1, 1, 0, random(5, random(5, 20)))))
		
		stroke(185 + (sin(n)*10), 155, 75, random([0, random(0, random(0, 5))]))
		strokeWeight(1)
		line(p.x, p2.y, p2.x, p.y)
		line(p.x, p.y, p2.x, p2.y)
				stroke(160 + (sin(n)*20), 50, 10, random([0, random(0, random(0, 10))]))
		line(p.x, p.y, random(width), height)
				line(p2.x, p2.y, random(width), height)
		
		stroke(175, 150, 70, 20)
		strokeWeight(1)
		point(random(p.x, p2.x), random(p.y, p2.y))
	}
	n += map(cos(a), -1, 1, 0, map(sin(a/100), -1, 1, 0.01, 0.00001))
	a += sin(n)	

// ----------- Text -----------
textFont('DungGeunMo.ttf', 100);
extraCanvas.fill(255,255,255);
alphabet = getUniqCharacters()
	console.log(alphabet)
for (let i = 0; i < alphabet.length; i++) {
   drawLetters[i] = true
}
  push();
  
  posX = 20;
  posY = 40;
  let oldX = 0;
  let oldY = 0;
  
  for (let i = 0; i < joinedText.length; i++) {
    let upperCaseChar = joinedText.charAt(i).toUpperCase()
    let index = alphabet.indexOf(upperCaseChar)
    if (index < 0) continue
    let sortY = index * 20 + 200
    let m = map(mouseX, 50, width - 50, 0, 1)
    m = constrain(m, 0, 1)
    let interY = lerp(posY, sortY, m)
    
    if (drawLetters[index]) {
      if (drawText) {
        //extraCanvas.noStroke()
        text(joinedText.charAt(i), posX, interY)
      }
    } else {
      oldX = 0
      oldY = 0
    }
    
    posX += textWidth(joinedText.charAt(i))
    if (posX >= width - 50 && upperCaseChar == ' ') {
      posY += 30
      posX = 20
    }
  }
  //image(extraCanvas,0,0);
  pop();

// 交互
// push();
//   noStroke();
//   fill(10,2);
//   for(let i=0;i<5;i++){
//   rect(width/28 + i * 280, height/5+15, width/20+150, 450);
//   }
// pop();
}

function getUniqCharacters() {
	var charsArray = joinedText.toUpperCase().split('');
	var uniqCharsArray = charsArray.filter(function(char, index) {
	  return charsArray.indexOf(char) == index;
	}).sort();
	return uniqCharsArray.join('');
  }

