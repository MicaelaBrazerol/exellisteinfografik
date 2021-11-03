console.log('Loading...');

let table;
let temp;
let verschiebung = 100;
let rand = 60;
const canvasHeight = 600;

// https://p5js.org/reference/#/p5/loadTable
function preload() {
  table = loadTable('future_cities_data_truncated.csv', 'csv', 'header');
}

function setup() {
  createCanvas((table.getRowCount() - 1) * verschiebung + 50 + 2 * rand, canvasHeight);

  //print(table.getRowCount() + ' total rows in table');
  //print(table.getColumnCount() + ' total columns in table');
  //print('All cities:', table.getColumn('current_city'));
}

function draw() {
  background(255, 255, 5);
  textSize(12);




  for (let i = 0; i < table.getRowCount(); i++) {  //gibt die gesamtzahl der Reihen in einer Spalte an
    fill(0, 0, 0);
    const city = table.get(i, 'current_city');
    const meanTemp = table.get(i, 'Annual_Mean_Temperature');
    const futuremeanTemp = table.get(i, 'future_Annual_Mean_Temperature');
    const position = map(meanTemp, 0, 40, 525, 50);
    const positionfutur = map(futuremeanTemp, 0, 40, 525, 50);

    text(city, rand + i * verschiebung + 25, 570);
    textAlign(CENTER);
    //temp = (table.getNum(i,15)*2+50);
    //temp2 = 255-temp*0.2;
    //print(temp);


    fill(255);
    rect(rand + i * verschiebung, 50, 50, 475, 25);
    fill(235);
    rect(rand + 15 + i * verschiebung, 50, 20, 475, 25);
    fill(0, 255, 0);
    rect(rand + 15 + i * verschiebung, position, 10, 525 - position, 25, 25, 0, 25);
    fill(255, 0, 0);
    rect(rand + 25 + i * verschiebung, positionfutur, 10, 525 - positionfutur, 25, 25, 25, 0);
    for (let u = 1; u < 8; u++) {
      noFill();
      curve(rand + 15 + i * verschiebung, 525 - u * 59.375 - 25, rand + 15 + i * verschiebung, 525 - u * 59.375, rand + 15 + i * verschiebung + 20, 525 - u * 59.375, rand + 15 + i * verschiebung + 20, 525 - u * 59.375 - 25);
      line(rand - 15 + i * verschiebung, 525 - u * 59.375, rand + 15 + i * verschiebung, 525 - u * 59.375);
      line(rand + 35 + i * verschiebung, 525 - u * 59.375, rand + 50 + i * verschiebung, 525 - u * 59.375);

      fill(0);
      text(str(5 * u), rand - 30 + i * verschiebung, 525 - u * 59.375);
    }
    fill(0);
    textAlign(CENTER);
    text(round(meanTemp, 1) + '°C/' + round(futuremeanTemp, 1) + '°C', rand + i * verschiebung + 25, 40);



  }
}
