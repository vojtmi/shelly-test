const result = Shelly.getComponentStatus("Switch:0");
var complet = 16611 + result.aenergy.total;

console.log("Celkova hodnota: " +complet/1000 + " kWh")
