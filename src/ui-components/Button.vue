<template>
    <button :type="type" :class="class">{{ label }}</button>
</template>
<script>
export default {
    name: 'Button',
    props: {
        type: {
            type: String,
            default: 'submit'
        },
        label: {
            type: String,
            default: ''
        },
        class : {
            type: String,
            default: 'btn btn-primary'
        }
    },
}
</script>
<style></style>