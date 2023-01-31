import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function RestaurantCard({data}) {

    console.log(data);
  return (
    <Link to={`restaurant/${data.id}`}>
        <Card>
            <Card.Img src={data.photograph} className="p-3" variant='top'/>
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
            <Card.Text>
                <p>Cuisine:{data.cuisine_type}</p>
            </Card.Text>
            <Card.Text>
                <p>{data.neighborhood}</p>
            </Card.Text>
            </Card.Body>
        </Card>
    </Link>
  )
}

export default RestaurantCard