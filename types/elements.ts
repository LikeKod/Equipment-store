export interface IProductSubtitleProps {
    subtitleClassName?: string
    subtitleRectClassName?: string
}

export interface IProductItemActionBtnProps {
    text: string
  iconClass: string
  spinner?: boolean
  callback?: VoidFunction
  withTooltip?: boolean
  marginBottom?: number
}