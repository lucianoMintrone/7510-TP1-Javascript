var Fact = require('../src/fact');

var Rule = function (line) {
	getFacts = function(line) {
		startIndex = line.indexOf(":-") + 2;
		endIndex = line.length;
		return line.substring(startIndex, endIndex);
	}

	getRuleName = function(line) {
		indexOfPrenthesis = line.indexOf("(");
		return line.substring(0, indexOfPrenthesis);
	}

	getFirstRuleParam = function(line) {
		startIndex = line.indexOf("(") + 1;
		endIndex = line.indexOf(",");
		return line.substring(startIndex, endIndex);
	}

	getSecondRuleParam = function(line) {
		startIndex = line.indexOf(",") + 1;
		endIndex = line.indexOf(")");
		return line.substring(startIndex, endIndex);
	}

	getFirstFact = function() {
		endIndex = factsString.indexOf(",");
		return factsString.substring(0, endIndex);
	}

	getSecondFact = function() {
		startIndex = factsString.indexOf(",") + 1;
		endIndex = factsString.length;
		return factsString.substring(startIndex, endIndex);
	}

	this.comply = function(ruleToSearch, interpreter) {
		firstFactToSearch = new Fact(firstFact.split('X').join(getFirstRuleParam(ruleToSearch)));
		secondFactToSearch = new Fact(secondFact.split('X').join(getFirstRuleParam(ruleToSearch)).split('Y').join(getSecondRuleParam(ruleToSearch)));
		return ruleName === getRuleName(ruleToSearch) && interpreter.isFactInDB(firstFactToSearch) && interpreter.isFactInDB(secondFactToSearch);
	}

	var factsString = getFacts(line);
	var firstFact = getFirstFact();
	var secondFact = getSecondFact();
	var ruleName = getRuleName(line);
}

module.exports = Rule;