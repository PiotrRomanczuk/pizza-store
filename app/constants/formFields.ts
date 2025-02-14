export const formFields = [
  { id: 'name', label: 'Full Name', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
  { id: 'address', label: 'Address', type: 'text' },
  { id: 'city', label: 'City', type: 'text', halfWidth: true },
  { id: 'zipCode', label: 'ZIP Code', type: 'text', halfWidth: true },
  { id: 'country', label: 'Country', type: 'text' },
] as const 