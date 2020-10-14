import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import marina from './marina.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={marina}
          nome="Marina Azzi Nogueira" 
          descricao="Oiê, eu sou a Marina, formada em Imagem e Som pela UFSCar e atualmente aluna Dev Full Stack da Labenu. Mergulhando em aventuras! :D"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://img2.gratispng.com/20180328/gie/kisspng-email-logo-irregular-exposure-showroom-fashion-a-circle-5abb3e7b5154c5.4368389815222206673331.jpg"
          nome="Email: "
          descricao=" marina@personalhorter.com"
        />

        <CardPequeno
          imagem="https://img.favpng.com/20/25/20/the-daily-dot-internet-logo-online-newspaper-png-favpng-cSFX1tCFUNTcwtsczAW8sQN34.jpg"
          nome="Endereço: "
          descricao=" Largo Casa de Praia, 24"
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT93KQ1sa-rrW_OMyXiHIHgpVsQfy8FFXB9Qw&usqp=CAU" 
          nome="Casa de Praia" 
          descricao="Mãe de pet de Leia, Luke e Laura!" 
        />
        
        <CardGrande 
          imagem="https://veja.abril.com.br/wp-content/uploads/2017/04/horta-2.jpg" 
          nome="Personal Horter" 
          descricao="Ajudando serial killers de vegetais a descobrirem o verde de seus dedos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
