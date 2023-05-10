<template>
    <div class="component">
        <h1>{{ fortune.fortune }}</h1>

    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import { fortune } from '../models/fortune';

export default {
    setup() {

        return {
            fortune: computed(() => AppState.fortune)
        }
    }
}
</script>


<style lang="scss" scoped></style>