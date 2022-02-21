<template>
    <div>
       <div>
            <h3>Персональные данные:</h3>
            <div>
                <b>Имя:</b> {{ showFirstName.name }}
            </div>
            <div>    
                <b>Возраст: </b>{{ showFirstName.age }}
            </div>
            <h3>Дети:</h3>
           <div>
                <div v-for="showChildNam in showChildName" :key="showChildNam.id">
                    {{ showChildNam.name }}, {{ showChildNam.age }} лет
                </div>  
            </div>
        </div> 
    </div>
</template>

<script>

export default {
  name: "preview",
  props: [],

  mounted() {
    this.showFirstName = JSON.parse(localStorage.getItem('firstName'));
    this.showChildName = JSON.parse(localStorage.getItem('childName'));
    
  },

  data() {
    return{
      showFirstName: "",
      showChildName: "",
      
    }
  },

  methods:{
  
  }

}
</script>
