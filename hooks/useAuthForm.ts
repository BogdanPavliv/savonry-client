import { useForm } from 'react-hook-form'
import { IInputs } from '@/types/authPopup'

export const useAuthForm = (
) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IInputs>()

  return {
    register,
    errors,
    handleSubmit,
  }
}
