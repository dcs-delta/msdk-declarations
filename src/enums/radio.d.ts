declare namespace radio {

	export type modulationName = "AM" | "FM";
	export type modulationId = 0 | 1;

	export const modulation: Record<modulationName, modulationId>;

}
