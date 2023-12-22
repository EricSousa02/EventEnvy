import * as z from "zod"

export const eventFormSchema = z.object({
  title: z.string().min(3, 'O título deve ter pelo menos 3 caracteres'),
  description: z.string().min(3, 'A descrição deve ter pelo menos 3 caracteres').max(400, 'A descrição deve ter menos de 400 caracteres'),
  location: z.string().min(3, 'A localização deve ter pelo menos 3 caracteres').max(400, 'A localização deve ter menos de 400 caracteres'),
  imageUrl: z.string().refine(value => value.trim() !== '', 'A URL da imagem não pode estar vazia'),
  startDateTime: z.date().refine(value => value instanceof Date && !isNaN(value.getTime()), 'Informe uma data e hora válidas de início'),
  endDateTime: z.date().refine(value => value instanceof Date && !isNaN(value.getTime()), 'Informe uma data e hora válidas de término'),
  categoryId: z.string().refine(value => value.trim() !== '', 'A categoria não pode estar vazia'),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url({ message: 'A URL deve ser válida' }).refine(value => value.trim() !== '', 'A URL não pode estar vazia')
})
