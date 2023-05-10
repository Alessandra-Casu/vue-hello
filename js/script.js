
/* 3) Salviamo in una variabile locale la funzione createApp, presa dalla variabile globale Vue
 */
const app = Vue.createApp({
    //4) inizializziamo un'istanza dell'applicazione Vue, invocando la funzione CreateApp
    data: function (){
        return{
            message: 'Vue salvami tu!',
            
            classValue: 'text-center',
            image : 'img/vuejs-logo.webp',
        }
    }
    
});

//invochiamo il metodo .mounth() per connettere l'istanza al tag HTML con id #app e renderizzare l'app
app.mount('#root');
