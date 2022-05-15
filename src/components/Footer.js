import React from 'react';

export default function Footer({numberQuestion, data}) {
  
  const icons = {red:<ion-icon key='0' class="red" name="close-circle"></ion-icon>,yellow:<ion-icon key='1' class="yellow" name="help-circle"></ion-icon>, green: <ion-icon key='2' class='green' name="checkmark-circle"></ion-icon>};
  
  return (
    <footer>
      <div className="pontuation">
        <p>0/{numberQuestion} CONCLUÍDOS</p>
        <div className="answerIcons">
          {
            data.map((color)=>icons[color])
        }
        </div>
      </div>
    </footer>
  );
}
