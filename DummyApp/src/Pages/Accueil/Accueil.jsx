import React, { useEffect, useState } from 'react';
import Loader from '../../Components/Loader/Loader';
import Container from 'react-bootstrap/esm/Container';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/esm/Button';
import Card from "react-bootstrap/Card"

export default function Accueil() {

  const [toogle, setToogle] = useState(false);
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const apiURL = import.meta.env.VITE_URL
  const callAPI = async (url) => {
      setLoading(true)
      let response = await fetch(url);
      if(response.ok){
        let data = await response.json();
        setData(data);

      }else{
        console.log("Pas de données")
      }
      setLoading(false)
  }

  return (
    <Container>
        <Row>
          <h1 className='text-center my-5'>Accueil</h1>
        </Row>
        <Row >
          <div className='text-center'>
            {loading === true ? 
              <Loader />
            :  
              <Button onClick={()=>{callAPI(apiURL)}} variant='primary'>Envoyé Donnée</Button>
          }
          </div>
        </Row>

        <Row xs={1} md={3} lg={4} className='g-4 mt-4'>
           {data 
             &&
              data.map((pok, index)=>
              (
               <Col>
                <Card key={index}>
            <Card.Img variant="top" src={pok.image} />
            <Card.Body>
              <Card.Title>{pok.name}</Card.Title>
              <Card.Text>
             {pok.stats.HP}
              </Card.Text>
            </Card.Body>
          </Card>
              </Col>
              )) 
              
            }
        </Row>

    </Container>
  )
}
