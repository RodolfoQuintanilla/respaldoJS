export const operaciones = (numeros, setNumeros) => {
    const handleChange = (e) => {
        setNumeros({
            ...numeros,
            [e.target.name]: parseFloat(e.target.value)
        });

        //  const suma = () => numero1 + numero2

    };

    const { numero1, numero2 } = numeros
    const suma = () =>
        numero1 + numero2;
    ;
    const resta = () => {
        return numero1 - numero2;
    }
    const multi = () =>
        numero1 * numero2;
    ;
    const divi = () =>
        numero1 / numero2;
    ;
    return { handleChange, suma, resta, multi, divi, numero1, numero2 };
}