let word = 'apple';

 function getWeek(){
  let inputVal = document.getElementById('month').value;

  switch(parseInt(inputVal)){
    case 1:
      document.getElementById('result').innerHTML ="January";
      break;
    case 2:
      document.getElementById('result').innerHTML ="February";
      break;
    case 3:
      document.getElementById('result').innerHTML ="March";
      break;
    case 4:
      document.getElementById('result').innerHTML ="April";
      break;
    case 5:
      document.getElementById('result').innerHTML ="May";
      break;
    case 6:
      document.getElementById('result').innerHTML ="June";
      break;
    case 7:
      document.getElementById('result').innerHTML ="Iyul";
      break;
    case 8:
        document.getElementById('result').innerHTML ="August";
      break;
    case 9:
        document.getElementById('result').innerHTML ="September";
      break;
    case 10:
        document.getElementById('result').innerHTML ="October";
      break;
    case 11:
        document.getElementById('result').innerHTML ="November";
      break;
    case 12:
        document.getElementById('result').innerHTML ="December";
      break;
    case 13:
        document.getElementById('result').innerHTML ="Calendar weeks 2024";
      break;
    case 14:
        document.getElementById('result').innerHTML ="Monday";
      break;
    case 15:
        document.getElementById('result').innerHTML ="Tuesday";
      break;
    case 16:
        document.getElementById('result').innerHTML ="Wednesday";
      break;
    case 17:
        document.getElementById('result').innerHTML ="Thursday";
      break;
    case 18:
        document.getElementById('result').innerHTML ="Friday";
      break;
    case 19:
        document.getElementById('result').innerHTML ="Saturday";
      break;
    case 20:
        document.getElementById('result').innerHTML ="Sunday";
      break;
    default:
        document.getElementById('result').innerHTML ="Sorry no such result exists !!!";
  }
 }
