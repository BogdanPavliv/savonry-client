import { StaticImageData } from 'next/image'

export interface IHeroSlide {
  id?: number
  image: StaticImageData
  title: string
  href: string
  text: string
}