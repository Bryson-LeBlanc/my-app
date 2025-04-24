<script lang="ts">

</script>

<header>
    <div class="head-block">
        <div class="name">
            <h1>
                Bryson LeBlanc
            </h1>
       </div>
       <div class="contact">
            <h4 id="email"><a href="mailto:brysonleblanc2004@gmail.com">brysonleblanc2004@gmail.com</a></h4>
            <h4 id="phone">404-797-1969</h4>
       </div>
    </div>
   
</header>

<style>
    header {
        width:100%;
        
    }

    h1, h4, a {
        color : var(--color-e)
    }

    h1 {
        font-size:45px;
    }

    h4 {
        margin-bottom : 5px;
        margin-top : 5px;
        width: 290px;
    }

    #phone {
        margin-left : 52%;
    }

    #email {
        margin-right: 5%;
    }

    .head-block {
        background-color: var(--color-b);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin:10px;
        border-radius: 5px;
    }

    .name {
        margin-left : 30px;
    }

    @media (max-width: 800px) {
            .head-block {
                flex-direction: column;
                align-items: flex-start;
            }

            .contact {
                margin-left: 30px;
            }

            #phone {
                margin-left: 0;
            }

            #email {
                margin-right: 0;
            }
        }
</style>