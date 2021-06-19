let staffwork = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let parentElement = document.getElementById('saleslists');

let salesTable = document.getElementById('salesTable');

function Cookiework(name, min, max, avg) {
  this.name = name;
  this.minpeople = min;
  this.maxpeople = max;
  this.agvwork = avg;
  this.cookiesPerwork = [];
  this.total = 0;
  Cookiework.allCookies.push(this);
}

Cookiework.allCookies = [];

Cookiework.prototype.getperson = function() {
  for(let i = 0; i < staffwork.length; i++) {
    // console.log(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

    let cookies = Math.ceil(getRandomperson(this.minpeople, this.maxpeople) * this.agvwork);

    this.cookiesPerwork.push(cookies);

    this.total += cookies;
    // this.total = this.total + cookies;
  }

  // console.log(this.cookiesPerHour);
  // console.log(this.total)
};

Cookiework.prototype.render = function() {
  let tr = document.createElement('tr');
  salesTable.appendChild(tr);

  let th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = this.name;

  for(let i = 0; i < staffwork.length; i++) {
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.cookiesPerwork[i];
  }

  let total = document.createElement('th');
  tr.appendChild(total);
  total.textContent = this.total;
};

let seattle = new Cookiework('Seattle', 23, 65, 6.3);
let tokyo = new Cookiework('Tokyo', 3, 24, 1.2);
let dubai = new Cookiework('Dubai', 11, 38, 3.7);
let paris = new Cookiework('Paris', 20, 38, 2.3);
let lima = new Cookiework('liam', 2, 16, 4.6);

createTableHeader();

seattle.getperson();
seattle.render();

tokyo.getperson();
tokyo.render();

dubai.getperson();
dubai.render();

paris.getperson();
paris.render();

lima.getperson();
lima.render();

createTableFooter();

function createTableHeader() {
  let tr = document.createElement('tr');
  salesTable.appendChild(tr);

  let th1 = document.createElement('th');
  tr.appendChild(th1);
  th1.textContent = 'Location';

  for(let i = 0; i < staffwork.length; i++) {
    let th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = staffwork[i];
  }

  let th3 = document.createElement('th');
  tr.appendChild(th3);
  th3.textContent = 'Daily totals';
}

function createTableFooter() {
  // console.log(CookieStand.allCookies)
  let tr = document.createElement('tr');
  salesTable.appendChild(tr);

  let th1 = document.createElement('th');
  tr.appendChild(th1);
  th1.textContent = 'Totals';

  let hourlyTotal = 0;
  let totalOfTotals = 0;
  for(let i = 0; i < staffwork.length; i++) {
    hourlyTotal = 0;
    for(let j = 0; j <Cookiework.allCookies.length; j++) {
      // console.log(CookieStand.allCookies[j].cookiesPerHour[i])
      let total =Cookiework.allCookies[j].cookiesPerHour[i];
      hourlyTotal += total;
      totalOfTotals += total;
    }
    let th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = hourlyTotal;
  }

  let th3 = document.createElement('th');
  tr.appendChild(th3);
  th3.textContent = totalOfTotals;
}

// Helper function
function getRandomperson(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
