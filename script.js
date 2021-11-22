// Attraverso l’apposita API di Boolean
//  https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email
// e stamparli in pagina all’interno di una lista. (sempre untilizzando Vue)

var app = new Vue( {
    el: '#email-container',
    data: {
        email: ''
    },

    mounted(){
        const self = this;

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function(GenEmail){
            self.email=GenEmail.data.response;

        });

    }
}

);