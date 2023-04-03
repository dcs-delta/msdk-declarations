declare namespace StaticObject {

	export type CategoryName = "VOID" | "UNIT" | "WEAPON" | "STATIC" | "BASE" | "SCENERY" | "CARGO";
	export type CategoryId = 0 | 1 | 2 | 3 | 4 | 5 | 6;

	export const Category: Record<CategoryName, CategoryId>;

}
