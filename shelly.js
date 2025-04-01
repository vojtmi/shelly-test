const result = Shelly.getComponentStatus("Switch:0");
//Set value from analog in [WATT] 
var complet = 16611 + result.aenergy.total;
//Print to console final value
console.log("Celkova hodnota: " +complet/1000 + " kWh")
