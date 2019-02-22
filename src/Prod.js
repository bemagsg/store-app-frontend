import React, {Component} from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Table,  Container } from 'reactstrap'; 

class Prod extends Component {


    constructor(props) {
        super(props);
        this.state = {lists: []}
        
    }   
    
    async componentDidMount() {
        
        const response = await fetch(`/api/product/${this.props.match.params.prodId}`);
        const body = await response.json();
        this.setState({lists: body});
    }

    


    render() {
        const {lists} = this.state;
        
        


      
        

        const itemList = lists.map(list =>{
            return <tr key={list.id}>
                        <td >{list.name}</td>
                        <td>₱{list.sellingPrice.toFixed(2)}</td>
                        <td>{list.description}</td>
                        
                    </tr>
        });

        var name = lists.map(function(i) {
            return i.product.productName;
          });
        

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    
                 <h3 style={{marginTop:'10px'}}>{name[0]}</h3>
                 <Table className="mt-4">
                    <thead>
                        <tr>
                            <th width="20%">Name</th>
                            <th width="20%">Price</th>
                            <th width="20%">Desc</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {itemList}
                    </tbody>
                </Table>
                </Container>
            </div>       
        )
            
            
    }

}

export default Prod;