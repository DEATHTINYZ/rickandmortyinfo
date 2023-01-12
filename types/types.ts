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
  setPageNumber: (value: number) => void
}

// pagination
export type PaginationProps = {
  pageNumber: number
  info: {
    pages: number
  }
  setPageNumber: (value: number) => void
}

// filter
export type FilterProps = {
  setPageNumber: (value: number) => void
  setStatus: (value: string) => void
  setGender: (value: string) => void
  setSpecies: (value: string) => void
}

// filterbtn
export type FilterBtnProps = {
  input: string
  task: (value: string) => void
  setPageNumber: (value: number) => void
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
  setStatus: (value: string) => void
  setPageNumber: (value: number) => void
}

// species
export type SpeciesProps = {
  setSpecies: (value: string) => void
  setPageNumber: (value: number) => void
}

// gender
export type GenderProps = {
  setGender: (value: string) => void
  setPageNumber: (value: number) => void
}
