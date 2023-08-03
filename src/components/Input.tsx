import { ComponentPropsWithoutRef, LegacyRef, forwardRef } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const inputStyles = tv({
  base: 'peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50',
  // focus:border-2
  variants: {
    pattern: {
      primary:
        'rounded-lg border border-primaryGray bg-white text-primaryDarker',
      outlined: 'border-b-2 border-primaryGray bg-white text-primaryDarker ',
    },
    error: {
      true: 'border-red-500 focus:border-red-500 focus:ring-1 focus:border-red-500 transition-all',
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
