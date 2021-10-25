<template>
<div class="back">

    <div class="area">

        <div class="daily">
            <div id="title"><h1>DAILY</h1></div>
            
            <button>ADICIONAR TAREFA DIARIA</button>

                <Card v-for="task in tasks" :key="task.name"
                    :value="task.name"
                />
        </div>

        <div class="todo">

            <div id="title"><h1>TO-DO LIST</h1></div>
            
            <button>ADICIONAR TAREFA</button>

                <div class="tdlist">

                </div>
        </div>

        <div class="reminds">

            <div id="title"><h1>LEMBRETES</h1></div>
            
            <button>ADICIONAR LEMBRETE</button>

                <div class="rlist">

                </div>
        </div>
    </div>

    <div class="footer">
        <h1>TO-DO APP</h1>  

        <h2>Developed and designed by @by_jotapec.</h2>
    
        <div class="social">
            <a href="https://www.instagram.com/by_jotapec" target="_blank"><img src="../../public/insta.png" width="30"></a>
            
            <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-m-cruz-694477217" target="_blank"><img src="../../public/link.png" width="30"></a>
        </div>     
    </div>

</div>
</template>

<script>
//import Pill from "./Pill.vue"
import Card from "./Card.vue"

export default {

    components: { Card },

    data: function () {
        return {
            tasks: [
                { name: "fdfjdfkjdkfdkjf" },
                { name: "adsdsdfsf" },
                { name: "adsdsdfsf" },
                { name: "djshdjhsdhjdsd" },

            ]
        }
    }

}
</script>

<style>

* {
    padding: 0;
    margin: 0;
    border: none;
    font-family: "Poppins", sans-serif;
}

.back {
    background-color: #383838;
}

.social a {
    padding: 10px;
}
.footer {

    text-align: center;
    line-height: 1.5rem;
    letter-spacing: 0.1rem;

    margin-top: 2rem;
    padding: 1rem;

    width: 100%;
    height: 13vh;
    border-radius: 40px;
    
    background-color: #575757;
    color: #b6b6b6;
    font: bold;
    font-size: 8px;
    
    
}

.area button {
    
    margin: 0;
    margin-top: 2rem;
    width: 20vw;
    height: 3rem;
    
    color: rgb(187, 187, 187);
    font-weight: bold;
    font-size: 15px;

    background-color: #1b1817ce;
    box-shadow: inset 0 0 1em #000000de ;
    border-radius: 45px;
    
} 

.body {

    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

}

.area {

    width: 100%;
    height: 1000px;

    display: flex;
    text-align: center;
    justify-content: center;
  
    background-image: linear-gradient(45deg, #383838, #3f3f3f);
    background-repeat: no-repeat;
}

.area #title {

    color: #2b2121;
    background-color: #cf8515;

    height: 8vh;
    box-shadow: inset 0 0 1em #b97002;
    padding-top: 0.5rem;
}

.area .daily {
    
    margin-top: 2rem;
    margin-left: 1rem;

    width: 300px;
    height: auto;

    border-radius: 30px;
    background-color: #7c7b78;

}

.area .todo {

    margin-top: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;

    width: 300px;
    height: auto;

    border-radius: 30px;
    background-color: #7c7b78;
}

.area .reminds {

    margin-top: 2rem;
    margin-right: 1rem;

    width: 300px;
    height: auto;

    border-radius: 30px;
    background-color: #7c7b78;
}



</style>