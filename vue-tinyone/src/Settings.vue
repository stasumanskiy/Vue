<template>
    <div class="settings">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-md-12 col-lg-10">
                    <div class="row justify-content-md-center">
                        <div class="col-sm-12 col-md-10">
                            <div class="settings-inside">
                                <h2 class="settings-inside__title">
                                    Tinyone features
                                </h2>
                                <div class="settings-inside__descript">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Magnam doloribus voluptatibus neque nihil nobis distinctio, 
                                    natus recusandae officia beatae corporis odio.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="cards">
                                <div class="cards__col">
                                    <img src="./assets/computer-tablet.png" alt="Computer-tablet">
                                </div>
                                <div class="cards__col">
                                    <h4 class="cards__title">
                                        Fully Responsive
                                    </h4>
                                    <div class="cards__descript">
                                        Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Provident amet asperiores 
                                        maxime necessitatibus laudantium architecto.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="cards">
                                <div class="cards__col">
                                    <img src="./assets/lemon.png" alt="Lemon">
                                </div>
                                <div class="cards__col">
                                    <h4 class="cards__title">
                                        Fully Layered PSD
                                    </h4>
                                    <div class="cards__descript">
                                        Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Provident amet asperiores 
                                        maxime necessitatibus laudantium architecto.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="cards">
                                <div class="cards__col">
                                    <img src="./assets/folder.png" alt="Folder">
                                </div>
                                <div class="cards__col">
                                    <h4 class="cards__title">
                                        Font Awesome Icons
                                    </h4>
                                    <div class="cards__descript">
                                        Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Provident amet asperiores 
                                        maxime necessitatibus laudantium architecto.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="cards">
                                <div class="cards__col">
                                    <img src="./assets/code.png" alt="Code">
                                </div>
                                <div class="cards__col">
                                    <h4 class="cards__title">
                                        HTML5 & CSS3
                                    </h4>
                                    <div class="cards__descript">
                                        Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Provident amet asperiores 
                                        maxime necessitatibus laudantium architecto.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="cards">
                                <div class="cards__col">
                                    <img src="./assets/email.png" alt="Email">
                                </div>
                                <div class="cards__col">
                                    <h4 class="cards__title">
                                        Email Template
                                    </h4>
                                    <div class="cards__descript">
                                        Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Provident amet asperiores 
                                        maxime necessitatibus laudantium architecto.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="cards">
                                <div class="cards__col">
                                    <img src="./assets/bookmark.png" alt="Bookmark">
                                </div>
                                <div class="cards__col">
                                    <h4 class="cards__title">
                                        Free to download
                                    </h4>
                                    <div class="cards__descript">
                                        Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Provident amet asperiores 
                                        maxime necessitatibus laudantium architecto.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass">

.settings
    padding: 100px 0
    @media (max-width: 767px)
        padding: 100px 0 50px
    &-inside
        padding: 0 0 100px 0
        text-align: center
        &__title
            font-weight: 700
            margin-bottom: 18px
        &__descript
            font-size: 18px
            font-weight: 500   

.cards
    display: flex
    align-items: flex-start
    margin-bottom: 60px
    @media (max-width: 575px)
        max-width: 300px
        margin: 0 auto 60px
    &__col
        &:first-child
            width: 45px
            min-width: 45px
            height: 50px
            margin-right: 15px
            img
                max-width: 100%
                max-height: 100%
    &__title
        font-size: 20px
    &__descript
        padding-right: 30px
        font-size: 14px
        font-weight: 500
        line-height: 1.7
        @media (max-width: 575px)
            padding-right: 0                       
</style>