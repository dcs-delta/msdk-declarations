declare namespace _Object {

	export type CategoryName = "UNIT" | "WEAPON" | "STATIC" | "BASE" | "SCENERY" | "Cargo";
	export type CategoryId = 1 | 2 | 3 | 4 | 5 | 6;

	export const Category: Record<CategoryName, CategoryId>;

}
