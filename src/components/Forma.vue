<template>
    <div class="header">
        <div>
            <div 
                class="btn_head"
                v-on:click="hidePreview()">
                Форма
            </div>
            <div
                class="btn_head" 
                v-on:click="hideForma()">
                Превью
            </div>
        </div>  
        <div v-if="showForma" class="content">    
            <div>
                <h3>Персональные данные:</h3>
            </div>  
            <div>
                <input v-model="firstName.name" placeholder="Имя">
            </div>
            <div>
                <input v-model="firstName.age" type="number" placeholder="Возраст">
            </div>
            <div>
                <h3>Дети (макс.5)</h3>
            </div> 
            <div  
                v-if="childName.length < 5 ">
                    <div
                        class="btn_add_child"
                        v-on:click="addChildren()">
                        + Добавить ребенка
                    </div>
            </div> 
            <div v-for="childNam in childName" :key="childNam.id">
                <input
                    v-model="childNam.name"
                    placeholder="Имя ребенка"
                >
                <input
                    v-model="childNam.age"
                    type="number"
                    placeholder="Возраст ребенка"
                >
                <button class="btn_close"
                    v-on:click="delChildren(childName[childName.length - 1].id)">
                    x
                </button>
            </div>
            <div class="btn_add_child">
                <div 
                    v-on:click="saveForm()">
                    Сохранить
                </div>
            </div>
        </div>
        <div v-if="showPreview">
            <h3>Персональные данные:</h3>
            <div>
                <b>Имя:</b> {{ showFirstName[showFirstName.length - 1] }}
            </div>
            <div>    
                <b>Возраст: </b>{{ showFirstAge[showFirstName.length - 1] }}
            </div>
            <h3>Дети:</h3>
            <div v-for="childNam in childName" :key="childNam.id">
                <div>
                    {{ childNam.name }}, {{ childNam.age }} лет
                </div>  
            </div> 
        </div>
    </div>
</template>

<script>
export default  {
    name: 'Forma',
    props: [],
    data() {
        return {
            firstName:{
                name: "",
                age: null,  
            },
            childName:[],
            childNameId: null,
            showFirstName: [],
            showFirstAge: [],
            buttonAddChild: true,
            showPreview: false,
            showForma: true,
        }
    },
    methods: {
        saveForm() {
            if(!this.validation()){
                return
            }
            this.showFirstName.push(this.firstName.name)
            this.firstName.name = ""
            this.showFirstAge.push(this.firstName.age)
            this.firstName.age = null  
            this.showPreview = true
            this.showForma = false
            
        },
        addChildren(Chname, age) {
            let newChildName = {
                id: this.childNameId,
                name: Chname,
                age: age
            }
            this.childNameId++
            this.childName.push(newChildName) 
            console.log(this.showFirstName);
        },
        delChildren(id) {
            this.childName.splice(id,1)
            this.childNameId--
        },
        hidePreview(){
            this.showPreview = false
            this.showForma = true
        },
        hideForma() {
            this.showPreview = true
            this.showForma = false
        },
        validation() {
            if(!this.firstName.name){
                alert('Введите имя!')
                return false
            }
            if(!this.firstName.age){
                alert('Введите возраст!')
                return false
            }
            if(!this.childName[this.childName.length - 1].name){
                alert('Введите имя ребенка!')
                return false
            }
            if(!this.childName[this.childName.length - 1].age){
                alert('Введите возраст ребенка!')
                return false
            }
            return true
        }
    }
}
</script>

<style scoped>
    .header{
        width: 95%;
        height: 50px;
        margin: auto;
        padding: 5px;
        text-align: center;
        display: inline-block;

    }
    .btn_head {
	display: inline-block;	
	box-sizing: border-box;
	padding: 0 20px;
	margin: 0 15px 15px 0;
	outline: none;
	border: none;  
	border-radius: 6px;
	height: 40px;
	line-height: 40px;
	font-size: 17px;
	font-weight: 600;
	text-decoration: none;
	color: #385898;
	background-color: #e7f3ff;
	cursor: pointer;
	user-select: none;
	appearance: none;
	touch-action: manipulation;
}
.btn_head:focus-visible {
	box-shadow: 0 0 0 2px #666;
}
.btn_head:hover {
	background-color: #DBE7F2;
}
.btn_head:active {
	transform: scale(0.96);
}
.btn_head:disabled {
	pointer-events: none;
	opacity: 0.65;
}

.btn_close{
    background-color: #FA8072 ;
}

.btn_add_child {
	display: inline-block;	
	box-sizing: border-box;
	padding: 0 20px;
	margin: 0 15px 15px 0;
	outline: none;
	border: 1px solid;  
	border-radius: 6px;
	height: 30px;
	line-height: 30px;
	font-size: 17px;
	font-weight: 600;
	text-decoration: none;
	color: #385898;
	background-color: #e7f3ff;
	cursor: pointer;
	user-select: none;
	appearance: none;
	touch-action: manipulation;
}
.btn_add_child:focus-visible {
	box-shadow: 0 0 0 2px #666;
}
.btn_add_child:hover {
	background-color: #DBE7F2;
}
.btn_add_child:active {
	transform: scale(0.96);
}
.btn_add_child:disabled {
	pointer-events: none;
	opacity: 0.65;
}



.btn_close{
    background-color: #FA8072 ;
}
    .content{
        margin: auto;
        padding: auto;
    }
    .btn{
        margin: 3px;
    }

    input{
        padding:5px;
        margin:5px;
        border-radius:5px;
        
    }

   
    
    
</style>