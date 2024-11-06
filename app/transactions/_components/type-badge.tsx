import { Badge } from "@/app/_components/ui/badge";
import { TransactionType, type Transaction } from "@prisma/client";
import { Circle } from "lucide-react";
import React from "react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <Circle className="mr-2 fill-primary" size={10} />
        Depósito
      </Badge>
    );
  }

  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger bg-opacity-10 font-bold text-primary hover:bg-muted">
        <Circle className="mr-2 fill-danger" size={10} />
        Depósito
      </Badge>
    );
  }

  return (
    <Badge className="bg-white bg-opacity-10 font-bold text-primary hover:bg-muted">
      <Circle className="mr-2 fill-white" size={10} />
      Depósito
    </Badge>
  );
};

export default TransactionTypeBadge;