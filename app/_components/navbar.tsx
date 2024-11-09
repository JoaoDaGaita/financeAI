"use client";

import Image from "next/image";
import Link from "next/link";
import logoFinanceAI from "@/public/logoFinanceAI.svg";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <Image
          src={logoFinanceAI}
          alt="Finance AI logo"
          width={173}
          height={39}
        />
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Transactions
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Assinatura
        </Link>
      </div>

      <UserButton
        showName
        appearance={{
          baseTheme: dark,
        }}
      />
    </nav>
  );
};

export default Navbar;
