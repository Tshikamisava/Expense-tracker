import AddTransaction from "./add"
import DisplayTransaction from "./displayTransaction"

function Home (props) {
    return(

    <div className="container">
        <DisplayTransaction transactions={props.transactions}/>
        <AddTransaction add={props.add}/>
    </div>

    )
}

export default Home