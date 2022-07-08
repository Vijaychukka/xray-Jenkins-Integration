$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AcceptencetestsPassed.feature");
formatter.feature({
  "line": 2,
  "name": "Add the products into cart and verify the product list",
  "description": "",
  "id": "add-the-products-into-cart-and-verify-the-product-list",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Happypath"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#  Background:"
    },
    {
      "line": 4,
      "value": "#  Given Launch chrome browser and navigate to Demo url"
    }
  ],
  "line": 5,
  "name": "testing scenario",
  "description": "",
  "id": "add-the-products-into-cart-and-verify-the-product-list;testing-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "demo application is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "print application",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.demoApplicationIsOpened()"
});
formatter.result({
  "duration": 131759800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.printApplication()"
});
formatter.result({
  "duration": 73400,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "testing scenario2",
  "description": "",
  "id": "add-the-products-into-cart-and-verify-the-product-list;testing-scenario2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "demo application is openedsecondtime",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "print applicationsecondtime",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.demoApplicationIsOpenedsecondtime()"
});
formatter.result({
  "duration": 94300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.printApplicationsecondtime()"
});
formatter.result({
  "duration": 62900,
  "status": "passed"
});
});