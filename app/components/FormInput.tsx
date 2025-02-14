type FormData = {
  name: string
  email: string
  address: string
  city: string
  zipCode: string
  country: string
}

type FormInputProps = {
  id: keyof FormData
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormInput = ({ id, label, type, value, onChange }: FormInputProps) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      required
      value={value}
      onChange={onChange}
      className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
    />
  </div>
)