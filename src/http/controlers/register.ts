import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { registerUseCase } from '@/use-cases/register'

export const register = async (req: FastifyRequest, res: FastifyReply) => {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, name, password } = registerBodySchema.parse(req.body)

  try {
    await registerUseCase({
      email,
      name,
      password,
    })
  } catch (err) {
    return res.status(409).send()
  }

  return res.status(201).send()
}
