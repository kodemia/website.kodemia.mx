
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import schema from 'schemas/applyMobileForm.schema'

type ApplyFormData = zod.infer<typeof schema>

export default function ApplyMobileForm () {
  const { register, handleSubmit, control, errors } = useForm<ApplyFormData>({
    resolver: zodResolver(schema)
  })
  return (
    <form>

    </form>
  )
}
