import express, {Request, Response} from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req: Request,res: Response) => {
    req.
    console.log('hello')
})

app.listen(3000, () => {
    console.log("hurraaaayy❤️")
})