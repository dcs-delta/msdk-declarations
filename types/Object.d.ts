/**
 * Represents unique objects with a body, name, category, and type.
 */
declare class _Object {

	/**
	 * Gets a boolean indicating whether or not the object exists within the current mission.
	 */
	public isExist(): boolean;


	/**
	 * Destroys the object, removing it from the game world without creating an event.
	 */
	public destroy(): void;


	/**
	 * Gets the category of the object.
	 */
	public getCategory(): MSE.ObjectCategory;


	/**
	 * Gets the string that describes the object's type.
	 */
	public getTypeName(): string;


	/**
	 * Gets the descriptor table of the object.
	 *
	 * @deprecated Not yet implemented.
	 */
	public getDesc(): any;


	/**
	 * Gets a boolean indicating whether or not the object has the specified attribute defined.
	 *
	 * @remarks The full list of attributes can be found at {@link https://wiki.hoggitworld.com/view/DCS_enum_attributes hoggit}.
	 *
	 * @param attribute The attribute to check.
	 */
	public hasAttribute(attribute: string): boolean;


	/**
	 * Gets the name of the object as defined by the mission editor or any of the dynamic spawning functions.
	 */
	public getName(): string;


	/**
	 * Gets the location vector of the object.
	 */
	public getPoint(): MSE.Vec3;


	/**
	 * Gets the location vector as well as orientation vectors of the object.
	 */
	public getPosition(): MSE.Position3;


	/**
	 * Gets the velocity vector of the object.
	 */
	public getVelocity(): MSE.Vec3;


	/**
	 * Gets a boolean indicating whether or not the object is currently in the air.
	 */
	public inAir(): boolean;

}
