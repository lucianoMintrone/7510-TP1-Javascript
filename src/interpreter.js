var Fact = require('../src/fact');
var Rule = require('../src/rule');

var Interpreter = function () {
	parseLine = function(line) {
		return line.split(" ").join("").split('.').join('');
	}

	isARule = function(line) {
		return line.indexOf(":-") < 0;
	}

	this.parseDB = function (params) {
		params.forEach(function(element) {
			line = parseLine(element);
			isARule(line) ? facts.push(new Fact(line)) : rules.push(new Rule(line));
		});
	}

	this.checkQuery = function (params) {
		line = parseLine(params);
		return isRuleInDB(line) || isFactInDB(new Fact(line));
	}

	isFactInDB = function(factToSearch) { 
		factFound = false;
		facts.forEach(function(fact) {
			if (fact.isEqualTo(factToSearch)) {
				factFound = true;
			}
		});
		return factFound;
	}

	isRuleInDB = function(ruleToSearch) {
		ruleFound = false;
		rules.forEach(function(rule) {
			if (rule.comply(ruleToSearch, this)) {
				ruleFound = true;
			}
		});
		return ruleFound;
	}

	var facts = [];
	var rules = [];
}

module.exports = Interpreter;