<template>
    <div class="breadCrumbs py-3 font-weight-bold px-2 border-bottom">
        <h2>{{name}}</h2>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            required : true,
        }
    }
}
</script>