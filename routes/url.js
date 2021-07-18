const express = require('express')
const shortid = require('shortid')
const Url = require('../models/Url')
const router = express.Router()

const BASE_URL = 'https://bru.ni'

router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body

  try {
    const existingUrl = await Url.findOne({ longUrl })

    if (existingUrl) {
      res.json(existingUrl)

    } else {
      const urlCode = shortid.generate()
      const shortUrl = `${BASE_URL}/${urlCode}`

      const url = new Url({
        longUrl,
        shortUrl,
        urlCode
      })
      await url.save()

      res.json(url)
    }

  } catch (e) {
    console.log(e)

    res.status(500).json({
      message: `Server Error: ${e.message}`
    })
  }
})

module.exports = router
