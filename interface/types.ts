/* eslint-disable no-unused-vars */

// locations
export interface LocationInfoProps {
  dimension: string
  name: string
}

// episodes
export interface EpisodeInfoProps {
  air_date: string
  name: string
}

// card
export interface CardProps {
  page: string
  results: {
    id: string
    image: string
    name: string
    status: string
  }[]
}

// card details
export type CardDetailsProps = {
  name: string
  location: {
    name: string
  }
  origin: {
    name: string
  }
  gender: string
  image: string
  status: string
  species: string
  episode: string[]
}

// seacrh
export interface SearchProps {
  setSearch: (value: string) => void
  updatePageNumber: (value: number) => void
}

// pagination
export interface PaginationProps {
  pageNumber: number
  info: {
    pages: number
  }
  updatePageNumber: (value: number) => void
}

// filter
export interface FilterProps {
  updatePageNumber: (value: number) => void
  updateStatus: (value: string) => void
  updateGender: (value: string) => void
  updateSpecies: (value: string) => void
}

// filterbtn
export interface FilterBtnProps {
  input: string
  task: (value: string) => void
  updatePageNumber: (value: number) => void
  index: number
  name: string
}

// option
export interface OptionProps {
  name: string
  changeID: (value: number) => void
  total: number
}

// status
export interface StatusProps {
  updateStatus: (value: string) => void
  updatePageNumber: (value: number) => void
}

// species
export interface SpeciesProps {
  updateSpecies: (value: string) => void
  updatePageNumber: (value: number) => void
}

// gender
export interface GenderProps {
  updateGender: (value: string) => void
  updatePageNumber: (value: number) => void
}
