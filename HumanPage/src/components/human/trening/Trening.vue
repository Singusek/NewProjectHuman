<template>
    <div class="row">
           <table>
            <thead>
            <tr>
            <th class="day-table">{{ day }}</th> 
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class="trening"
                v-for="trening in trainings" 
                :key="trening" 
                :type="trening.type"
                :time="trening.time">{{ trening.type }} 
                <br/> {{ trening.time }}</td> 
            </tr>
            </tbody>
            </table>
        </div>
</template>

<script>
export default {
    props: {
        day: String,
        trainings: Array
    }
}
</script>

<style scoped>
th { 
    border: 1px solid black; 
    
    } 
.trening {
    background-color: rgba(235, 135, 41, 0.2);
    text-align: center;
    height: 80px;
    width: 150px;
}
.trening:hover {
    background-color: rgb(235, 135, 41);
}
.day-table {
    background-color: rgba(235, 135, 41, 0.5);
    text-align: center;
    height: 80px;
    width: 150px;
}
.row {
    margin: 0;
}
td { 
    border: 1px solid black; 
    display: block;
} 
table {
    border-collapse: collapse;
  }
  
@media only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	
table, thead, tbody, th, td, tr { 
	display: table-row; 
}

th {
    display: table-row; 
}
	
thead tr { 
	position: absolute;
	top: -9999px;
	left: -9999px;
}
	
tr { border: 1px solid rgb(141, 89, 21); }
	
td { 
		
	border: none;
	border-bottom: 1px solid rgb(141, 89, 21); 
	position: relative;
	padding-left: 50%; 
}
	
}
</style>