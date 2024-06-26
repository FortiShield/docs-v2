import { createMetadata } from "@/components/Document";

export default function Layout(props: { children: React.ReactNode }) {
	return (
		<main className="container max-w-3xl py-10" data-noindex>
			{props.children}
		</main>
	);
}

export const metadata = createMetadata({
	title: "egiftcard Changelog",
	description: "Changelog for egiftcard products",
});
