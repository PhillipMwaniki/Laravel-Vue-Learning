<template>
  <div>
      <form @submit.prevent="submit_form">
        Post Title:
          <br>
          <input v-model="fields.title" type="text" class="form-control">
          <br>
          Post Text:
          <br>
          <textarea v-model="fields.post_text" rows="10" class="form-control"></textarea>
          <br>
          Category:
          <select class="form-control" v-model="fields.category_id">
              <option v-for="cat in categories.data" :value="cat.id">{{ cat.name }}</option>
          </select>
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
            }
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
            });
        }
    }
}
</script>

<style>
</style>
