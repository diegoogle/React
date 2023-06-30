
export const TiposBasicos = () => {

    let nombre: string | number = 'Diego'; //EL caracter '|' se utiliza para identificar mas de un tipo a una variable.
    const edad: number = 123;// al ser const no necesita especificar el tipo de dato.
    const poderes = ['Velocidad','Volar', 'Respiracion Acuatica'];
    nombre = 12;
  return (
    <>
      <h3>Tipos básicos</h3>  
      <p>{poderes.join(', ')}</p>
    </>
  )
}
