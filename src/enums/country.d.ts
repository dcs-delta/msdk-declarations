declare namespace country {

	export type countryName =
		"RUSSIA"          | "UKRAINE"   | "USA"             | "TURKEY"     | "UK"                   | "FRANCE"       | "GERMANY"        | "AGGRESSORS" | "CANADA"      | "SPAIN"                   |
		"THE_NETHERLANDS" | "BELGIUM"   | "NORWAY"          | "DENMARK" /* | unknown */             | "ISRAEL"       | "GEORGIA"        | "INSURGENTS" | "ABKHAZIA"    | "SOUTH_OSETIA"            |
		"ITALY"           | "AUSTRALIA" | "SWITZERLAND"     | "AUSTRIA"    | "BELARUS"              | "BULGARIA"     | "CHEZH_REPUBLIC" | "CHINA"      | "CROATIA"     | "EGYPT"                   |
		"FINLAND"         | "GREECE"    | "HUNGARY"         | "INDIA"      | "IRAN"                 | "IRAQ"         | "JAPAN"          | "KAZAKHSTAN" | "NORTH_KOREA" | "PAKISTAN"                |
		"POLAND"          | "ROMANIA"   | "SAUDI_ARABIA"    | "SERBIA"     | "SLOVAKIA"             | "SOUTH_KOREA"  | "SWEDEN"         | "SYRIA"      | "YEMEN"       | "VIETNAM"                 |
		"VENEZUELA"       | "TUNISIA"   | "THAILAND"        | "SUDAN"      | "PHILIPPINES"          | "MOROCCO"      | "MEXICO"         | "MALAYSIA"   | "LIBYA"       | "JORDAN"                  |
		"INDONESIA"       | "HONDURAS"  | "ETHIOPIA"        | "CHILE"      | "BRAZIL"               | "BAHRAIN"      | "THIRDREICH"     | "YUGOSLAVIA" | "USSR"        | "ITALIAN_SOCIAL_REPUBLIC" |
		"ALGERIA"         | "KUWAIT"    | "QATAR"           | "OMAN"       | "UNITED_ARAB_EMIRATES" | "SOUTH_AFRICA" | "CUBA"           | "PORTUGAL"   | "GDR"         | "LEBANON"                 |
		"CJTF_BLUE"       | "CJTF_RED"  | "UN_PEACEKEEPERS" | "Argentina"  | "Cyprus"               | "Slovenia"     | "BOLIVIA"        | "GHANA"      | "NIGERIA"     | "PERU"                    |
		"ECUADOR";

	export type countryId =
		 0 |  1 |  2 |  3 |  4 |  5 |  6 |  7 |  8 |  9 |
		10 | 11 | 12 | 13 |      15 | 16 | 17 | 18 | 19 |
		20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 |
		30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 |
		40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 |
		50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 |
		60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 |
		70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 |
		80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 |
		90;

	export const id: Record<countryName, countryId>;
	export const name: Record<countryId, countryName>;
	export const names: Record<countryId, countryName>;

}
