n = 0.01
a = 0.1
particle = []
particle2 = []
focus = 0

// 背景
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(175, 150, 70)
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
				stroke(0, random(10, random(15, 50)))
						strokeWeight(map(sin(a/100), -1, 1, 1, random(1, 5)))
		point(p.x, p.y)
		line(p.x - cos(a)*random(20), p.y, p.x + cos(a)*random(20), p.y)
		strokeWeight(1)
		stroke(0, 100)
		//point(p.x, p.y)
		p.x += random(-map(sin(n), -1, 1, 0, map(sin(a), -1, 1, 0, random(5, random(5, 20)))), map(sin(n), -1, 1, 0, map(sin(a), -1, 1, 0, random(5, random(5, 20)))))
		p.y += random(map(cos(n), -1, 1, 0, map(cos(a), -1, 1, 0, random(5, random(5, 20)))), -map(cos(n), -1, 1, 0, map(cos(a), -1, 1, 0, random(5, random(5, 20)))))
		
						strokeWeight(random(2))
		stroke(255, random(0, random(1, random(2, random(5, 50)))))
				circle(p2.x, p2.y, random(1, random(20, 150)))
				stroke(255, random(10, random(15, 30)))
						strokeWeight(map(cos(n/10), -1, 1, 1, random(1, 5)))
		point(p2.x, p2.y)
				line(p2.x, p2.y - sin(n)*random(20), p2.x, p2.y + sin(n)*random(20))
		strokeWeight(1)
		stroke(255, 100)
		//point(p2.x, p2.y)
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
}

function onScreen(v) {
return v.x < width - focus && v.y < height - focus && v.x > focus && v.y > focus
}