function annualBudget(foodBudget,transportBudget,facilityBudget){
    annualizedBudget=foodBudget+transportBudget+facilityBudget;
    document.writeln(
        "Food Budget: " + foodBudget +"<br>"+
        "Transport Budget: " + transportBudget +"<br>"+
        "Facility Budget: " + facilityBudget +"<hr>"+
        "Annual Budget: " + annualizedBudget);
}

// This line was creating error
// console.log(annualBudget())
