const Util = require("../utils");
const {
	getPossibleZodiacs,
	getZodiacDates,
	getZodiacSign,
} = require("./helpers");

module.exports = ({ month, day, year }, type = "tropical") => {
	const signs = require(type === "tropical"
		? "./signs/tropical.json"
		: "./signs/sidereal.json");
	const [birthMonth, birthDay] = Util.getDateDetails(day, month, year);
	const filteredSigns = getPossibleZodiacs(signs, birthMonth, getZodiacDates);
	const signDetails = getZodiacSign(filteredSigns, {
		birthMonth,
		birthDay,
		getZodiacDates,
	});
	return signDetails;
};
