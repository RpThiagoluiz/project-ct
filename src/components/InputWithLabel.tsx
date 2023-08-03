import error from 'next/error';
import { ComponentPropsWithoutRef, LegacyRef, forwardRef } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const inputStyles = tv({
  base: 'peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50',

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

const labelStyles = tv({
  base: "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500",

  // text-red-400

  variants: {
    error: {
      true: 'peer-placeholder-shown:text-red-400 peer-disabled:peer-placeholder-shown:text-red-400',
    },
    disabled: {
      true: 'peer-placeholder-shown:text-slate-500  peer-disabled:peer-placeholder-shown:text-slate-500',
    },
  },
  defaultVariants: {
    error: false,
    disabled: false,
  },
});

type Props = ComponentPropsWithoutRef<'input'> &
  VariantProps<typeof inputStyles> & {
    label: string;
    errorMessage?: string;
  };

export const InputWithLabel = (
  { label, pattern, disabled, error, errorMessage, className, ...props }: Props,
  ref: LegacyRef<HTMLInputElement> | undefined
) => (
  <div className="relative h-10 w-full min-w-[200px]">
    <input
      ref={ref}
      className={inputStyles({
        pattern,
        error,
        disabled,
        className,
      })}
      placeholder=" "
      disabled={disabled}
      {...props}
    />
    <label
      className={labelStyles({
        error,
        disabled,
        className,
      })}
    >
      {label}
    </label>

    {error && errorMessage && (
      <span className="mt-1 text-xs text-red-400">{errorMessage}</span>
    )}
  </div>
);
