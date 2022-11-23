import { createContext, useState, useContext, useEffect, useRef } from "react"

interface IPopoverContext {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

interface IPopoverPanel {
  className?: string
  children: JSX.Element | JSX.Element[]
}

interface IPopover {
  className?: string
  children: JSX.Element | JSX.Element[]
}

interface Props {
  children: JSX.Element
}

// context

const PopoverContext = createContext<IPopoverContext>({
  visible: false,
  setVisible: (stt) => { console.log(stt) }
})
const PopoverProvider = PopoverContext.Provider;

export const usePopover = () => {
  const { visible, setVisible } = useContext(PopoverContext)
  return { visible, setVisible }
}

// components -------------------
function genUUID() {
  const uuid = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  return `${uuid()}-${uuid()}`
}

export default function Popover({ children }: IPopover) {
  const [visible, setVisible] = useState(false)
  const id = useRef(genUUID());

  useEffect(() => {
    const handler = (ev: MouseEvent) => {
      const target = ev.target
      const element = document.querySelector(`#popover-${id.current}`)

      if (!element || !target) return;

      if (!element.contains(target as Node)) {
        setVisible(false)
      }
    }
    document.addEventListener("click", handler)
    return () => {
      document.removeEventListener("click", handler)
    }
  }, [])

  return <PopoverProvider value={{ visible, setVisible }}>
    <div id={`popover-${id.current}`} className="popover">{children}</div>
  </PopoverProvider>
}

const PopoverButton = ({ children }: Props) => {
  const { setVisible } = usePopover()
  return <div className="popover-btn cursor-pointer" onClick={() => setVisible(true)}>
    {children}
  </div>
}

const PopoverPanel = ({ children, className = "" }: IPopoverPanel) => {
  const { visible } = usePopover();
  if (!visible) return null;

  return <div className={`popover-panel ${visible ? 'active' : ''} ${className}`}>
    {children}
  </div>
}

Popover.Panel = PopoverPanel;
Popover.Button = PopoverButton
