import { DocLayout } from "@/components/Layouts/DocLayout";
import { sidebar } from "./sidebar";
import { createMetadata } from "@/components/Document";

export default async function Layout(props: { children: React.ReactNode }) {
	return (
		<DocLayout sideBar={sidebar} editPageButton={true}>
			{props.children}
		</DocLayout>
	);
}

export const metadata = createMetadata({
	title: "egiftcard Contracts",
	description:
		"Easily create, deploy, and manage smart contracts on any EVM compatible blockchain",
	image: {
		title: "egiftcard contracts",
		icon: "contract",
	},
});
