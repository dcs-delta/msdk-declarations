// TODO: proper types
declare type Task = object;
declare type Command = object;


/**
 * @deprecated Not yet implemented.
 */
declare class Controller {

	/**
	 * Sets the specified task to the entities associated with the controller.
	 *
	 * @param task The task.
	 */
	public setTask(task: Task): void;


	/**
	 * Resets the currently assigned task.
	 */
	public resetTask(): void;


	/**
	 * Pushes the specified task to the front of the tasking queue.
	 *
	 * @param task The task.
	 */
	public pushTask(task: Task): void;


	/**
	 * Removes the top task from the tasking queue.
	 */
	public popTask(): void;


	/**
	 * Gets a boolean indicating whether or not the controller currently has a task.
	 */
	public hasTask(): boolean;


	/**
	 * Execute the specified command on the controller.
	 *
	 * @remarks This has no impact on current tasking.
	 *
	 * @param command The command to execute.
	 */
	public setCommand(command: Command): void;


	/**
	 * Change the specified options of the controller.
	 *
	 * @param option The option identifier that identifies which option should be changed.
	 * @param value The option value to which the option should be changed to.
	 */
	public setOption(option: AI.Option.Air.Key | AI.Option.Ground.Key | AI.Option.Naval.Key, value: AI.Option.Air.Value | AI.Option.Ground.Value | AI.Option.Naval.Value): void;


	/**
	 * Enables or disables the AI controller.
	 *
	 * @remarks Only works for controllers assigned to surface units.
	 *
	 * @param value Whether or not the controller is enabled.
	 */
	public setOnOff(value: boolean): void;


	/**
	 * Sets the controlled aircraft to the specified altitude in meters.
	 *
	 * @param altitude The altitude in meters.
	 * @param keep Whether or not to persist this altitude irrelevant of waypoint configuration.
	 * @param altType The altitude type to maintain, one of {@link AI.Task.AltitudeType}.
	 */
	public setAltitude(altitude: number, keep?: boolean, altType?: AI.Task.AltitudeTypeValue): void;


	/**
	 * Sets the controlled aircraft to the specified speed in meters per second.
	 *
	 * @param speed The speed in meters per second.
	 * @param keep Whether or not to persist this speed irrelevant of waypoint configuration.
	 */
	public setSpeed(speed: number, keep?: boolean): void;


	/**
	 * Forces the controlled unit to become aware of the specified object.
	 *
	 * @param object The object to become aware of.
	 * @param typeKnown Whether or not the object type is known.
	 * @param distanceKnown Whether or not the object distance is known.
	 */
	public knowTarget(object: IObject, typeKnown?: boolean, distanceKnown?: boolean): void;


	/**
	 * Checks if the specified object is detected or not.
	 *
	 * If one or more detection methods are specified, detection is determined based on whether the object is detected using that very detection type.
	 * Otherwise, with no detection types specified, detection is determined based on all available detection types.
	 *
	 * @param object The object to check if the controller has detected.
	 * @param detectionType One or more detection types to filter detection, or none to not discriminate based on detection type.
	 */
	public isTargetDetected(object: IObject, ...detectionType: Controller.DetectionId[]): [detected: boolean, visible: boolean, lastTime: number, typeKnown: boolean, distanceKnown: boolean, lastPos: Vec3, lastVel: Vec3];


	/**
	 * Gets a list of detected targets.
	 *
	 * If one or more detection methods are specified, detection is determined based on whether the object is detected using that very detection type.
	 * Otherwise, with no detection types specified, detection is determined based on all available detection types.
	 *
	 * @param detectionType One or more detection types to filter detection, or none to not discriminate based on detection type.
	 */
	public getDetectedTargets(...detectionType: Controller.DetectionId[]): Controller.DetectionTarget[];

}
