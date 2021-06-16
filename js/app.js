
'use strict';

let OperationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm','4pm','5pm','6pm','7pm'];
let seattle = {
  name: 'Seattle',
  minCus: 23,
  maxCus: 65,
  avgCookiesCus: 6.3,
  cookiesSoldHour: [],
  total: 0,
  cookiesSoldPerhours: function() {
    for(let i = 0; i < OperationHours.length; i++) {
      let avarage = Math.ceil((Math.random() * (this.maxCus - this.minCus + 1) + this.minCus) * this.avgCookiesCus);
      this.cookiesSoldHour.push(avarage);
      this.total += avarage;
    }},
  render : function(){
    let salesLists = document.getElementById('salesLists');

    let liststArticleElement = document.createElement('article');
    salesLists.appendChild(liststArticleElement);


    let locationName = document.createElement('h2');
    liststArticleElement.appendChild(locationName);
    locationName.textContent = this.name;

    let saleslistElement = document.createElement('ul');
    liststArticleElement.appendChild(saleslistElement);

    for(let i = 0; i < this.cookiesSoldHour.length ; i++) {
      let listItem = document.createElement('li');
      saleslistElement.appendChild(listItem);
      listItem.textContent = OperationHours[i] + ': ' + this.cookiesSoldHour[i] + ' cookies';
    }

    let listItem = document.createElement('li');
    saleslistElement.appendChild(listItem);
    listItem.textContent ='Total: ' + this.total + ' cookies';
  }};


let tokyo = {
  name: 'Tokyo',
  minCus: 3,
  maxCus: 24,
  avgCookiesCus: 1.2,
  cookiesSoldHour: [],
  total: 0,
  cookiesSoldPerhours: function() {
    for(let i = 0; i < OperationHours.length; i++) {
      let avarage = Math.ceil((Math.random() * (this.maxCus - this.minCus + 1) + this.minCus) * this.avgCookiesCus);
      this.cookiesSoldHour.push(avarage);
      this.total += avarage;
    }},
  render : function(){
    let salesLists = document.getElementById('salesLists');

    let liststArticleElement = document.createElement('article');
    salesLists.appendChild(liststArticleElement);


    let locationName = document.createElement('h2');
    liststArticleElement.appendChild(locationName);
    locationName.textContent = this.name;

    let saleslistElement = document.createElement('ul');
    liststArticleElement.appendChild(saleslistElement);

    for(let i = 0; i < this.cookiesSoldHour.length ; i++) {
      let listItem = document.createElement('li');
      saleslistElement.appendChild(listItem);
      listItem.textContent = OperationHours[i] + ': ' + this.cookiesSoldHour[i] + ' cookies';
    }

    let listItem = document.createElement('li');
    saleslistElement.appendChild(listItem);
    listItem.textContent ='Total: ' + this.total + ' cookies';
  }};

let dubai = {
  name: 'Dubai',
  minCus: 11,
  maxCus: 38,
  avgCookiesCus: 3.7,
  cookiesSoldHour: [],
  total: 0,
  cookiesSoldPerhours: function() {
    for(let i = 0; i < OperationHours.length; i++) {
      let avarage = Math.ceil((Math.random() * (this.maxCus - this.minCus + 1) + this.minCus) * this.avgCookiesCus);
      this.cookiesSoldHour.push(avarage);
      this.total += avarage;
    }},
  render : function(){
    let salesLists = document.getElementById('salesLists');

    let liststArticleElement = document.createElement('article');
    salesLists.appendChild(liststArticleElement);


    let locationName = document.createElement('h2');
    liststArticleElement.appendChild(locationName);
    locationName.textContent = this.name;

    let saleslistElement = document.createElement('ul');
    liststArticleElement.appendChild(saleslistElement);

    for(let i = 0; i < this.cookiesSoldHour.length ; i++) {
      let listItem = document.createElement('li');
      saleslistElement.appendChild(listItem);
      listItem.textContent = OperationHours[i] + ':' + this.cookiesSoldHour[i] + ' cookies';
    }

    let listItem = document.createElement('li');
    saleslistElement.appendChild(listItem);
    listItem.textContent ='Total: ' + this.total + ' cookies';
  }};

let paris = {
  name: 'Paris',
  minCus: 20,
  maxCus: 38,
  avgCookiesCus: 2.3,
  cookiesSoldHour: [],
  total: 0,
  cookiesSoldPerhours: function() {
    for(let i = 0; i < OperationHours.length; i++) {
      let avarage = Math.ceil((Math.random() * (this.maxCus - this.minCus + 1) + this.minCus) * this.avgCookiesCus);
      this.cookiesSoldHour.push(avarage);
      this.total += avarage;
    }},
  render : function(){
    let salesLists = document.getElementById('salesLists');

    let liststArticleElement = document.createElement('article');
    salesLists.appendChild(liststArticleElement);


    let locationName = document.createElement('h2');
    liststArticleElement.appendChild(locationName);
    locationName.textContent = this.name;

    let saleslistElement = document.createElement('ul');
    liststArticleElement.appendChild(saleslistElement);

    for(let i = 0; i < this.cookiesSoldHour.length ; i++) {
      let listItem = document.createElement('li');
      saleslistElement.appendChild(listItem);
      listItem.textContent = OperationHours[i] + ':' + this.cookiesSoldHour[i] + ' cookies';
    }

    let listItem = document.createElement('li');
    saleslistElement.appendChild(listItem);
    listItem.textContent ='Total: ' + this.total + ' cookies';
  }};

let lima = {
  name: 'Lima',
  minCus: 2,
  maxCus: 16,
  avgCookiesCus: 4.6,
  cookiesSoldHour: [],
  total: 0,
  cookiesSoldPerhours: function() {
    for(let i = 0; i < OperationHours.length; i++) {
      let avarage = Math.ceil((Math.random() * (this.maxCus - this.minCus + 1) + this.minCus) * this.avgCookiesCus);
      this.cookiesSoldHour.push(avarage);
      this.total += avarage;
    }},
  render : function(){
    let salesLists = document.getElementById('salesLists');

    let liststArticleElement = document.createElement('article');
    salesLists.appendChild(liststArticleElement);


    let locationName = document.createElement('h2');
    liststArticleElement.appendChild(locationName);
    locationName.textContent = this.name;

    let saleslistElement = document.createElement('ul');
    liststArticleElement.appendChild(saleslistElement);

    for(let i = 0; i < this.cookiesSoldHour.length ; i++) {
      let listItem = document.createElement('li');
      saleslistElement.appendChild(listItem);
      listItem.textContent = OperationHours[i] + ':' + this.cookiesSoldHour[i] + ' cookies';
    }

    let listItem = document.createElement('li');
    saleslistElement.appendChild(listItem);
    listItem.textContent ='Total: ' + this.total + ' cookies';
  }};
seattle.cookiesSoldPerhours();
seattle.render();
tokyo.cookiesSoldPerhours();
tokyo.render();
dubai.cookiesSoldPerhours();
dubai.render();
paris.cookiesSoldPerhours();
paris.render();
lima.cookiesSoldPerhours();
lima.render();

