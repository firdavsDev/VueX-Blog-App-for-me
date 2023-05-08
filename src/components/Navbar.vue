<template>
    <div>

        <nav class="navbar navbar-light bg-light">

            <h1>
                
                <RouterLink :to="{name: 'home'}" class="navbar-brand">Blog App</RouterLink>
            </h1>

            <ul class="nav justify-content-end">

                <li class="nav-item m-3">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="nav-item m-3">
                    <router-link to="/login">Login</router-link>
                </li>
                <li class="nav-item m-3">
                    <RouterLink :to="{name: 'register'}">Register</RouterLink>
                </li>
            </ul>

        </nav>
        
    </div>
</template>
<script>
export default {
    name: 'Navbar'

}
</script>
// router-link vs RouterLink - https://stackoverflow.com/questions/71725582/difference-between-router-link-and-routerlink-in-vue
