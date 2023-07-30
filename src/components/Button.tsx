import { ComponentProps } from 'react';
import { tv as tailwindVariants, VariantProps } from 'tailwind-variants';

const buttonStyle = tailwindVariants({
  base: 'flex items-center justify-center rounded text-sm font-medium text-grayLighter transition ease-in-out delay-15 duration-300 ',
  variants: {
    pattern: {
      primary: 'bg-primaryDarkBlue text-white  hover:opacity-80',
      outlined:
        'bg-transparent border-2 border-primaryDarkBlue text-primaryDarkBlue hover:opacity-80',
    },
    size: {
      default: 'h-10 px-4',
      fullWidth: 'h-10 w-full px-4',
      sm: 'h-8 px-3',
      xs: 'h-6 px-2 text-xs',
    },
    success: {
      true: 'bg-primaryGreen hover:opacity-80',
    },
    disabled: {
      true: 'opacity-65 border-2 bg-transparent border-grayLighter text-grayLighter pointer-events-none',
    },
  },
  defaultVariants: {
    pattern: 'primary',
    size: 'default',
    success: false,
  },
});

type Props = ComponentProps<'button'> & VariantProps<typeof buttonStyle>;

export function Button({
  size,
  success,
  pattern,
  disabled,
  className,
  ...props
}: Props) {
  return (
    <button
      className={buttonStyle({
        size,
        success,
        pattern,
        disabled,
        className,
      })}
      {...props}
    >
      {props.children}
    </button>
  );
}
