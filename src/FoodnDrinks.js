import React, {Component} from 'react';
import AppNavbar from './AppNavbar';
import {Table, Container } from 'reactstrap'
import {Link} from 'react-router-dom';



class Product extends Component {

    constructor(props){

        super(props);
        this.state = {products:[],title : props.match.params.type};
        
        
    };

    async componentDidMount(){
        
        
        const response = await fetch('/api/products');
        const body = await response.json();
        this.setState({products: body});
    };

    

    render() {




        const {products,title,isLoading} = this.state;
        
        if(isLoading) {
            return <p>Loading....</p>;
        }

        var cat = '' ;

        if(title === "foodndrinks"){
            cat = "Food & Drinks"
        }
        else if(title === "groomingprods"){
            cat = "Grooming Products"
        }
        else if(title === "cleaningprods"){
            cat = "Cleaning Materials"
        }


        
        const productList = products.filter(product =>{
            return product.category.categoryName === String(cat)
            
            })
            .map( product=>{
            return <tr key ={product.prodId} >
                        <td><Link to={"/items/"+ product.prodId}>{product.productName}</Link></td>
                   </tr>

        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    
                 
                 <Table className="mt-4">
                    <thead>
                        <tr>
                            <th width="20%">{cat}</th>

                        </tr>
                    </thead>
                    <tbody>
                        {productList} 
                    </tbody>
                </Table>
                </Container>
            </div>       
        )

    }

}

export default Product;