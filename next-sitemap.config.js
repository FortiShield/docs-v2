/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || "https://portal.egiftcard.cc",
	generateRobotsTxt: true, // (optional)
	robotsTxtOptions: {
		// disallow all crawlers on dev and preview
		policies: [
			{
				userAgent: "*",
				[process.env.VERCEL_ENV !== "preview" &&
				process.env.VERCEL_ENV !== "development"
					? "allow"
					: "disallow"]: "/",
			},
		],
	},
};
