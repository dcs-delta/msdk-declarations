declare namespace Weapon {

	export type CategoryName = "SHELL" | "MISSILE" | "ROCKET" | "BOMB" | "TORPEDO";
	export type CategoryId = 0 | 1 | 2 | 3 | 4;

	export const Category: Record<CategoryName, CategoryId>;




	export type GuidanceTypeName =
		"INS" | "IR" | "RADAR_ACTIVE" | "RADAR_SEMI_ACTIVE" | "RADAR_PASSIVE" |
		"TV" | "LASER" | "TELE";

	export type GuidanceTypeId =
		1 | 2 | 3 | 4 | 5 |
		6 | 7 | 8;

	export const GuidanceType: Record<GuidanceTypeName, GuidanceTypeId>;




	export type MissileCategoryName =
		"AAM" | "SAM" | "BM" | "ANTI_SHIP" | "CRUISE" |
		"OTHER";

	export type MissileCategoryId =
		1 | 2 | 3 | 4 | 5 |
		6;

	export const MissileCategory: Record<MissileCategoryName, MissileCategoryId>;




	export type WarheadTypeName = "AP" | "HE" | "SHAPED_CHARGE";
	export type WarheadTypeId = 0 | 1 | 2;

	export const WarheadType: Record<WarheadTypeName, WarheadTypeId>;

}
