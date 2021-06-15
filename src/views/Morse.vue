<template>
    <div class="morse">
        <MorseEncrypt/>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import MorseEncrypt from '@/components/MorseEncrypt.vue'

@Options({
    components: {
        MorseEncrypt
    }
})
export default class Morse extends Vue {}
</script>
