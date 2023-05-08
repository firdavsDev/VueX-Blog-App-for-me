!<template>
    <div class="login-view">
        <h1>Login</h1>

        <form>
            <Input type="text" label="Email" placeholder="Email" />
            <Input type="password" label="Password" placeholder="Password" />
            <Button type="submit" label="Send" class="btn btn-primary w-100" @click="submitHandler" :disabled="loading"></Button>
        </form>
        
    </div>
</template>
<script>
export default {
    name: 'LoginView',
    methods: {
        submitHandler(e){
            e.preventDefault()
        }
    },
    computed: {
        loading(){
            return this.$store.state.auth.isLoading
        }
    }
}
</script>
<style scoped>
    .login-view {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50vh;
    }
</style>
