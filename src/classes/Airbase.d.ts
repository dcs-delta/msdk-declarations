declare type AirbaseID = number;


/**
 * Represents airbases such as airdromes, and helipads as well as ships with landing pads or flight decks.
 *
 * @deprecated Not yet implemented fully.
 */
declare class Airbase extends _Object implements ICoalitionObject, IIdentifiableEntity<AirbaseID> {

	/* ICoalitionObject */
	public getCountry(): country.countryId;
	public getCoalition(): coalition.sideId;


	/* IIdentifiableEntity */
	public getID(): AirbaseID;




	/**
	 * Gets the parking spots of the airbase, optionally filtering them down to available ones.
	 *
	 * @param available Whether or not to filter the result down to available spots.
	 */
	public getParking(available?: boolean): MSE.AirbaseParkingSpot[];


	/**
	 * Gets the runways of the airbase.
	 */
	public getRunways(): MSE.AirbaseRunway[];


	/**
	 * Gets the tech objects of the specified type of the airbase.
	 *
	 * @param type The tech object type to filter the result down to.
	 */
	// TODO: create enum for type
	public getTechObjectPos(type: string | number): MSE.AirbaseTechObject[];


	/**
	 * Gets a boolean indicating whether or not the airbase's ATC is silenced.
	 */
	public getRadioSilentMode(): boolean;


	/**
	 * Sets the airbase's ATC silent mode.
	 *
	 * @param value Whether or not the airbase's ATC should be silent.
	 */
	public setRadioSilentMode(value: boolean): void;

}
