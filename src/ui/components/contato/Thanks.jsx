
import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
  } from 'react-icons/bs';
  
  
  import './Thanks.css';
  
  const emojiData={
    unsatisfied: <BsFillEmojiFrownFill/>,
    neutral:<BsFillEmojiNeutralFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    very_satisfied:<BsFillEmojiHeartEyesFill/>,
  };
  
  const Thanks = ({ data }) => {
    return(
      <div className='thanks-container'>
     <h2> Falta pouco....</h2>
     <p>Logo entraremos em contato com você para lhe ajudar da melhor maneira. Lembramos também, que sua opnião para nós é muito importante para melhorarmos os nossos serviços.</p>
     <p>Para enviar a mensagem e a avaliação clique no botão abaixo.</p>
     <h3>Aqui está o resumo da sua avaliação, {data.name}:</h3>
     <p className='review-data'>
      <span>Satisfação:</span>
      {emojiData[data.review]}
     </p>
     <p className='review-data'>
      <span>Comentário: </span>
      {data.comment}
     </p>
     </div>
    
    );
  };
  
  export default Thanks;