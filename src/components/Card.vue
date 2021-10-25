<template>
    <div class="card">
        <div class="tasks">

            <span>{{ value }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['value']
}
</script>

<style scoped>
    .card {
            
        width: 100%;
        margin-top: 0.5rem;
    }

    .tasks {
        
        font-size: 30px;
        font-weight: bold;

        display: flex;
        justify-content: center;
        text-align: center;

        padding: 1rem;
    }
</style>