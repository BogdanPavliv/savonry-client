import { FieldErrors, FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

export interface IInputs {
  username: string
  surname: string
  email: string
  phone: string
  password: string
  repeatPassword: string
  address: string
  country: string
  city: string
  dateOfBirth: string
  localIndex: string
  comment: string
  newPassword: string
  repeatNewPassword: string
}

export interface IAuthInput {
  register: UseFormRegister<IInputs>
  errors: Partial<FieldErrorsImpl<IInputs>>
  username?: string
  setUsername?: (value: string) => void
  surname?: string
  setSurname?: (value: string) => void
  email?: string
  setEmail?: (value: string) => void
  phone?: string
  setPhone?: (value: string) => void
  password?: string
  setPassword?: (value: string) => void
  repeatPassword?: string
  setRepeatPassword?: (value: string) => void
  address?: string
  setAddress?: (value: string) => void
  country?: string
  setCountry?: (value: string) => void
  city?: string
  setCity?: (value: string) => void
  dateOfBirth?: string
  setDateOfBirth?: (value: string) => void
  localIndex?: string
  setLocalIndex?: (value: string) => void
  comment?: string
  setComment?: (value: string) => void
  newPassword?: string
  setNewPassword?: (value: string) => void
  repeatNewPassword?: string
  setRepeatNewPassword?: (value: string) => void
}