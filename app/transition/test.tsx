interface Card {
   name: string,
   theme: {
      backgroundColor: string,
      color: string
   }
}

const test:Card = {
   name:'xxx',
   theme : {
      backgroundColor: 'pink',
      color: 'pink'
   }
}


export default function CardA(){
   return (
         <div style={test.theme}>
            <div>{test.name}'s Todos </div>
         </div>
   );
}


