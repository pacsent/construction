import clsx from "clsx"
import styles from "./NavBar.module.scss"

interface Props {
  className?: string
}

function NavBar({ className }: Props) {
  return <div className={clsx(className, styles.main)}>Construio</div>
}

export default NavBar
