
let id = 1;
const app = {
    data() {
        return {
            title: 'Выберите категорию',
            text: '',
            game: '',
            csgo: [
                { name: 'Ezio' },
                { name: 'Xanzo' },
                { name: 'Zzzzz' },
                {name: 'Venum'},
            ],
            battlefield  : [
                { name: 'Peki' },
                { name: 'Jeki' },
                {name: 'MMM'},
                {name: 'Jeffrik'},
            ],
            Warzone: [
                { name: 'Xanter' },
                { name: 'Ache' },
            ]
        }
    },
    methods: {
        delUser(user) {
            this.csgo = this.csgo.filter(item => item.name != user.name)
            this.dota = this.dota.filter(item => item.name != user.name) 
            this.pubg = this.pubg.filter(item => item.name != user.name)
        },
        addUser() {
            if(this.game == 'csgo' && this.text.length > 1) {
                this.csgo.push({
                    name: this.text
                })
            } else if(this.game == 'dota' && this.text.length > 1) {
                this.dota.push({
                    name: this.text
                })     
            } else if(this.game == 'pubg' && this.text.length > 1) {
                this.pubg.push({
                    name: this.text
                })
            }
            this.text = ''
            this.game = ''
        },
    }
}

Vue.createApp(app).mount('#app')
