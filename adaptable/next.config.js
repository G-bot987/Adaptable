/** @type {import('next').NextConfig} */
const nextConfig = {
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]_[hash:base64:5]",
    },
}

module.exports = nextConfig
