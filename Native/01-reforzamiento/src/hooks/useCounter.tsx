import { useState } from "react";

export const useCounter = (valorInicial: number = 10) => {
    const [valor, setValor] = useState(valorInicial);

    const acumular = (numero: number) => {
        setValor(valor + numero);
    }

    return {
        // Se puede declarar un objeto de retorno que contiene lo siguiente
        // valor: valor,
        // acumular: acumular
        // O se puede declarar directamente asi:
        valor,
        acumular
    }
}
