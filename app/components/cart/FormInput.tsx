import { FormData } from '@/app/types/cart'

interface FormInputProps {
  id: keyof FormData
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormInput = ({ id, label, type, value, onChange }: FormInputProps) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      required
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-500 transition-colors duration-200"
    />
  </div>
) 