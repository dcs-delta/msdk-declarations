declare type AirbaseID = number;


/**
 * Parking type.
 */
declare enum AirbaseParkingType {
	RunwaySpawn = 16,
	Helicopter = 40,
	HardenedAirShelter = 68,
	Airplane = 72,
	Open = 104
}


/**
 * Parking spot data.
 */
declare interface AirbaseParkingSpot {
	/**
	 * Parking identifier.
	 */
	Term_Index: number;

	/**
	 * World position.
	 */
	vTerminalPos: Vec3,

	TO_AC: boolean;

	Term_Index_0: number;

	/**
	 * Type of parking.
	 */
	Term_Type: AirbaseParkingType,

	/**
	 * Distance to active runway in meters.
	 */
	fDistToRW: number;
}


/**
 * Airbase runway data.
 */
declare interface AirbaseRunway {
	/**
	 * Bearing in radians. Always negative for some reason, convert to absolute prior to use.
	 */
	course: number;

	Name: any | null; // TODO: determine whether or not this should be a string or a number

	/**
	 * World position of the center of the runway.
	 */
	position: Vec3;

	/**
	 * Length of the runway in meters.
	 */
	length: number;

	/**
	 * Width of the runway in meters.
	 */
	width: number;
}


/**
 * Airbase tech object data.
 */
declare interface AirbaseTechObject {
	pos: Vec3;
}




/**
 * Represents airbases such as airdromes, and helipads as well as ships with landing pads or flight decks.
 *
 * @deprecated Not yet implemented fully.
 */
declare class Airbase implements IObject, IIdentifiableEntity<AirbaseID>, ICoalitionObject {

	/* IObject */
	public isExist(): boolean;
	public destroy(): void;
	public getCategory(): _Object.CategoryId;
	public getTypeName(): string;
	public getDesc(): any;
	public hasAttribute(attribute: string): boolean;
	public getName(): string;
	public getPoint(): Vec3;
	public getPosition(): Position3;
	public getVelocity(): Vec3;
	public inAir(): boolean;

	/* IIdentifiableEntity */
	public getID(): AirbaseID;

	/* ICoalitionObject */
	public getCountry(): country.countryId;
	public getCoalition(): coalition.sideId;




	/**
	 * Gets the parking spots of the airbase, optionally filtering them down to available ones.
	 *
	 * @param available Whether or not to filter the result down to available spots.
	 */
	public getParking(available?: boolean): AirbaseParkingSpot[];


	/**
	 * Gets the runways of the airbase.
	 */
	public getRunways(): AirbaseRunway[];


	/**
	 * Gets the tech objects of the specified type of the airbase.
	 *
	 * @param type The tech object type to filter the result down to.
	 */
	// TODO: create enum for type
	public getTechObjectPos(type: string | number): AirbaseTechObject[];


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
