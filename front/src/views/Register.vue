<template>
    <div class="register">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Register</div>
                        <div class="card-body">
                            <form class="form-horizontal" v-on:submit.prevent="submit">
                                <div class="form-group">
                                    <label for="email" class="cols-sm-2 control-label">Your Email</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                                            <input type="text" v-model="form.email" class="form-control" name="email" id="email" placeholder="Enter your Email" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="password" class="cols-sm-2 control-label">Password</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                            <input type="password" v-model="form.password" class="form-control" name="password" id="password" placeholder="Enter your Password" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                            <input type="password" v-model="form.confirm" class="form-control" name="confirm" id="confirm" placeholder="Confirm your Password" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group ">
                                    <button type="submit" class="btn btn-primary btn-lg btn-block login-button">Register</button>
                                </div>
                                <div class="login-register">
                                    <a href="/login">Login</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'register',
    data: function(){
        return {
            form: {
                email: null,
                password: null,
                confirm: null
            }
        }
    },
    methods:{
        submit: function() {
            axios.post('http://127.0.0.1:8083/register', this.form).then((res) => {
                console.log(res);
            })
        }
    }
}
</script>

<style scoped>
    .register {
        padding-top: 5%;
    }
</style>