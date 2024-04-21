import { fetchJSON } from "@/lib/fetchJSON";
import { transform } from "typedoc-better-json";
import { withCache } from "../../../../../lib/withCache";

export async function fetchTypeScriptDoc(version: string) {
	let URL =
		"https://raw.githubusercontent.com/egiftcard/js/main/legacy_packages/sdk/typedoc/documentation.json.gz";

	if (version === "v5") {
		URL =
			"https://raw.githubusercontent.com/egiftcard/js/main/packages/egiftcard/typedoc/documentation.json.gz";
	}

	const doc = await withCache(() => fetchJSON(URL), {
		cacheKey: URL,
		// cache for 10min
		cacheTime: 10 * 60 * 1000,
	});

	return transform(doc as any);
}
