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

export default function Popover({ children }: IPopover) {
  const [visible, setVisible] = useState(false)
  const id = useRef(Date.now());

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
  return <div className="popover-btn" onClick={() => setVisible(true)}>
    {children}
  </div>
}

const PopoverPanel = ({ children }: IPopoverPanel) => {
  const { visible } = usePopover();
  if (!visible) return null;

  return <div className={`popover-panel ${visible ? 'active' : ''}`}>
    {children}
  </div>
}

Popover.Panel = PopoverPanel;
Popover.Button = PopoverButton
