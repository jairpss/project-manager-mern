import express from 'express'
const router = express.Router()

router.get("/", (req, res) => {
    res.send("from API/USERS")
})

export default router