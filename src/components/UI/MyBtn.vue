<template>
    <button class="btn">
        <slot class="btn__slot"></slot>
    </button>
</template>

<script>
export default {
    name: 'my-btn'
}
</script>

<style lang="scss" scoped>
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1vw 2vw;
    border-radius: 8px;
    background: $btn__bg;
    color: $btn__text-color;
}

</style>