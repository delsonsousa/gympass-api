import { FastifyInstance } from 'fastify'
import { register } from './controlers/register'

export const appRoutes = async (app: FastifyInstance) => {
  app.post('/users', register)
}
