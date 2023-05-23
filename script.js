//height and width variables
var w = window.innerWidth
var h = window.innerHeight
w = view.bounds.width
h = view.bounds.height

//random int tool
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

//variables for grid
var gridGroup = new Group()
var gridW = getRandomInt(40,100)-Math.random()*40
var gridH = getRandomInt(40,80)
var gridSize = (w / gridW)
var gridSizeH = (h / gridH)

//colorssss [layer1, layer2, layer3, layer4, background]
var palleteA = ['blue', 'lightpink','green','yellow','black'] //weather looking one
    palleteC = ['#A55FFF', '#FF2929','#38FFF3','yellow','#284BFF']
    palleteD = ['#A65776','magenta','yellow', '#31CB66','#0A139B']
    palleteE = ['#7CAD9B','#A22667', '#7629F2', '#F22929', '#D6DC3A'] //accidental y project tank
    palleteF = ['lawngreen','blue','magenta','olivedrab','#194343'] //funky green
    palleteG = ['#FF0099','#FF63C1','#FFBDE5','yellow','fuchsia'] //hot pink and yellow
    palleteH = ['#E7738C', '#FF479F', 'red', '#FFD81C' , '#67C022'] //green pink yellow
    palleteI = ['#215019', '#00A023', '#97FF8E', 'blue' , 'black']
    palleteK = ['magenta', 'cyan','yellow', 'white','black'] //cmyk 1
    palleteL = ['#922505', '#AC4403','#DD8204','#FFC043', '#351402'] //blade runner las vegas
    palleteM = ['#373E10','#7B790E','#647C64','#C2D6B9','#2D2D1B'] //blade runner worm farm
    palleteN = ['#D1BEB8','#868C36','#868C36','lightpink','#D4D3D0'] //soft green and lilac
    palleteO = ['purple','#868C36','#D1BEB8','cyan','whitesmoke'] //white purple grey
    palleteP = ['darkblue','magenta','olivedrab','lawngreen','#194343']
    //pallete = ['#','#','#','#','#']

    //array of arrays
    var palletes = [palleteA, palleteC, palleteD, palleteE, palleteF, palleteG, palleteH, palleteI, palleteK, palleteL, palleteM, palleteN]
    //var palletes = [palleteA]
    var chosenPallete = palletes[Math.floor(Math.random() * palletes.length)]
    
    var layer1 = chosenPallete[0]
    var layer2 = chosenPallete[1]
    var layer3 = chosenPallete[2]
    var layer4 = chosenPallete[3]    
    var base = chosenPallete[4]

    //background    
for (i=0; i < gridW; i++){
    for (j=0; j < gridH; j++){
        // console.log("i:" + i + "j:" +j);
        var x = gridSize * i 
        var y = gridSizeH * j; 

        var rectangle = new Rectangle(new Point(0,0), new Point(x+gridSize, y+gridSizeH))
        var gridRectangle = new Path.Rectangle(rectangle);
        gridRectangle.selected = false
        
        gridRectangle.fillColor = base
    }
}

//layer1
var xcoord = getRandomInt(-3,w)
var ycoord = getRandomInt(-3,h)

for (j = 0; j < gridH; j++) {
    for (i = 0; i < gridW; i++) {
        
        var x = gridSize * i
        var y = gridSizeH * j
        var rect = new Rectangle(new Point(xcoord , ycoord), new Point(getRandomInt(1,w), getRandomInt(1,h-10)))
        var path = new Path.Rectangle(rect);
        path.fillColor = layer1
        path.opacity = Math.random()*0.17
    }
}

//layer2
for (j = 0; j < gridH; j++) {
    for (i = 0; i < gridW; i++) {
        
        var x = (gridSize * i)*getRandomInt(1,20)
        var y = (gridSizeH * j)/5
        var rect = new Rectangle(new Point(xcoord , ycoord), new Point(getRandomInt(1,w), getRandomInt(1,h-10)))
        var path = new Path.Rectangle(rect);
        path.fillColor = layer2
        path.opacity = Math.random()*0.025
    }
}

//layer3
for (j = 0; j < gridH; j++) {
    for (i = 0; i < gridW; i++) {
        
        var x = (gridSize * i)/10
        var y = (gridSizeH * j)/10
        var rect = new Rectangle(new Point(xcoord , ycoord), new Point(getRandomInt(1,w), getRandomInt(1,h-10)))
        var path = new Path.Rectangle(rect);
        path.fillColor = layer3
        path.opacity = Math.random()*0.006-Math.random()*0.01 
    }
}

//layer4
for (j = 0; j < gridH; j++) {
    for (i = 0; i < gridW; i++) {
        
        var x = (gridSize * i)/20
        var y = (gridSizeH * j)/20
        var rect = new Rectangle(new Point(xcoord/getRandomInt(1,3), ycoord/getRandomInt(1,3)), new Point(getRandomInt(1,w), getRandomInt(1,h-10)))
        var path = new Path.Rectangle(rect);
        path.fillColor = layer4
        path.opacity = Math.random()*0.008 - Math.random()*0.004
        
    }
}
