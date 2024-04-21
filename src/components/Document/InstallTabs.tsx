import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { CodeBlock } from "./Code";

export function InstallTabs(props: {
	npm: string;
	yarn: string;
	pnpm: string;
	bun?: string;
	egiftcardInstallSupported?: boolean;
}) {
	return (
		<Tabs defaultValue={props.egiftcardInstallSupported ? "npx" : "npm"}>
			<TabsList>
				{props.egiftcardInstallSupported && (
					<TabsTrigger value="npx">npx</TabsTrigger>
				)}
				<TabsTrigger value="npm">npm</TabsTrigger>
				<TabsTrigger value="yarn">yarn</TabsTrigger>
				<TabsTrigger value="pnpm">pnpm</TabsTrigger>
				{props.bun && <TabsTrigger value="bun">bun</TabsTrigger>}
			</TabsList>
			{props.egiftcardInstallSupported && (
				<TabsContent value="npx">
					<CodeBlock code={`npx egiftcard install`} lang="bash" />
				</TabsContent>
			)}
			<TabsContent value="npm">
				<CodeBlock code={props.npm} lang="bash" />
			</TabsContent>
			<TabsContent value="yarn">
				<CodeBlock code={props.yarn} lang="bash" />
			</TabsContent>
			<TabsContent value="pnpm">
				<CodeBlock code={props.pnpm} lang="bash" />
			</TabsContent>
			{props.bun && (
				<TabsContent value="bun">
					<CodeBlock code={props.bun} lang="bash" />
				</TabsContent>
			)}
		</Tabs>
	);
}
