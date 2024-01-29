const app = Vue.createApp({
    data() {
        return {
            enteredGoalValue: '',
            goals: []
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        },
        addGoal() {
            this.goals.push(this.enteredGoalValue);
        },
        removeGoal(index) {
            this.goals.splice(index, 1);
        }
    }
});

const howItWorksApp = Vue.createApp({
    data: () => {
        return {
            message: '',
            currentUserInput: '',
        }
    },
    beforeCreate() {
        console.log('before create');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('before mount()');
    },
    mounted() {
        console.log('mounted');
        setTimeout(() => {
            const sect = document.getElementById('how-vue-works');
            // const newP = new HTMLParagraphElement();
            const newDiv = document.createElement('div');
            const textNode = document.createTextNode('new div element');
            newDiv.appendChild(textNode);
            sect.appendChild(newDiv);
            // newP.innerText = 'New paragraph';
            // sect.appendChild(newP);
        }, 3000);
    },
    beforeUpdate() {
        console.log('before update()');
    },
    updated() {
        console.log('updated');
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },
        setText() {
            this.message = this.$refs.userText.value;
            // this.message = this.currentUserInput;
        }
    }
})

const eventsApp = Vue.createApp({
    data() {
        return {
            counter: 1455,
            name: ''
        }
    },
    methods: {
        add(num) {
            this.counter += 5;
        },
        remove(num) {
            this.counter -= 5;
        },
        setName(evt, title) {
            this.name = `${title} ${evt.target.value}`;
        },
        submitForm() {
            console.log('form submitted');
        }
    }
});

const twoWayApp = Vue.createApp({
    data() {
        return {
            userName: '',
            fullUserName: '',
            lastName: '',
        }
    },
    computed: {
        fullName() {
            if (this.lastName !== '' && this.userName !== '') {
                return this.userName + ' ' + this.lastName;
            }
            return '';
        }
    },
    watch: {
        // userName(value) {
        //     this.fullUserName = `${value} Mwarama`;
        // },
        // lastName(value) {
        //     this.fullUserName = `${this.userName} ${value}`;
        // }
    },
    methods: {
        outputFullName() {
            if (this.userName !== '') {
                return this.userName + ' ' + 'Mutwiri';
            }
            return '';
        }
    }
});

const componentApp = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manual Lorenz',
                    phone: '111444',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '456632',
                    email: 'julie@localhost.com'
                }
            ]
        }
    },
    methods: {

    }
});

componentApp.component('friend-contact', {
    template: `
        <li :key="friend.id">
            <h2> {{ friend.name }} </h2>
            <button @click="toggleDetails()">
                {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
            </button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone: </strong> {{ friend.phone }} </li>
                <li><strong>Email: </strong> {{ friend.email }} </li>
            </ul>
        </li>
    `,
    data() {
        return {
            detailsAreVisible: true,
            friend: {
                id: 'manuel',
                name: 'Manual Lorenz',
                phone: '111444',
                email: 'manuel@localhost.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

componentApp.mount('#component');
app.mount("#user-goal");
eventsApp.mount('#events');
twoWayApp.mount("#two-way-binding");
howItWorksApp.mount("#how-vue-works");

