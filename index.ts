import express from 'express';
import Routes from './src/routes'

let app = express();

app.use(Routes)
app.use(express.static('public'))

const PORT  = process.env.PORT || 5000
app.listen(PORT,()=> console.info(`Server has started on ${PORT}`))