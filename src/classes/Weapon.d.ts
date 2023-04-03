/**
 * Represents a weapon object.
 */
declare class Weapon implements IObject, ICoalitionObject {

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

	/* ICoalitionObject */
	public getCoalition(): coalition.sideId;
	public getCountry(): country.countryId;




	/**
	 * Gets the {@link Unit unit} that launched the weapon.
	 */
	public getLauncher(): Unit;


	/**
	 * Gets the {@link IObject object} the weapon is guiding to.
	 */
	public getTarget(): IObject;

}
