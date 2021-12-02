/* Crie uma calculador na qual a entrada de itens retorna um resultado que é armazenado em uma lista. */

let calculator = {
	listExpression: [],

	listOperation: function (valueA, valueB, expression) {
		return this.listExpression.push({
			operation: `${valueA} ${expression} ${valueB} = ${result}`,
		});
	},

	sum: function (valueA, valueB) {
		expression = "+";
		result = valueA + valueB;
		this.listOperation(valueA, valueB, expression);
		return result;
	},

    substract: function (valueA, valueB) {
		result = valueA - valueB;
		expression = "-";
		this.listOperation(valueA, valueB, expression);
		return result;
	},

	multiply: function (valueA, valueB) {
		result = valueA * valueB;
		expression = "*";
		this.listOperation(valueA, valueB, expression);
		return result;
	},

	divide: function (valueA, valueB) {
		result = valueA / valueB;
		expression = "/";
		this.listOperation(valueA, valueB, expression);
		return result;
	},

	reset: function () {
		this.valueA = 0;
		this.valueB = 0;
		this.listExpression = [];
		return `The listing was successfully reset.`;
	},
};