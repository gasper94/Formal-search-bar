export interface BlurProps {
  open: boolean
}

export interface Product {
  id: string
  title: string
  keywordType1?: string[]
  keywordType2?: string[]
  description: string
  description2?: string
  cmd: string
}

export interface Props {
  subItem: Product
  sectionColor: string
  selectedSubItem: string
  typing: any
}

export interface SubItemListProps {
  subItems: Product[]
  sectionColor: string
  selectedSubItem: string
  typing: any
}

export interface ItemListProps {
  optionFilter: string
  items: {
    id: string
    title: string
    subItems?: Product[]
    sectionColor?: string
  }[]
  selectedSubItem: string
  typing: any
}

export interface MainSectionProps {
  typing: any
  optionFilter: any
  itemsW: any
  items: any
  selectedItemIndex: any
}

export type OptionsProps = {
  typing: boolean
  optionFilter: string
  setOptionFilter: React.Dispatch<React.SetStateAction<string>>
}

export type OptionsPropsx = {
  optionFilter: string
  setOptionFilter: React.Dispatch<React.SetStateAction<string>>
}

export type CustomButtonProps = {
  children: React.ReactNode
  label: string
  selected: boolean
  handleButtonClick: () => void
}

export interface Group {
  group: string
  id: number
}

export type GroupMap = Map<string, Group>
