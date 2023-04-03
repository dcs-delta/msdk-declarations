/**
 * Interface defining members used by objects that belong to a coalition.
 */
declare interface ICoalitionObject extends ICoalitionEntity {

	/**
	 * Gets the country of the coalition object.
	 */
	getCountry(): country.countryId;

}
