interface ButtonFilterProps {
  nameButtonFilter: string
  selected: boolean
}

export function ButtonFilter({
  nameButtonFilter,
  selected,
}: ButtonFilterProps) {
  return (
    <button
      className={`flex items-center px-4 py-1 border border-purple-100 rounded-full text-base ${selected ? 'bg-purple-200 text-gray-100 border-transparent' : 'bg-transparent text-purple-100'} transition-colors duration-200 hover:bg-purple-200 hover:text-gray-100`}
      type="button"
    >
      {nameButtonFilter}
    </button>
  )
}
