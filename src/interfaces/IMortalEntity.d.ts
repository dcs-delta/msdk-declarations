declare interface IMortalEntity {

	/**
	 * Gets the current HP of the unit. If the value is less than 1, the unit is considered dead.
	 */
	getLife(): number;

}
