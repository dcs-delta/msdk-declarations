declare interface IObject {

	/**
	 * Gets a boolean indicating whether or not the object exists within the current mission.
	 */
	isExist(): boolean;


	/**
	 * Destroys the object, removing it from the game world without creating an event.
	 */
	destroy(): void;


	/**
	 * Gets the category of the object.
	 */
	getCategory(): _Object.CategoryId;


	/**
	 * Gets the string that describes the object's type.
	 */
	getTypeName(): string;


	/**
	 * Gets the descriptor table of the object.
	 *
	 * @deprecated Not yet implemented.
	 */
	getDesc(): any;


	/**
	 * Gets a boolean indicating whether or not the object has the specified attribute defined.
	 *
	 * @remarks The full list of attributes can be found at {@link https://wiki.hoggitworld.com/view/DCS_enum_attributes hoggit}.
	 *
	 * @param attribute The attribute to check.
	 */
	hasAttribute(attribute: string): boolean;


	/**
	 * Gets the name of the object as defined by the mission editor or any of the dynamic spawning functions.
	 */
	getName(): string;


	/**
	 * Gets the location vector of the object.
	 */
	getPoint(): Vec3;


	/**
	 * Gets the location vector as well as orientation vectors of the object.
	 */
	getPosition(): Position3;


	/**
	 * Gets the velocity vector of the object.
	 */
	getVelocity(): Vec3;


	/**
	 * Gets a boolean indicating whether or not the object is currently in the air.
	 */
	inAir(): boolean;

}
