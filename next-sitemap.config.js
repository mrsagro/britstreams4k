/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://britstreams4k.uk',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    additionalPolicies: [
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' }
    ]
  }
}
