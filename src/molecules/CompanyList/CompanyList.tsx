import React, { useEffect, useState } from "react"
import clsx from "clsx"
import CompanyCard from "molecules/CompanyCard/CompanyCard"
import { CompanyData, specialties, Specialty } from "types/types"
import styles from "./CompanyList.module.scss"

interface Props {
  className?: string
  data?: CompanyData[]
}

function CompanyList({ className, data }: Props) {
  const [companies, setCompanies] = useState(data)
  const [filters, setFilters] = useState({})
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilters, setActiveFilters] = useState<Specialty[]>([])

  useEffect(() => {
    setCompanies(data)
  }, [data])

  useEffect(() => {
    console.log({ filters })
    const active: Specialty[] = []
    for (const [key, value] of Object.entries(filters)) {
      console.log(`${key}: ${value}`)
      if (value) active.push(key)
    }
    setActiveFilters(active)
  }, [filters])

  useEffect(() => {
    console.log(activeFilters)
    const filtering =
      activeFilters.length > 0 && activeFilters.length < specialties.length
    if (!searchTerm && !filtering) {
      setCompanies(data)
      return
    }

    let results = data?.filter((company) =>
      company.name.toLowerCase().includes(searchTerm)
    )

    if (filtering) {
      results = results?.filter((company) =>
        company.specialties?.some((s) => activeFilters.includes(s))
      )
    }

    setCompanies(results)
  }, [activeFilters, searchTerm])

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value.toLowerCase())
  }

  function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
    const filter = e.target.id
    const checked = e.target.checked
    setFilters({ ...filters, [filter]: checked })
  }

  return (
    <div className={clsx(className, styles.main)}>
      <input
        type="search"
        className={styles.searchBox}
        placeholder="Search by company name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className={styles.filters}>
        {specialties.map((specialty, index) => (
          <div className={styles.filter} key={`specialtyCheckbox-${index}`}>
            <input
              type="checkbox"
              id={specialty}
              onChange={handleFilter}
              checked={filters[specialty] || false}
            />{" "}
            <label htmlFor={specialty}>{specialty}</label>
          </div>
        ))}
      </div>
      <div className={styles.list}>
        {companies?.map((company) => (
          <CompanyCard key={company.id} data={company} />
        ))}
      </div>
    </div>
  )
}

export default CompanyList
