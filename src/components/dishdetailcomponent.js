import React, { Component } from 'react'
import {
    Card, CardImg,
    CardTitle, CardBody, CardText
  } from 'reactstrap';

class Dishdetail extends Component {

    render() {
        const dish = this.props.dish
        console.log("DETAILS RERENDERED", dish)
        return (
            <div>
                {
                    dish ?                 
                    <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h3>Comments</h3>
                        <div>
                        {   
                        dish.comments.map((com) => 
                        <div>
                            {com.comment}<br /><br />--{com.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))} <br /><br />
                        </div>
                        )}
                        </div>
                    </div> 
                    </div>
                    : null
                }
            </div> 
        )
    }
}
export default Dishdetail

