import Input from '@/components/Input';
import { InputWithLabel } from '@/components/InputWithLabel';

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

      <Input disabled className="mt-15" placeholder="CPF TEST disabled" />

      <InputWithLabel label="Saudades Cláudio Default" />
      <InputWithLabel
        label="Saudades Cláudio ERROR"
        error
        errorMessage="Muita SAUDADE"
        className="mt-15"
      />

      <InputWithLabel
        label="Saudades Cláudio outlined"
        pattern="outlined"
        error
        errorMessage="Error in this field"
        className="mt-15"
      />

      <InputWithLabel
        label="Saudades Cláudio outlined"
        pattern="outlined"
        placeholder="CPF TEST outlined"
      />

      <InputWithLabel label="Saudades Cláudio disabled" disabled />
    </div>
  );
}
