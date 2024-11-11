import { forwardRef } from 'react'

import { NumericFormatProps, NumericFormat } from 'react-number-format'
import { InputProps, Input } from '@/app/_components/ui/input'

export const MoneyInput = forwardRef(
  (
    props: NumericFormatProps<InputProps>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <NumericFormat
        {...props}
        thousandSeparator="."
        getInputRef={ref}
        decimalSeparator=","
        prefix="R$ "
        allowNegative={false}
        customInput={Input}
      />
    )
  },
)

MoneyInput.displayName = 'MoneyInput'
