import React,{Component} from 'react';
import {
    Card, CardImg,
    CardTitle, CardImgOverlay
  } from 'reactstrap';
import Dishdetail from './dishdetailcomponent';

class Menu extends Component
{
    
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }


    render()
    {
        console.log("Render Invoked");
        return(
            <div className="conatainer">
                <div className="row">
    
                {this.props.dishes.map((dish)=>
                <div key={dish.id} className="col-12 col-md-5 m-1">
                     <Card key={dish.id}
                        onClick={() => this.props.onClick(dish.id)}>
                     
                        <CardImg width="100%" object src={dish.image} alt={dish.name}/>

                        <CardImgOverlay>
                            <CardTitle style={{fontWeight:'bolder',fontSize:30}}>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>)}             
                </div>
                <Dishdetail dish={this.state.selectedDish} />
                  
            </div>

        );
    }


}
export default Menu;