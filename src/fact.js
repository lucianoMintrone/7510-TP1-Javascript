var Fact = function (line) {
	getFactName = function() {
		var indexOfPrenthesis = line.indexOf("(");
		return line.substring(0, indexOfPrenthesis);
	}

	getFirstFactParam = function() {
		var startIndex = line.indexOf("(") + 1;
		var endIndex = line.indexOf(",") > 0 ? line.indexOf(",") : line.indexOf(")");
		return line.substring(startIndex, endIndex);
	}

	getSecondFactParam = function() {
		var startIndex = line.indexOf(",") + 1;
		var endIndex = line.indexOf(")");
		return startIndex > 0 ? line.substring(startIndex, endIndex) : null;
	}

	var line = line;
	var factName = getFactName();
	var firstFactParam = getFirstFactParam();
	var secondFactParam = getSecondFactParam();

	this.factName = factName;
	this.firstFactParam = firstFactParam;
	this.secondFactParam = secondFactParam;

	this.isEqualTo = function(fact) { 
		return factName === fact.factName && firstFactParam === fact.firstFactParam && secondFactParam === fact.secondFactParam;
	}
}

module.exports = Fact;