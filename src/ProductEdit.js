import React, {Component} from 'react';
import { Link, withRouter} from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';


class ProductEdit extends Component {

    
    
    category = {
        categoryName : '',
    };

    product = {
        productName : '',
        category : this.category
    }
    
    emptyItem = {
        name : '',
        description: '',
        brand : '',
        sellingPrice : 0.0,
        originalPrice : 0.0,
        product : this.product
                         
    };


    constructor(props){
        super(props);
        this.state = {
            item : this.emptyItem,
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    async componentDidMount(){
        if(this.props.match.params.id !=='new') {
            const product = await (await fetch(`/api/product/item/${this.props.match.params.id}`)).json();
            this.setState({item: product})
            

        }
    }

    handleChange(event){

        const target = event.target;
        const value = target.value;
        const name = target.name;

        let item = {...this.state.item};
        item[name] = value;
        item.product[name]=value;
        item.product.category[name]=value;
        this.setState({item});

        

    }

    


    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/api/product/item', {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/products');

    }

    render() {

        const {item} = this.state;  
     
        const title = <h2 style={{marginTop: "10px"}}>{item.id ? 'Edit Product' : 'Add Product' }</h2>


        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Product Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                            onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="brand">Brand</Label>
                        <Input type="text" name="brand" id="brand" value={item.brand || ''}
                            onChange={this.handleChange} autoComplete="brand"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="text" name="description" id="description" value={item.description || ''}
                            onChange={this.handleChange} autoComplete="description"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="sellingPrice">Selling Price</Label>
                        <Input type="number" name="sellingPrice" id="sellingPrice" value={item.sellingPrice || ''}
                            onChange={this.handleChange} autoComplete="Price"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="originalPrice">Original Price</Label>
                        <Input type="number" name="originalPrice" id="originalPrice" value={item.originalPrice || ''}
                            onChange={this.handleChange} autoComplete="Price"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="productName">Type</Label>
                        <Input type="text" name="productName" id="productName" value={item.product.productName || ''}
                            onChange={this.handleChange} autoComplete="productName"/>                        
                    </FormGroup>
                    <FormGroup>
                        <Label for="categoryName">Category</Label>
                        <Input type="text" name="categoryName" id="categoryName" value={item.product.category.categoryName || ''}
                            onChange={this.handleChange} autoComplete="categoryName"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit"> Save </Button>{''}
                        <Button style={{marginLeft:"5px"}}color="secondary" tag={Link} to="/">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>

    }
    
}

export default withRouter(ProductEdit);