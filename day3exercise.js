var words = new Array(10);

words[0] = ['one','two','three','four','five','six','seven','eight','nine','ten'];
words[1] = ['apple','ant','alphabet','author','anywhere','after','anything','albert','always','about'];
words[2] = ['balloon','bat','bell','bench','bill','bling','boast','belt','ball','bounce'];
words[3] = ['cat','call','camp','car','cape','code','canaveral','carnival','carnivor','carniforous'];
words[4] = ['dog','doll','diet','domino','date','dade','day','david','doodle','door'];
words[5] = ['elephant','euphoria','eleven','even','edward','enter','elbow', 'elf','end','elevator'];
words[6] = ['foul','fall','fast','four','five','fear','fright','friday','freight','freddy'];
words[7] = ['glock','gun','gum','girl','great','grate','grave','good','grill','grin'];
words[8] = ['hall','help','hold','held','hey','hate','horror','happy','helicopter','holiday'];
words[9] = ['infinite','imagination','immigrant','immigrate','intelligence','intellectual','ibis','iris','isis','ice'];

var coordinates = new Array();
var currentRow = 0;
var currentCol = 0;

function buildGrid() {
   var grid = "";

   grid = "<table cellpadding='8' border='1'>";

for (var i = 0; i < 10; i++) {
	grid += '<tr>';
    for (var j = 0; j < 10; j++){
		  grid += "<td"
		  if (i = currentRow && j == currentCol)
		  grid += "style='background-color: #cc0000' ";
		  grid += ">" + words[i][j] + "</td>";
	 }
	 grid +='</tr>';
}
   grid += '</table>';
   grid += '<input type=text name="row" label="row" value="row" id="row" size=5>';
   grid += '<input type=text name="column" label="column" value="column" id="column" size=5>';
	grid += '<input type=text name="newWord" label="new Word" value="new word" id="word" size=5>';
  	grid += '<button type="button" onclick="changeWord()">Change</button>';
  	grid += '<button type="button" onclick="goUp()">Up</button>';
  	grid += '<button type="button" onclick="goDown()">Down</button>';
  	grid += '<button type="button" onclick="goRight()">Right</button>';
	grid += '<button type="button" onclick="goLeft()">Left</button><br/>';
	grid += displayCoors();
   return grid;
}
  
document.write(buildGrid())

function changeWord() {
	var row = document.getElementById("row").value;
	var column = document.getElementById("column").value;
	var word = document.getElementById("word").value;
	words[row][column] = word;
	document.body.innerHTML = buildGrid();
}

function goUp() {
	currentRow = currentRow - 1;
	coordinates.push(currentRow + ", " + currentCol);
	document.body.innerHTML = buildGrid();
}

function goDown() {
	currentRow = currentRow + 1;
	coordinates.push(currentRow + ", " + currentCol);
	document.body.innerHTML = buildGrid();
}

function goRight() {
	currentCol = currentCol + 1;
	coordinates.push(currentRow + ", " + currentCol);
	document.body.innerHTML = buildGrid();
}

function goLeft() {
	currentCol = currentCol - 1;
	coordinates.push(currentRow + ", " + currentCol);
	document.body.innerHTML = buildGrid();
}

function displayCoors(){
	var list = "";
	for (var k = 0; k < coordinates.length; k++) {
		list += coordinates[k] + "<br/>";
	}
	return list;
}

