declare namespace trigger {

	export type smokeColorName = "Green" | "Red" | "White" | "Orange" | "Blue";
	export type smokeColorId = 0 | 1 | 2 | 3 | 4;

	export const smokeColor: Record<smokeColorName, smokeColorId>;




	export type flareColorName = "Green" | "Red" | "White" | "Yellow";
	export type flareColorId = 0 | 1 | 2 | 3;

	export const flareColor: Record<flareColorName, flareColorId>;

}
