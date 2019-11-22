<template>
  <div class="login">
    <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Log in</div>
                        <div class="card-body">
                            <form class="form-horizontal" v-on:submit.prevent="submit" >
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
                                <div class="form-group ">
                                    <button type="submit"  class="btn btn-primary btn-lg btn-block login-button">Login</button>
                                </div>
                                <div class="login-register">
                                    <a href="/register">Register</a>
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
  name: 'login',
  data: function(){
      return {
          form: {
              email: null,
              password: null
          }
      }
  },
  methods:{
      submit: function() {
          axios.post('http://127.0.0.1:8083/login', this.form).then((res) => {
              console.log(res);
          })
        }
  }
}
</script>

<style scoped>
    .login {
        padding-top: 5%;
    }
</style>