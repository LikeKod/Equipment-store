import { IProduct } from "./common"

export interface IAccordionProps {
  children: React.ReactNode
  title: string | JSX.Element
  titleClass: string
  rotateIconClass?: string
}

export interface IMenuLinkItemProps {
  item: {
    id: number
    text: string
    href: string
  }
  handleRedirectToCatalog: (arg0: string) => void
}


export interface ICatalogMenuButtonProps {
  name: string
  isActive: boolean
  handler: VoidFunction
}

export interface IProductListItemProps {
  item: IProduct
  title?: string
}

export interface IProductLabelProps {
  isNew: boolean
  isBestseller: boolean
}

export interface IProductInfoLabelProps {
  color: string
  className?: string
}