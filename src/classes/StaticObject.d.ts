declare type StaticObjectID = number;


/**
 * Represents static objects.
 */
declare class StaticObject implements IObject, ICoalitionObject, IIdentifiableEntity<StaticObjectID>, IAnimatableEntity, IMortalEntity {

	/* IObject */
	public isExist(): boolean;
	public destroy(): void;
	public getCategory(): _Object.CategoryId; // TODO: investigate true behavior of this function, docs are confusing
	public getTypeName(): string;
	public getDesc(): any;
	public hasAttribute(attribute: string): boolean;
	public getName(): string;
	public getPoint(): Vec3;
	public getPosition(): Position3;
	public getVelocity(): Vec3;
	public inAir(): boolean;

	/* ICoalitionObject */
	public getCountry(): country.countryId;
	public getCoalition(): coalition.sideId;

	/* IIdentifiableEntity */
	public getID(): StaticObjectID;

	/* IAnimatableEntity */
	public getDrawArgumentValue(arg: number): number;

	/* IMortalEntity */
	public getLife(): number;




	/**
	 * Gets the cargo display name of this object.
	 */
	public getCargoDisplayName(): string;


	/**
	 * Gets the cargo mass of this object in kg.
	 */
	public getCargoWeight(): number;




	/**
	 * Gets the static object with the specified unique name.
	 *
	 * @param name The name of the static object to retrieve.
	 */
	public static getByName(this: void, name: string): StaticObject;


	/**
	 * Gets the descriptor table of the static object with the specified unique name.
	 *
	 * @param name The name of the static object to retrieve the descriptor table of.
	 *
	 * @deprecated Not yet implemented.
	 */
	// TODO: use proper type instead of any
	public static getDescByName(this: void, name: string): any;

}
