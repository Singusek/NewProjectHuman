<template>
    <div>
        <div>
        {{ item.player.embedHtml
        .split(' ')[3]
        .split('="')[1]
        .slice(0, -1) }}</div>
    </div>
</template>

<script>
export default {
    props: {
        items: Array,
        player: Object,
        embedHtml: String
    }
}
</script>