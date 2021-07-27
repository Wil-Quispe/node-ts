import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.get('/', (req: Request, res: Response): void => {
  res.send('hola')
})

app.listen(3000, () => console.log('ola'))
