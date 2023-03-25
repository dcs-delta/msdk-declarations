declare module coalition {

	/**
	 * Spawns a new group belonging to the specified country's coalition with the specified group category based on the specified group data.
	 *
	 * @param country The country the new group belongs to.
	 * @param category The group's category.
	 * @param data The group descriptor table.
	 *
	 * @deprecated Not yet implemented.
	 */
	// TODO: proper typing for any
	export function addGroup(this: void, country: MSE.Country, category: MSE.GroupCategory, data: any): Group;


	/**
	 * Spawns a new static object belonging to the specified country's coalition based on the specified static object data.
	 *
	 * @param country The country the new static object belongs to.
	 * @param data The static object descriptor table.
	 *
	 * @deprecated Not yet implemented.
	 */
	export function addStaticObject(this: void, country: MSE.Country, data: any): StaticObject;


	/**
	 * Gets the groups that belong to the specified coalition, optionally filtering based on group category if specified.
	 *
	 * @remarks This function returns both destroyed and undestroyed groups.
	 *
	 * @param coalition The coalition to get the groups for.
	 * @param category Optional category to use to filter the returned groups.
	 */
	export function getGroups(this: void, coalition: MSE.CoalitionSide, category?: MSE.GroupCategory): Group[];


	/**
	 * Gets the static objects that belong to the specified coalition.
	 *
	 * @param coalition The coalition to get the static objects for.
	 *
	 * @deprecated Not yet implemented.
	 */
	export function getStaticObjects(this: void, coalition: MSE.CoalitionSide) : StaticObject[];


	/**
	 * Gets the airbases that belong to the specified coalition.
	 *
	 * @param coalition The coalition to get the airbases for.
	 */
	export function getAirbases(this: void, coalition: MSE.CoalitionSide) : Airbase[];


	/**
	 * Gets the units occupied by players that belong to the specified coalition.
	 *
	 * @param coalition The coalition to get the player units for.
	 */
	export function getPlayers(this: void, coalition: MSE.CoalitionSide) : Unit[];


	/**
	 * Gets the unit capable of providing the specified service type that belong to the specified coalition.
	 *
	 * @param coalition The coalition to get the service units for.
	 * @param type The service the units must provider.
	 */
	export function getServiceProviders(this: void, coalition: MSE.CoalitionSide, type: MSE.CoalitionService): Unit[];


	/**
	 * Gets the coalition side of the specified country.
	 *
	 * @param country The country to get the coalition side for.
	 */
	export function getCountryCoalition(this: void, country: MSE.Country): MSE.CoalitionSide;

}
