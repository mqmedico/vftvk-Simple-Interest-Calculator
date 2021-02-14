function compute()
{
  //p = document.getElementById("principal").value;
	var principal = document.getElementById("principal").value;
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var interest = principal * years * rate / 100;
	var year = "";


//converting input box to dropdown list for selecting the year...
	switch(years) {
		case "1":
			year = "2021";
		break;
		case "2":
			year = "2022";
		case "3":
			year = "2023";
		break;
		case "4":
			year = "2024";
		break;
		case "5":
			year = "2025";
		break;
		case "6":
			year = "2026";
		break;
		case "7":
			year = "2027";
		break;
		case "8":
			year = "2028";
		break;
		case "9":
			year = "2029";
		break;
		case "10":
			year = "2030";
		break;
	}

	// Checking if the input for principal is equal or less than 0...
	if (principal <= 0){
		alert("Enter a positive number");
		document.getElementById("principal").focus;
	} else {

		// Displaying the result...
		document.getElementById("result").innerHTML = "<br/>If you deposit  " + "<mark>" +principal+ "</mark>" +
		"<br/>At an interest rate of  " + "<mark>" + rate + "%" + "</mark>" +
		"<br/>You will receive an amount of  " + "<mark>" + interest + "</mark>"+
		"<br/>In the year " + "<mark>" +year + "</mark>";
	}
}

//Setting slider values...
function slider(){
	document.getElementById("rvalue").innerHTML = document.getElementById('rate').value + "%";
}
