import type { NextApiRequest, NextApiResponse } from "next"
import { companiesData } from "data/data"
import { CompaniesData } from "types/types"

const companies = (
  req: NextApiRequest,
  res: NextApiResponse<CompaniesData>
) => {
  res.status(200).json({ companies: companiesData })
}

export default companies
