import React from "react";

class displayTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    callAPI(){
        fetch("http://bevanderia.altervista.org/bevandeapi/API/utente/getArchiveUsers.php").then((response) => response.json()).then((data) => {
            console.log(data)
            this.setState({
                list:data.data
            })
        })
    }

    render(){
        let tb_data=this.state.list.map((item) => {
            return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.prirce}</td>
                    <td>{item.category}</td>
                    <td>{item.active}</td>
                </tr>
            )
        })
        return(
            <div className="container">
                <table className="table table-striped">
                    <div>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Prezzo</th>
                            <th>Categoria</th>
                            <th>Attivo</th>
                        </tr>
                    </div>
                    <tbody>
                            {tb_data}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default displayTable;
