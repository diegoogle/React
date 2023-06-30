export const Funciones = () => {

    const sumar = (a: number, b: number) => {
        return a + b;
    }

  return (
//   <>...</> esto es un fragment
    <>
    <h3>Funciones</h3>
    <span>El resultado es: {sumar(5,10)}</span>
    </>
  )
}
