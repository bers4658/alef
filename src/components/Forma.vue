<template>
    <div>
        <div>
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
            <div v-if="childName.length < 5 ">
                <div
                    class="btn_add_child"
                    v-on:click="
                     addChildren()">
                    + Добавить ребенка
                </div>
            </div> 
            <div v-for="childNam in childName" :key="childNam.id">
                <input
                    v-model="childNam.name"
                    placeholder="Имя ребенка"
                >
                <input v-model="childNam.age" type="number" placeholder="Возраст ребенка">
                <button 
                    class="btn_close"
                    v-on:click="delChildren(childName[childName.length - 1].id)">
                    x
                </button>
            </div>
            <div class="btn_add_child">
                <a
                    href="#/preview"
                    v-on:click="
                    validation(),
                    saveUserLocalStorage(),
                    saveChildsLocalStorage()">
                    Сохранить
                </a>
            </div>
        </div>  
    </div>
</template>

<script>

export default {
    name: "forma",
    components: {},
    props: [],
    
    data() {
        return {
            firstName:{
                name: "",
                age: null,  
            },
            childName:[],
            buttonAddChild: true,
        }
    },
    methods: {
        addChildren(chName, age) {
            let newChildName = {
                name: chName,
                age: age
            }
            this.childName.push(newChildName) 
        },
        delChildren(id) {
            this.childName.splice(id,1)
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
            // if(!this.childName[this.childName.length - 1].name){
            //     alert('Введите имя ребенка!')
            //     return false
            // }
            // if(!this.childName[this.childName.length - 1].age){
            //     alert('Введите возраст ребенка!')
            //     return false
            // }
            return true
        },
        saveUserLocalStorage(){
            let parsedName = JSON.stringify(this.firstName);
            localStorage.setItem("firstName",parsedName)
        },
        saveChildsLocalStorage(){
            let parsedChildName = JSON.stringify(this.childName);
            localStorage.setItem("childName",parsedChildName)
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
