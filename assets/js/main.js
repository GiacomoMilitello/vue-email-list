/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const {
    createApp
  } = Vue
  
  createApp({
    data(){
        return {
            tenMail: []
            
        }
    },
    created(){
  
    },
    methods:{
        generate() {
            this.tenMail = [];
            this.counter = 0
            for (let i = 0; i < 10; i++) {
              axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((email) => {
                  this.tenMail.push(email.data.response);
                  if (this.tenMail.length === 10) {
                    this.counter=10;
                  }
                })
            }
        }
    }
  }).mount("#app")