import { promises as fs } from 'fs'
import path from 'path'

const pathDirectory = '/public/realisations'

const handler = async (req, res) => {
  const directory = path.join(process.cwd(), pathDirectory)
  const arrDirectoryNames = await fs.readdir(directory)

  return res
    .status(200)
    .json({
      message: 'pictures founds',
      status: 'ok',
      data: arrDirectoryNames.sort((a, b) => a - b),
    })
}

export default handler
