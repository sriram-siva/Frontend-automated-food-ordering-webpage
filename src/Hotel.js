import { Component } from "react";
import './Hotel.css';
import parota from './par.jpg';
import naan from './naan.jpg';
import chappathi from './chappathi.jpg';
import poori from './poori.jpg';


class Hotel extends Component{
    constructor(props){
        super(props);
        this.state={
            sno:1,
            dish:'',
            qua:0,
            price:0,
            sno2:2,
            dish2:'',
            qua2:0,
            price2:0,
            sno3:3,
            dish3:'',
            qua3:0,
            price3:0,
            sno4:4,
            dish4:'',
            qua4:0,
            price4:0,
            total:'',
            display:'none'
        }
    }
    minBtn1=()=>{
          if(this.state.qua>0){
            const name="Parota";
            const quantity=this.state.qua-1;
            const amnt=this.state.price-35
            this.setState({qua:quantity,dish:name,price:amnt})
          }
          if(this.state.price >=0){
            this.setState(prevState => ({
              price: prevState.qua - 1,
              price: prevState.price=prevState.qua*35,    
              total:prevState.price+prevState.price2+prevState.price3+prevState.price4
            }));
          }
    }
    plusBtn1=()=>{
      if (this.state.price >= 0) {
        const quantity=this.state.qua +1;
        const name="Parota";
        this.setState({qua:quantity,dish:name})
        this.setState(prevState => ({
          ...prevState,
          price: prevState.qua + 1,
          price: prevState.price=prevState.qua*35,
          total:prevState.price+prevState.price2+prevState.price3+prevState.price4
        }));
      }        
    }
    minBtn2=()=>{
        if(this.state.qua2>0){
          const name="Naan";
          const quantity=this.state.qua2-1;
          this.setState({qua2:quantity,dish2:name})
        }
        if(this.state.price2 >=0){
          this.setState(prevState => ({
            price2: prevState.qua2 - 1,
            price2: prevState.price2=prevState.qua2 * 40,
            total:prevState.price+prevState.price2+prevState.price3+prevState.price4
          }));
  }
}

    plusBtn2=()=>{
      if (this.state.price2 >= 0) {
        const quantity=this.state.qua2 +1;
        const name="Naan";
        this.setState({qua2:quantity,dish2:name})
        this.setState(prevState => ({
          ...prevState,
          price2: prevState.qua2 + 1,
          price2: prevState.price2=prevState.qua2 * 40,
          total:prevState.price+prevState.price2+prevState.price3+prevState.price4
        }));
      }          
  }
    minBtn3=()=>{
    if(this.state.qua3>0){
      const name="Chappathi";
      const quantity=this.state.qua3-1;
      this.setState({qua3:quantity,dish3:name})
    }
    if(this.state.price3 >=0){
      this.setState(prevState => ({
        price3: prevState.qua3 + 1,
        price3: prevState.price3= prevState.qua3 *20,
        total:prevState.price+prevState.price2+prevState.price3+prevState.price4
      }));
}
}
    plusBtn3=()=>{
      if (this.state.price3 >= 0) {
        const quantity=this.state.qua3 +1;
        const name="Chappathi";
        this.setState({qua3:quantity,dish3:name})
        this.setState(prevState => ({
          ...prevState,
          price3: prevState.qua3 + 1,
          price3: prevState.price3= prevState.qua3 *20,
          total:prevState.price+prevState.price2+prevState.price3+prevState.price4
        }));
      }        
}
minBtn4=()=>{
  if(this.state.qua4>0){
    const name="Poori";
    const quantity=this.state.qua4-1;
    this.setState({qua4:quantity,dish4:name})
  }
  if(this.state.price4>=0){
    this.setState(prevState => ({
      price4: prevState.qua4 + 1,
      price4: prevState.price4= prevState.qua4 *15,
      total:prevState.price+prevState.price2+prevState.price3+prevState.price4
    }));
}
}
  plusBtn4=()=>{
    if (this.state.price3 >= 0) {
      const quantity=this.state.qua4 +1;
      const name="Poori";
      this.setState({qua4:quantity,dish4:name})
      this.setState(prevState => ({
        ...prevState,
        price4: prevState.qua4 + 1,
        price4: prevState.price4= prevState.qua4 *15,
        total:prevState.price+prevState.price2+prevState.price3+prevState.price4
      }));
    }        
}
   viewItems=()=>{
        
        const display1 = ((this.state.display==='none')?'flex':'none')

        this.setState({display:display1})
        console.log(display1)
   }
  

    render(){
        return(
        <div className="bod">
          <header>
            <nav className="navbar">
              <div className="list">
              <span id="name">HOTEL A1</span>
               <a href="">Home</a>
               <a href="">About</a>
               <a href="">Help</a>
               <a href="">Contact us</a>
              </div>
            </nav>  
            <div className="para">
               <p>
               “Good food is the foundation of genuine happiness.”
               </p>
            </div>
            <div className="inp">
              <label>Table number:</label>
              <select type="number">
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              </select> 
              <label>No of person:</label>
              <select type="number">
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              </select> 
              </div>
          </header>
          <nav className="nav2">
          <label>MEALS</label>
          <label onClick={this.viewItems} >ROTTIES/PAROTAS</label>
          <label>STARTERS</label>
          <label>JUICES</label>
          </nav>
           <div className="wrapper">
              <div className="container" style={{ display: this.state.display }}>
               <div className="parota">
                <img src={parota} alt="" id="imgpr"/>
                <p> PAROTA<br></br>
                 Rs:35/-<br></br><br></br>
                  It is made from Maida or Atta.
                </p>
                <div id="input1">
                <input type='button' value='-' onClick={this.minBtn1} id="minbtn"></input>
                <input type='button' value='+' onClick={this.plusBtn1} id="plusbtn"></input>
                <input type="number" placeholder="0"  id="put1" value={this.state.qua} readOnly></input> 
                </div>           
               </div>
               <div className="naan">
               <img src={naan} alt="" id="imgpr"/>
               <p> NAAN<br></br>
                Rs:40/-<br></br><br></br>
                It is a single-layer fluffy bread.
               </p>
               <div id="input2">
               <input type='button' value='-' onClick={this.minBtn2} id="minbtn"></input>
               <input type='button' value='+' onClick={this.plusBtn2} id="plusbtn"></input>
               <input type="number" placeholder="0" id="put1" value={this.state.qua2} readOnly></input> 
               </div>           
              </div>
              <div className="chappathi">
               <img src={chappathi} alt="" id="imgpr"/>
               <p> chappathi<br></br>
                Rs:20/-<br></br><br></br>
                An unleavened, whole wheat flatbread.  
               </p>
               <div id="input3">
               <input type='button' value='-' onClick={this.minBtn3} id="minbtn"></input>
               <input type='button' value='+' onClick={this.plusBtn3} id="plusbtn"></input>
               <input type="number" placeholder="0" id="put1"  value={this.state.qua3}readOnly></input> 
               </div>
               </div> 
               <div className="chappathi">
               <img src={poori} alt="" id="imgpr"/>
               <p> Poori<br></br>
                Rs:15/-<br></br><br></br>
                An bread puff up when deep fried.
  
               </p>
               <div id="input3">
               <input type='button' value='-' onClick={this.minBtn4} id="minbtn"></input>
               <input type='button' value='+' onClick={this.plusBtn4} id="plusbtn"></input>
               <input type="number" placeholder="0" id="put1"  value={this.state.qua4}readOnly></input> 
               </div>
               </div>   
              </div>
              <div className="cart">
                <h3>FOOD CART</h3>
                <table>
                  <tr>
                    <th>S.no</th>
                    <th>Food</th>
                    <th>Quan.</th>
                    <th>Price</th>
                  </tr>
                  <tr>
                     <td>{this.state.sno}</td>
                     <td>{this.state.dish}</td>
                     <td>{this.state.qua}</td>
                     <td>{this.state.price}</td>
                  </tr>
                  <tr>
                  <td>{this.state.sno2}</td>
                  <td>{this.state.dish2}</td>
                  <td>{this.state.qua2}</td>
                  <td>{this.state.price2}</td>
                  </tr>
                  <tr>
                  <td>{this.state.sno3}</td>
                  <td>{this.state.dish3}</td>
                  <td>{this.state.qua3}</td>
                  <td>{this.state.price3}</td>
                  </tr>
                  <tr>
                  <td>{this.state.sno4}</td>
                  <td>{this.state.dish4}</td>
                  <td>{this.state.qua4}</td>
                  <td>{this.state.price4}</td>
                  </tr>
                  <tr>
                     <td></td>
                     <td></td>
                     <td>TOTAL</td>
                     <td>{this.state.total}</td>
                  </tr>
                  
                </table>
              </div>
           </div>
          </div>
        );
    }

}

export default Hotel;