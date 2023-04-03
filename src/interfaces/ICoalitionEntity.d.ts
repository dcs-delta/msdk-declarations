/**
 * Interface defining members used by entities that belong to a coalition.
 */
declare interface ICoalitionEntity {

	/**
	 * Gets the coalition side of the coalition entity.
	 */
	getCoalition(): coalition.sideId;

}
