import express from 'express'
const router = express.Router()

router.get("/", (req, res) => {
    res.send("from API/USERS")
})

router.post("/", (req, res) => {
    res.send("from POST API/USERS")
})

export default router