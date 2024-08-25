interface ButtonFilterProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  nameButtonFilter: string
  selected: boolean
  onButtonClick?: (tag: string) => void
}

export function ButtonFilter({
  nameButtonFilter,
  selected,
  onButtonClick,
  ...props
}: ButtonFilterProps) {
  return (
    <button
      className={`flex items-center px-4 py-1 border border-purple-100 rounded-full text-base ${selected ? 'bg-purple-200 text-gray-100 border-transparent' : 'bg-transparent text-purple-100'} transition-colors duration-200 hover:bg-purple-200 hover:text-gray-100`}
      type="button"
      onClick={() => onButtonClick?.(nameButtonFilter)}
      {...props}
    >
      {nameButtonFilter}
    </button>
  )
}
