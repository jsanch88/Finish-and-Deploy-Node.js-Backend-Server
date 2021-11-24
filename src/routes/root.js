import { Router } from 'express'

import logger from '../utils/logger'

const router = Router()

router.get('/', (req, res) => {
  logger.log.success('Calling Root')
  res.send({ msg: 'Hello there World! My name is Jonathan Sanchez!' })
})

export default router
