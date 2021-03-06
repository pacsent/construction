import { useEffect, useState } from "react"
import clsx from "clsx"
import Head from "next/head"
import CompanyList from "molecules/CompanyList/CompanyList"
import NavBar from "molecules/NavBar/NavBar"
import styles from "./Home.module.scss"
import { CompaniesData, CompanyData } from "types/types"

interface Props {
  className?: string
}

function Home({ className }: Props) {
  const [data, setData] = useState<CompanyData[]>()

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const res = await fetch("api/companies")
      const companiesData: CompaniesData = await res.json()

      setData(companiesData?.companies)
    } catch (error) {
      alert("Failed to fetch data")
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Construio - Find a Subcontractor Today</title>
        <meta
          name="description"
          content="Find subcontractors in the construction industry all around Europe"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <NavBar />
      </nav>

      <main className={styles.main}>
        <CompanyList data={data} />
      </main>

      <footer className={styles.footer}>Copyright 2021 NG</footer>
    </div>
  )
}

export default Home
