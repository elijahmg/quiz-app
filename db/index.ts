import data from './data.json'
import { createQuiz } from '@/baas/quiz/create-quiz.ts'

await createQuiz(data)
