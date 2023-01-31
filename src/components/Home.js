import React, {useEffect, useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'
import {listRestaurants} from '../actions/restaurantAction'
import{useDispatch,useSelector} from 'react-redux'

function Home() {

    //const [items,setItems] = useState([])

    //const fetchData = async () => {
        //await fetch('/restaurants.json')
        //.then((res) => res.json())
        //.then((data) => setItems(data.restaurants))
   // }

    const dispatch = useDispatch()

    const result = useSelector(state => state.restaurantReducer)


    const {restaurant} = result

    useEffect(() => {
      //fetchData()
      dispatch(listRestaurants())
    }, [])

  return (
    <Row>
      {restaurant.map((item) => (
        <Col sm={12} md={8} lg={6} xl={3}>
        <RestaurantCard data = {item}/>

        </Col>
      ))}

    </Row>
  )
}

export default Home



// asynchronous functions .
// async await .
// fetch() .
// axios.
// asynchronous functions return a promise . 
// 3 stages- fulfilled,pending,reject .
//lifecycle methods of a component: mounting,updating,unmounting
//mounting- componentDidMount()
//updating- componentDidUpdate()
//unmounting- componentWillUnmount()