import { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: "Naga Balm",
    short_name: "Naga Balm",
    description: "Ancient Khmer healing traditions meet modern innovation. Premium balms handcrafted in Cambodia.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#F9461C",
    icons: [
      {
        src: "/images/products-images/NB-OintmentsBox3.jpg",
        sizes: "1200x630",
        type: "image/jpeg"
      },
      {
        src: "/images/Logo/Logo-Landscape-Compact@4x.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/images/Logo/Logo-Landscape-Compact@4x.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      }
    ],
    share_target: {
      action: "/share-target",
      method: "GET",
      params: {
        title: "title",
        text: "text",
        url: "url"
      }
    }
  }
}

export default manifest