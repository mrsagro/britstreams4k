/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.britstreams4k.uk',
  generateRobotsTxt: false,
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
