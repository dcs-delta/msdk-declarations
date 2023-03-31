/**
 * Interface defining members used by entities that belong to a coalition.
 */
declare interface ICoalitionEntity {

	/**
	 * Gets the coalition side of the coalition entity.
	 */
	getCoalition(): MSE.CoalitionSide;

}


/**
 * Interface defining members used by objects that belong to a coalition.
 */
declare interface ICoalitionObject extends ICoalitionEntity {

	/**
	 * Gets the country of the coalition object.
	 */
	getCountry(): country.countryId;

}
