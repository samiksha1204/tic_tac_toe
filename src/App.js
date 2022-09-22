import { useState } from 'react';
import Icon from './Icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import{Card,CardBody,Button,Container,Row,Col}from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const itemArray=new Array(9).fill("empty")

const App=()=> {

  const [isfrog,setIsfrog]=useState("false")
  const[iswinner,setIswinner]=useState("")
  const reloadGame = () => {
    setIsfrog(false)
    setIswinner("")
    itemArray.fill("empty",0,9)
  };

  

  const frogIsWinner = () => {
    if(itemArray[0]===itemArray[1]&&
      itemArray[1]===itemArray[2]&&
      itemArray[0]!=="empty")
    {
      setIswinner(`${itemArray[0]} wins`)
    }
    else if(itemArray[3]===itemArray[4]&&
      itemArray[4]===itemArray[5]&&
      itemArray[3]!=="empty"){
      setIswinner(`${itemArray[3]} wins` )
    }
    else if(itemArray[6]===itemArray[7]&&
      itemArray[7]===itemArray[8]&&
      itemArray[6]!=="empty"){
      setIswinner(`${itemArray[6]} wins`)
    }
    else if(itemArray[0]===itemArray[3]
      &&itemArray[3]===itemArray[6]&&
      itemArray[0]!=="empty"){
      setIswinner(`${itemArray[0]} wins`) 
    }
    else if(itemArray[1]===itemArray[4]
      &&itemArray[4]===itemArray[7]&&
      itemArray[1]!=="empty"){
      setIswinner(`${itemArray[1]} wins`) 
    }
    else if(itemArray[2]===itemArray[5]
      &&itemArray[5]===itemArray[8]&&
      itemArray[2]!=="empty"){
      setIswinner(`${itemArray[1]} wins`) 
    }
    else if(itemArray[0]===itemArray[4]
      &&itemArray[4]===itemArray[8]&&
      itemArray[0]!=="empty"){
      setIswinner(`${itemArray[0]} wins`)
    }
    else if(itemArray[2]===itemArray[4]&&
      itemArray[4]===itemArray[6]&&
      itemArray[2]!=="empty")
      {
      setIswinner(`${itemArray[2]} wins`) 
    }
  };

  const changeItem = itemNumber => {
    if (iswinner){
      return toast(iswinner,{type:"success"})
    }
    if(itemArray[itemNumber]==="empty"){
      itemArray[itemNumber]=isfrog?"frog":"snake"
      setIsfrog(!isfrog)
    }
    else{
      return toast("already filled",{type:"error"})
    }
    frogIsWinner();
    
  };

  return (
    <Container className="p=5">
    <ToastContainer position="botton" />
    <Row>
      <Col md={6} className="offset-md-3">
        {iswinner ?(<div className='mb=2 mt=3'>
          <h1 className='text-primary text-uppercase text-center'>
          {iswinner}
          </h1>
          <Button color='success' block onClick={reloadGame}>
            You can reload the game</Button>
          </div>) : (<h1 className='text-warning text-uppercase text-center'>
            {isfrog?"frog":"snake"} turns
          </h1>)}
        <div className="grid">
          { itemArray.map((item,index) => (
            <Card color='info'onClick={()=>changeItem(index) }>
              <CardBody className="Box">
                <Icon name={item}/>
              </CardBody>
            </Card>

          ))}
        </div>
        </Col>
    </Row>
    </Container>
  );
};

export default App;
