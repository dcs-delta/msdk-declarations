declare namespace Group {

	export type CategoryName = "AIRPLANE" | "HELICOPTER" | "GROUND" | "SHIP" | "TRAIN";
	export type CategoryId = 0 | 1 | 2 | 3 | 4;

	export const Category: Record<CategoryName, CategoryId>;

}
