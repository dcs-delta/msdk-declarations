declare namespace missionCommands {

	/**
	 * Callback signature.
	 *
	 * @param context The context given by the invocation of {@link missionCommands.addCommand}.
	 */
	export type CommandCallback = (context: any) => any;


	/**
	 * Placeholder type that represents a radio menu.
	 */
	export type RadioMenuPath = object;




	/**
	 * Adds a command to the radio menu of all players, allowing them to run the specified callback.
	 *
	 * @param name Text to display to the players, also serves as an identifier for the item.
	 * @param parent The parent menu to place this command in, or null if none.
	 * @param callback The callback to execute when this command is activated.
	 * @param context An optional argument to pass to the callback.
	 */
	export function addCommand(this: void, name: string, parent: RadioMenuPath | null, callback: CommandCallback, context?: any): RadioMenuPath;


	/**
	 * Creates a submenu in the radio menu of all players.
	 *
	 * @param name Text to display to the players, also serves as an identifier for the item.
	 * @param parent The parent menu to place this submenu in, or null if none.
	 */
	export function addSubMenu(this: void, name: string, parent: RadioMenuPath | null): RadioMenuPath;


	/**
	 * Removes the specified item from the radio menu, or all items if the specified item is null.
	 *
	 * @param item The item to remove, or null to remove all items.
	 */
	export function removeItem(this: void, item: RadioMenuPath | null): void;




	/**
	 * Adds a command to the radio menu of all players, allowing them to run the specified callback.
	 *
	 * @param coalition The coalition to which the item will be visible.
	 * @param name Text to display to the players, also serves as an identifier for the item.
	 * @param parent The parent menu to place this command in, or null if none.
	 * @param callback The callback to execute when this command is activated.
	 * @param context An optional argument to pass to the callback.
	 */
	export function addCommandForCoalition(this: void, coalition: coalition.sideId, name: string, parent: RadioMenuPath | null, callback: CommandCallback, context?: any): RadioMenuPath;


	/**
	 * Creates a submenu in the radio menu of all players.
	 *
	 * @param coalition The coalition to which the item will be visible.
	 * @param name Text to display to the players, also serves as an identifier for the item.
	 * @param parent The parent menu to place this submenu in, or null if none.
	 */
	export function addSubMenuForCoalition(this: void, coalition: coalition.sideId, name: string, parent: RadioMenuPath | null): RadioMenuPath;


	/**
	 * Removes the specified item from the radio menu, or all items if the specified item is null.
	 *
	 * @param coalition The coalition to which the item will be visible.
	 * @param item The item to remove, or null to remove all items.
	 */
	export function removeItemForCoalition(this: void, coalition: coalition.sideId, item: RadioMenuPath | null): void;




	/**
	 * Adds a command to the radio menu of all players, allowing them to run the specified callback.
	 *
	 * @param groupId The ID of the group to which the item will be visible.
	 * @param name Text to display to the players, also serves as an identifier for the item.
	 * @param parent The parent menu to place this command in, or null if none.
	 * @param callback The callback to execute when this command is activated.
	 * @param context An optional argument to pass to the callback.
	 */
	export function addCommandForGroup(this: void, groupId: GroupID, name: string, parent: RadioMenuPath | null, callback: CommandCallback, context?: any): RadioMenuPath;


	/**
	 * Creates a submenu in the radio menu of all players.
	 *
	 * @param groupId The ID of the group to which the item will be visible.
	 * @param name Text to display to the players, also serves as an identifier for the item.
	 * @param parent The parent menu to place this submenu in, or null if none.
	 */
	export function addSubMenuForGroup(this: void, groupId: GroupID, name: string, parent: RadioMenuPath | null): RadioMenuPath;


	/**
	 * Removes the specified item from the radio menu, or all items if the specified item is null.
	 *
	 * @param groupId The ID of the group to which the item will be visible.
	 * @param item The item to remove, or null to remove all items.
	 */
	export function removeItemForGroup(this: void, groupId: GroupID, item: RadioMenuPath | null): void;

}
