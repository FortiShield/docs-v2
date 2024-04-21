import { TokenInfo } from "typedoc-better-json";
import { getAllTSReferencesLinks } from "./getAllTSReferencesLinkMap";

// TODO: take the current package version as input, fetch the dependencies from NPM, and point to the correct version instead of /latest/

export async function getTokenLinks(
	tokens: TokenInfo[],
): Promise<Map<string, string>> {
	const linkMap = new Map<string, string>();
	const validReferenceLinks = await getAllTSReferencesLinks();

	function setLink(key: string, value: string) {
		if (validReferenceLinks.has(value)) {
			linkMap.set(key, value);
		}
	}

	tokens.forEach((token) => {
		if (token.package) {
			switch (token.package) {
				case "@egiftcard/react-core":
				case "@egiftcard/react": {
					setLink(token.name, `/references/react/latest/${token.name}`);
					break;
				}

				case "@egiftcard/react-native": {
					setLink(token.name, `/references/react-native/latest/${token.name}`);
					break;
				}

				case "@egiftcard/sdk": {
					setLink(token.name, `/references/typescript/v4/${token.name}`);
					break;
				}

				case "egiftcard": {
					setLink(token.name, `/references/typescript/v5/${token.name}`);
					break;
				}

				case "@egiftcard/storage": {
					setLink(token.name, `/references/storage/latest/${token.name}`);
					break;
				}

				case "@egiftcard/wallets": {
					setLink(token.name, `/references/wallets/latest/${token.name}`);
					break;
				}
			}
		}
	});

	return linkMap;
}
