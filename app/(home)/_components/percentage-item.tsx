import type { ReactNode } from 'react'

interface PercentageItemProps {
  icon: ReactNode
  title: string
  value: number
}

const PercentageItem = ({ icon, title, value }: PercentageItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-white bg-opacity-[3%]">{icon}</div>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      {value}
    </div>
  )
}

export default PercentageItem
