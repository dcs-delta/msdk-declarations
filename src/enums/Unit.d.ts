declare namespace Unit {

	export type CategoryName = "AIRPLANE" | "HELICOPTER" | "GROUND_UNIT" | "SHIP" | "STRUCTURE";
	export type CategoryId = 0 | 1 | 2 | 3 | 4;

	export const Category: Record<CategoryName, CategoryId>;


	export type RefuelingSystemName = "BOOM_AND_RECEPTACLE" | "PROBE_AND_DROGUE";
	export type RefuelingSystemId = 0 | 1;

	export const RefuelingSystem: Record<RefuelingSystemName, RefuelingSystemId>;


	export type SensorTypeName = "OPTIC" | "RADAR" | "IRST" | "RWR";
	export type SensorTypeId = 0 | 1 | 2 | 3;

	export const SensorType: Record<SensorTypeName, SensorTypeId>;


	export type OpticTypeName = "TV" | "LLTV" | "IR";
	export type OpticTypeId = 0 | 1 | 2;

	export const OpticType: Record<OpticTypeName, OpticTypeId>;


	export type RadarTypeName = "AS" | "SS";
	export type RadarTypeId = 0 | 1;

	export const RadarType: Record<RadarTypeName, RadarTypeId>;

}
