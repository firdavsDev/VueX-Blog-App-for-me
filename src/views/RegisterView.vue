<template>
    <div class="register-view">
        <h1>Register</h1>

        <form>

            <Input type="text" label="Username" placeholder="Username" v-model="username" />
            <!-- e" is the same as :value="username" and @input="username = $event.target.value" -->

            <Input type="text" label="Email" placeholder="Email" v-model="email" />
            <!-- is the same as :value="email" and @input="email = $event.target.value" -->

            <Input type="password" label="Password" placeholder="Password" v-model="password" />
            <!-- d" is the same as :value="password" and @input="password = $event.target.value" -->

            <Button type="submit" label="Send" class="btn btn-primary w-100" @click="submitHandler"
                :disabled="loading"></Button>

        </form>

    </div>
</template>
<script>
export default {
    name: 'RegisterView',
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        submitHandler(e) {
            e.preventDefault()
            const data = {
                username: this.username,
                email: this.email,
                password: this.password
            };
            //payload dispatch is for auth actions in vuex
            this.$store.dispatch('register', data)
                .then(user =>
                    console.log(user),
                    this.$router.push({
                        name: 'login'
                    })
                )
                .catch(err => console.log(err))

        }
    },
    computed: {
        loading() {
            return this.$store.state.auth.isLoading
        }
    }
}
</script>
<style scoped>
.register-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
}
</style>