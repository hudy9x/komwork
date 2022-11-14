
interface Props {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'
  primary?: boolean
  secondary?: boolean
  title?: string
  onClick?: () => void
}

export default function Button({
  size = 'base',
  primary = false,
  secondary = true,
  title = "Button",
}: Props) {
  return <button>
    <span>{title}</span>
  </button>
}
