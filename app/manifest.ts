import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Savonry Application',
    short_name: 'Savonry App',
    description:
      'Savonry - магазин натуральної косметики та засобів догляду. У нас ви знайдете широкий асортимент органічних продуктів для догляду за шкірою, волоссям та тілом. Відкрийте для себе натуральну красу разом із Savonry.',
    start_url: '/',
    background_color: '#fff',
    theme_color: '#fff',
    display: 'standalone',
    icons: [
      {
        src: '/img/icon.svg',
        sizes: '196x196 512x512 144x144 192x192 128x128 120x120 180x180',
        type: 'image/svg',
        purpose: 'maskable',
      },
    ],
  }
}
