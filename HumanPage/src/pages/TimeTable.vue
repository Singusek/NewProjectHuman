<template>
    <div>
        <the-header></the-header>
        <div class="container">
           <table>
            <tr class="first-table">
                <td>1</td> <td>2</td> <td>3</td> <td>4</td> <td>5</td> <td>6</td> <td>7</td>
            </tr>
            <tr>
                <td class="first-table">1</td> 
                <td>2</td> <td>3</td> <td>4</td> <td>5</td> <td>6</td> <td>7</td>
            </tr>
            <tr>
                <td class="first-table">1</td> 
                <td>2</td> <td>3</td> <td>4</td> <td>5</td> <td>6</td> <td>7</td>
            </tr>
            <tr>
                <td class="first-table">1</td> 
                <td>2</td> <td>3</td> <td>4</td> <td>5</td> <td>6</td> <td>7</td>
            </tr>
            <tr>
                <td class="first-table">1</td> 
                <td>2</td> <td>3</td> <td>4</td> <td>5</td> <td>6</td> <td>7</td>
            </tr>
            <tr>
                <td class="first-table">1</td> 
                <td>2</td> <td>3</td> <td>4</td> <td>5</td> <td>6</td> <td>7</td>
            </tr>
            <tr>
                <td class="first-table">1</td> 
                <td>2</td> <td>3</td> <td>4</td> <td>5</td> <td>6</td> <td>7</td>
            </tr>
            </table>
        </div>
        <the-footer></the-footer>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
td { 
    border: 1px solid black; 
    } 
table {
    background: #000;
    background: linear-gradient(rgb(235, 135, 41, 0.3) 5%, rgba(255, 255, 255, 0.9) 100%);
    }
.container {
    padding: 70px;
}
.first-table {
    background-color: rgba(235, 135, 41, 0.3);

}
td:hover {
    background-color: rgb(235, 135, 41);
}
</style>