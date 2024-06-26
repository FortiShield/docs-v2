import { getTDocLayout } from "@/app/references/components/TDoc/PageLayout";
import { fetchReactDoc } from "@/app/references/components/TDoc/fetchDocs/fetchReactDoc";
import { createMetadata } from "@doc";

export default getTDocLayout({
	getDoc: fetchReactDoc,
	packageSlug: "react",
	sdkTitle: "React SDK",
});

export const metadata = createMetadata({
	image: {
		title: "egiftcard React SDK Reference",
		icon: "react",
	},
	title: "References | egiftcard React SDK ",
	description: "Full Reference for egiftcard React SDK.",
});

export const revalidate = 3600; // revalidate at most every hour
