<template>
    <div class="form-group">
        <label :for="label">{{ label }}</label>
        <input :type="type" class="form-control" :id="label" :placeholder="label" :value="modelValue" @input="updateValue" />
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        label: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        modelValue: [String, Number]
    },
    methods: {
        updateValue(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>