import Input from '@/components/Input';
import { InputT } from '@/components/InputT';

export default function Page() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-6 bg-whitePrimary text-primaryDarkBlue">
      <h1>FORGET PASSWORD</h1>

      <Input
        error
        errorMessage="Error in this field"
        className="mt-4"
        placeholder="CPF TEST Error"
      />

      <Input
        pattern="outlined"
        error
        errorMessage="Error in this field"
        className="mt-4"
        placeholder="CPF outlined Error"
      />

      <Input className="mt-4" placeholder="CPF TEST" />

      <Input
        pattern="outlined"
        className="mt-4"
        placeholder="CPF TEST outlined"
      />

      <Input disabled className="mt-4" placeholder="CPF TEST disabled" />

      <InputT />
    </div>
  );
}
