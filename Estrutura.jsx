import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './Estrutura.css'




function Estrutura() {
  
  return (
    <div>
    <Header/>
    div
    <div className="DivAzul">
      <span className='carrinho'>Carinho</span>
      <div className="container">
      <div className='DivBranca'> 
     
      <p>Total do carrinho</p>
       <div className='linha'><span>Sub-total:</span>
       <span className='valor'>R$ 262,80</span>
       </div>
       <span className='ValorDois'>R$ 262,80</span>
       <br/>
       <br/>
       <a className='StyleButton' href="">Concluir Compra</a>
       </div>
    </div>
      </div> 
      <div className="container">
        <div>
          <input></input>
        </div>
    </div>
    <Footer/>
   </div>
  );
};

export default Estrutura;
