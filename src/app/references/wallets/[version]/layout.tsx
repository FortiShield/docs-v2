import { getTDocLayout } from "@/app/references/components/TDoc/PageLayout";
import { fetchWalletsDoc } from "@/app/references/components/TDoc/fetchDocs/fetchWalletsDoc";
import { createMetadata } from "@doc";

export default getTDocLayout({
	getDoc: fetchWalletsDoc,
	packageSlug: "wallets",
	sdkTitle: "Wallet SDK",
});

export const metadata = createMetadata({
	image: {
		title: "egiftcard Wallet SDK Reference",
		icon: "wallets",
	},
	title: "References | egiftcard Wallet SDK ",
	description: "Full Reference for egiftcard Wallet SDK.",
});

export const revalidate = 3600; // revalidate at most every hour
