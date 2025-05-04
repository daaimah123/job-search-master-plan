/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',  // Enables static HTML export
  distDir: 'out',    // The directory to export to
  images: {
    unoptimized: true, // Required for static export
  },
  // Configure basePath and assetPrefix for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/job-search-master-plan' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/job-search-master-plan/' : '',
  trailingSlash: true, // Recommended for GitHub Pages
}

export default nextConfig
