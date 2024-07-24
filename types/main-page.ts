import { StaticImageData } from "@/node_modules/next/image"


export interface IHeroSlide {
    id?: number
    image: StaticImageData
    title: string
}

export type IHeroSlideTooltip = IHeroSlide

export interface IMainSectionProps {
    
}