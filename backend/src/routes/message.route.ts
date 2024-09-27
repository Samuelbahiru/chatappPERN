import express from 'express'

const router = express.Router()

router.get("/conservation", (req, res)=>{
    res.send("convsersation route")
})


export default router;