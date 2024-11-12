const div_api_data = document.getElementById('json') 
 
function get_all_resource() { 
const url = 'https://jsonplaceholder.typicode.com/posts' 
fetch(url) 
.then(response => response.json()) 
.then(data => print_data(data)) 
} 
 
function object_to_array(data_object) { 
let data_array = Object.entries(data_object) 
 
return data_array 
} 
 
function formate_data(data_object) { 
let data = object_to_array(data_object) 
for (let i = 0; i < data.length; i++) { 
let a = data[i].join(': ') 
data[i] = a 
} 
 
return data 
} 
 
function print_data(data_object) { 
let data = [] 
 
for (let i = 0; i < data_object.length; i++) { 
data.push(formate_data(data_object[i])) 
} 
 
for (let i = 0; i < data.length; i++) { 
let a = data[i].join(' | ') 
let new_div = document.createElement('div') 
new_div.textContent = a 
div_api_data.append(new_div) 
 
let br = document.createElement('br') 
div_api_data.append(br) 
} 
} 
 
get_all_resource()