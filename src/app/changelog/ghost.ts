import GhostContentAPI from "@tryghost/content-api";

export const GHOST_EGIFTCARD_BLOG_KEY = "49c62b5137df1c17ab6b9e46e3";

const api = new GhostContentAPI({
	key: GHOST_EGIFTCARD_BLOG_KEY,
	version: "v5.0",
	url: "https://egiftcard.ghost.io",
});

export async function fetchChangeLogs() {
	// const res = await fetch(
	// 	`https://egiftcard.ghost.io/ghost/api/content/posts/?key=${GHOST_EGIFTCARD_BLOG_KEY}&fields=title,url,published_at,slug&filter=tag:changelog&visibility:public&limit=30`,
	// );

	// if (!res.ok) {
	// 	throw new Error("Failed to fetch post");
	// }

	return api.posts.browse({
		fields: ["title", "slug", "published_at"],
		filter: ["tag:changelog"],
		order: "published_at DESC",
		limit: 100,
		include: ["authors", "tags"],
	});
}

export async function fetchPost(slug: string) {
	// can't use the 'read' method because it doesn't support including the authors and tags - so using browse instead

	return api.posts.browse({
		filter: `slug:${slug}`,
		include: ["authors", "tags"],
		limit: 1,
	});
}
