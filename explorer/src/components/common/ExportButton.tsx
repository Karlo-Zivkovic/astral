import { exportToExcel } from '@/utils/exportToExcel'

type Props<T extends object> = {
  data: T[]
  filename: string
}

export const ExportButton = <T extends object>({ data, filename }: Props<T>) => {
  const handleClick = () => {
    exportToExcel(data, `${filename}.xlsx`)
  }

  return (
    <button
      className='flex w-full max-w-fit items-center gap-2 rounded-full bg-[#241235] p-2 text-sm font-medium text-white dark:bg-[#1E254E] sm:p-3 md:space-x-4 md:text-base'
      onClick={handleClick}
    >
      <span className='block'>Download page data</span>
    </button>
  )
}