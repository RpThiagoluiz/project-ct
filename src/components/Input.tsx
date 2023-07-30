import { ComponentPropsWithoutRef, LegacyRef, forwardRef } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const inputStyles = tv({
  base: 'p-2 text-sm font-normal placeholder-black placeholder-opacity-20 focus:outline-none  focus:border-sky-500 focus:ring-1 focus:ring-primary transition-all',

  variants: {
    pattern: {
      primary:
        'rounded-lg border border-primaryDarkBlue bg-white text-primaryDarker',
      outlined: 'border-b-2 border-primaryDarkBlue bg-white text-primaryDarker',
    },
    error: {
      true: 'border-red-500',
    },
    disabled: {
      true: 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none cursor-not-allowed block pointer-event:none',
    },
  },
  defaultVariants: {
    pattern: 'primary',
    error: false,
    disabled: false,
  },
});

type Props = ComponentPropsWithoutRef<'input'> &
  VariantProps<typeof inputStyles> & {
    errorMessage?: string;
  };

function Input(
  { pattern, disabled, error, errorMessage, className, ...props }: Props,
  ref: LegacyRef<HTMLInputElement> | undefined
) {
  return (
    <div className="flex w-full flex-col">
      <input
        ref={ref}
        className={inputStyles({
          pattern,
          error,
          disabled,
          className,
        })}
        disabled={disabled}
        {...props}
      />
      {error && errorMessage && (
        <span className="mt-1 text-xs text-red-400">{errorMessage}</span>
      )}
    </div>
  );
}

export default forwardRef(Input);
