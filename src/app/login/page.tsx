import { Button } from '@/components/Button';

export default function Page() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-6 bg-whitePrimary text-primaryDarkBlue">
      <h1>LOGIN</h1>

      <Button>default</Button>
      <Button size="fullWidth">fullWidth</Button>
      <Button size="sm">small</Button>
      <Button size="xs">extra small</Button>
      <Button success>success</Button>
      <Button success className="w-50">
        success + class
      </Button>
      <Button pattern="outlined">outlined</Button>
      <Button disabled>disabled</Button>
    </div>
  );
}
