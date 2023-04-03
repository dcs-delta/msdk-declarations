/**
 * Represents a weapon object.
 */
declare class Weapon extends _Object implements ICoalitionObject {

	/* ICoalitionObject */
	public getCoalition(): coalition.sideId;
	public getCountry(): country.countryId;




	/**
	 * Gets the {@link Unit unit} that launched the weapon.
	 */
	public getLauncher(): Unit;


	/**
	 * Gets the {@link _Object object} the weapon is guiding to.
	 */
	public getTarget(): _Object;

}
