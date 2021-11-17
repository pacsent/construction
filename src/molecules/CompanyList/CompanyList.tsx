import clsx from "clsx"
import CompanyCard from "molecules/CompanyCard/CompanyCard"
import { CompanyData } from "types/types"
import styles from "./CompanyList.module.scss"

interface Props {
  className?: string
  data?: CompanyData[]
}

function CompanyList({ className, data }: Props) {
  return (
    <div className={clsx(className, styles.main)}>
      {data?.map((company) => (
        <CompanyCard key={company.id} data={company} />
      ))}
    </div>
  )
}

export default CompanyList
