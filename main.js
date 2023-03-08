

const toDos = [
    {
        id: 1,
        task: 'Clean the garage',
        description: 'sweep and wash garage floor',
    },
        
    {
        id: 2,
        task: 'Prep mower',
        description: 'add hydrolic oil, check tire pressure',
    },
    {
        id: 3,
        task: 'Wash and clean car',
        description: 'Vacuum and clean inside of car + wash',
    },
    {
        id: 4,
        task: 'Prep Taxes',
        description: 'download all documents for taxes',
    },
    {
        id: 5,
        task: 'Work out',
        description: 'go to gym, full body work out',
    },
    {
        id: 6,
        task: 'Bootcamp HW',
        description: 'make this to do list with descriptions',
    },
]

const taskContainer = document.getElementById('toDos')


for (const dos of toDos) {
taskContainer.innerHTML += `
<div class="card" id="${dos.id}">
    <h3> ${dos.task}</h3>
    <p> ${dos.description}</p>
    <button> Done</button>
</div>
`
}

const bbord = document.querySelectorAll('toDos');
for (i = 0; i < bbord.length; i++) {
    toDos[i].style.border = '1px solid, #ffffff'
}

for (const dos of toDos){
const taskMaster = document.getElementById(dos.id)
console.log(taskMaster)
taskMaster.addEventListener('click', () => {
    taskMaster.remove()


//     if (taskMaster.classList.contains('background-transparent')) {
//         taskMaster.classList.remove('background-transparent')
//         taskMaster.classList.add('background-yellow')
//     } else {
//         taskMaster.classList.add('background-transparent')
//         taskMaster.classList.remove('background-yellow')
// }
})
}


// for (const dos of toDos.children) {



