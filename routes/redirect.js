const express = require('express')
const router = express.Router()
const Url = require('../models/Url')

router.get('/:urlCode', async (req, res) => {
  const { urlCode } = req.params

  try {
    const url = await Url.findOne({ urlCode })

    if (url) {
      return res.redirect(url.longUrl)

    } else {
      return res.status(404).json({
        message: 'No URL Found'
      })
    }

  } catch (e) {
    console.log(e)

    return res.status(500).json({
      message: `Server Error: ${e.message}`
    })
  }
})

module.exports = router

