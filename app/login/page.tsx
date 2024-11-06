import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex max-w-[500px] flex-col justify-center p-8">
        <Image
          src="/loginFinanceAi.svg"
          alt=""
          width={173}
          height={173}
          className="mb-8"
        />

        <h1 className="mb-3 text-4xl font-bold">Bem Vindo</h1>
        <p className="mb-8 text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <Button variant={"outline"}>
          <LogInIcon className="mr-2" />
          Fazer login ou criar conta
        </Button>
      </div>

      <div className="relative h-full w-full">
        <Image
          src="/LoginPage.png"
          alt="Faça login!"
          fill
          className="object-cover"
        />
        aodijasoiudjasiodk
      </div>
    </div>
  );
};

export default LoginPage;
