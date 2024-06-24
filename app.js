import express from 'express'
import { router as usersRoutes } from './routes/users.Routes.js'
import { router as appointmentRoutes } from './routes/appointment.Routes.js'

const app = express()
const PORT = 8080


app.use(express.static('public'))

app.use('/',usersRoutes)

app.use('/appointment',appointmentRoutes)


app.listen(PORT, ()=>{
    console.log(`Estoy escuchando por http://127.0.0.1:${PORT}`)
})