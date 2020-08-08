<template>
  <div>
      <form @submit.prevent="submit_form">
        Post Title:
          <br>
          <input v-model="fields.title" type="text" class="form-control">
          <div class="alert alert-danger" v-if="errors && errors.title">
              {{ errors.title[0] }}
          </div>
          <br>
          Post Text:
          <br>
          <textarea v-model="fields.post_text" rows="10" class="form-control"></textarea>
          <div class="alert alert-danger" v-if="errors && errors.post_text">
              {{ errors.post_text[0] }}
          </div>
          <br>
          Category:
          <select class="form-control" v-model="fields.category_id">
              <option v-for="cat in categories.data" :value="cat.id">{{ cat.name }}</option>
          </select>
          <div class="alert alert-danger" v-if="errors && errors.category_id">
              {{ errors.category_id[0] }}
          </div>
          <br>
          <input type="submit" value="Submit Post" class="btn btn-primary">
      </form>
  </div>
</template>

<script>
export default {
    data(){
        return {
            categories: {},
            fields: {
                title: '',
                post_text: '',
                category_id: ''
            },
            errors: {},
        }
    },
    mounted() {
        axios.get('/api/categories').then(response => {
            this.categories = response.data;
        });
    },
    methods: {
        submit_form() {
            axios.post('/api/posts', this.fields).then(response => {
                this.$router.push('/');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        }
    }
}
</script>

<style>
</style>
