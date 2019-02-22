import React, {Component} from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Table,  Container } from 'reactstrap';


class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {items: []};
        this.remove = this.remove.bind(this);
    }   
    
    componentDidMount() {
        
        
        fetch('api/product/items')
        .then(response => response.json())
        .then(data => this.setState({items: data}));
    }

    


    async remove(id) {
        await fetch(`/api/product/item/${id}`,{
            method: 'DELETE',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then(() => {
            let updatedItems = [...this.state.items].filter(i => i.id !==id);
            this.setState({items: updatedItems});
        });


    }

    render() {
        const {items} = this.state;
      

        const itemList = items.map(item =>{
            return <tr key={item.itemId}>
                        <td >{item.name}</td>
                        <td>₱{item.sellingPrice.toFixed(2)}</td>
                        <td>{item.description}</td>
                        <td>
                            <ButtonGroup>
                                <Button size="sm" color="primary" tag={Link} to={"/product/" + item.id}>Edit</Button>
                                <Button size="sm" color="danger" onClick={()=>this.remove(item.id)}>Delete</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
        });

       

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    
                 <h3 style={{marginTop:'10px'}}>My Products</h3>
                 <Table className="mt-4">
                    <thead>
                        <tr>
                            <th width="20%">Name</th>
                            <th width="20%">Price</th>
                            <th width="20%">Desc</th>
                            <th width="10%">Actions</th>
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


export default ProductList;