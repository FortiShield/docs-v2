import { getTDocLayout } from "@/app/references/components/TDoc/PageLayout";
import { fetchTypeScriptDoc } from "@/app/references/components/TDoc/fetchDocs/fetchTypeScriptDoc";
import { createMetadata } from "@doc";

export default getTDocLayout({
	getDoc: fetchTypeScriptDoc,
	packageSlug: "typescript",
	sdkTitle: "TypeScript SDK",
});

export const metadata = createMetadata({
	image: {
		title: "egiftcard TypeScript SDK Reference",
		icon: "typescript",
	},
	title: "References | egiftcard TypeScript SDK ",
	description: "Full Reference for egiftcard TypeScript SDK.",
});

export const revalidate = 3600; // revalidate at most every hour
