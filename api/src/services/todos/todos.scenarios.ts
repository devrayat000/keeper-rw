import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TodoCreateArgs>({
  todo: {
    one: { data: { title: 'String', updatedAt: '2022-09-05T11:09:53Z' } },
    two: { data: { title: 'String', updatedAt: '2022-09-05T11:09:53Z' } },
  },
})

export type StandardScenario = typeof standard
