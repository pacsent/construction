import clsx from "clsx"
import Image from "next/image"
import SpecialtyList from "molecules/SpecialtyList/SpecialtyList"
import { CompanyData } from "types/types"
import styles from "./CompanyCard.module.scss"

interface Props {
  className?: string
  data?: CompanyData
}

function CompanyCard({ className, data }: Props) {
  return (
    <div className={clsx(className, styles.main)}>
      <div className={styles.image}>
        {data?.logoUrl && (
          <Image
            src={data?.logoUrl}
            alt={data?.name}
            layout="fill"
            objectFit="contain"
          />
        )}
      </div>
      <div className={styles.titleRow}>
        <div className={styles.title}>
          <span>{data?.name}</span>
        </div>
      </div>

      <div className={styles.details}>
        <div>{data?.location}</div>
        <div>
          <a href={data?.website} target="_blank" rel="noopener noreferrer">
            Website
          </a>
        </div>
      </div>
      <SpecialtyList data={data?.specialties} />
    </div>
  )
}

export default CompanyCard
