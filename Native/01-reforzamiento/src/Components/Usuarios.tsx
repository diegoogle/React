import { useEffect, useState } from "react"
import { reqResApi } from "../api/reqRex"
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    useEffect(() => {
        reqResApi.get<ReqResListado>('/users')
        .then( resp => {
            console.log(resp.data.data);
            setUsuarios(resp.data.data)
        })
        .catch(console.log);
    }, [])
    
    const renderItem = ({id, avatar, first_name, last_name, email}: Usuario) => {
        return (
            <tr key={id}>
                <td>
                    <img src={avatar} alt={first_name} style={{ width: 50, borderRadius: 100}}/>
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

  return (
    <>
    <h3>Usuarios:</h3>
    <table className="table">
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                //usuarios.map(usuario => renderItem(usuario))
                usuarios.map(renderItem)
            }
        </tbody>
    </table>
    <button className="btn btn-primary"> Siguientes</button>
    </>    
  )
}
