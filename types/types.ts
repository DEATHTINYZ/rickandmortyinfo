/* eslint-disable no-unused-vars */
// locations
export type LocationInfoProps = {
  dimension: string
  name: string
}

// episodes
export type EpisodeInfoProps = {
  air_date: string
  name: string
}

// card
export type CardProps = {
  results: {
    id: string
    name: string
    status: string
    species: string
    gender: string
    origin: {
      name: string
    }
    location: {
      name: string
    }
    image: string
  }[]
}

// seacrh
export type SearchProps = {
  setSearch: (value: string) => void
  updatePageNumber: (value: number) => void
}

// pagination
export type PaginationProps = {
  pageNumber: number
  info: {
    pages: number
  }
  updatePageNumber: (value: number) => void
}

// filter
export type FilterProps = {
  updatePageNumber: (value: number) => void
  updateStatus: (value: string) => void
  updateGender: (value: string) => void
  updateSpecies: (value: string) => void
}

// filterbtn
export type FilterBtnProps = {
  input: string
  task: (value: string) => void
  updatePageNumber: (value: number) => void
  index: number
  name: string
}

// option
export type OptionProps = {
  name: string
  changeID: (value: number) => void
  total: number
}

// status
export type StatusProps = {
  updateStatus: (value: string) => void
  updatePageNumber: (value: number) => void
}

// species
export type SpeciesProps = {
  updateSpecies: (value: string) => void
  updatePageNumber: (value: number) => void
}

// gender
export type GenderProps = {
  updateGender: (value: string) => void
  updatePageNumber: (value: number) => void
}
