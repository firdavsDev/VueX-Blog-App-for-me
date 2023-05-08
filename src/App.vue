<template>
  
  <div class="container">

    <div>
      <Navbar />
    </div>

    <div>
      <RouterView />
    </div>

  </div>
</template>

<script>
import { Navbar } from '@/components'
import { RouterView  } from 'vue-router' // using for routing in vue

export default {
  name: 'App',

  components: {
    Navbar
  },


}
</script>
