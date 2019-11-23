<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">FusReddit</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="/">Home </a>
            </li>

            <!--<li class="nav-item active">
                <div class="nav-link" router to="/about">
                    About
                </div>
                <a class="nav-link" href="/about">About</a>
            </li>-->
            
            <li v-if="$store.state.isUserLoggedIn" class="nav-item active" >
                <router-link v-bind:to="'/profile/'+$store.state.user.id" class="nav-link"><a>Profile</a></router-link>
            </li>

        </ul>
        <ul class="navbar-nav inline my-2 my-lg-0">
            <div v-if="!$store.state.isUserLoggedIn">
                <li class="nav-item active">
                    <a class="nav-link" href="/login">Log in <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/register">Register <span class="sr-only">(current)</span></a>
                </li>
            </div>
            <li v-else @click="logout" class="nav-item active">
                <a class="nav-link" href="/login">Log out <span class="sr-only">(current)</span></a>
            </li>
        </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Header",
    methods:{
        logout () {
            
            this.$store.dispatch('setToken', null);
            this.$store.state.isUserLoggedIn = false;
            this.$store.dispatch('setUser', null);
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>

</style>