const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions : ['jsx','js','mdx','ts','tsx']
}

module.exports = withMDX(nextConfig)
