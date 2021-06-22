let form=document.getElementById('form')

let continer=document.getElementById('continer')
let table=document.createElement('table')
// console.log(table);
continer.appendChild(table)
function headerRow(){

    let tableRowFirst=document.createElement('tr')
    table.appendChild(tableRowFirst)
    let headerTable1=document.createElement('th')
    tableRowFirst.appendChild(headerTable1)
    headerTable1.textContent='Student Name'
    // console.log(headerTable1);
    
    let headerTable2=document.createElement('th')
    tableRowFirst.appendChild(headerTable2)
    headerTable2.textContent='Student Grade'
    
    let headerTable3=document.createElement('th')
    tableRowFirst.appendChild(headerTable3)
    headerTable3.textContent='Course'
    
    
    let headerTable4=document.createElement('th')
    tableRowFirst.appendChild(headerTable4)
    headerTable4.textContent='Status'
}

headerRow()



function GraderTraks(userName,course){
    this.userName=userName;
    this.course=course;
    this.grade=null;
    this.status=null;
    
GraderTraks.all.push(this)
saveData()
}
GraderTraks.all=[]

GraderTraks.prototype.getGrade=function(){
    let randomGrade=Math.floor(Math.random() * (100 - 0) + 0)
    console.log(randomGrade);
    // this.grade.push(randomGrade)
    this.grade=randomGrade

}

GraderTraks.prototype.getStatus=function(){
    // console.log(this.grade);
    if(this.grade>50){
        this.status=true
        console.log(this.grade);
    }
    if(this.grade<50){
        this.status=false
    }
}
// let omaiam=new GraderTraks('omaima','math')
// omaiam.getGrade()
// omaiam.getStatus()


function render(){
        for(let i=0;i<GraderTraks.all.length;i++){

   
            let seconedRow=document.createElement('tr')
            table.appendChild(seconedRow)
            let tableData=document.createElement('td')
            seconedRow.appendChild(tableData)
            // console.log(this.userName);
            tableData.textContent=GraderTraks.all[i].userName

            let tableData2=document.createElement('td')
            seconedRow.appendChild(tableData2)
            tableData2.textContent=GraderTraks.all[i].grade


            let tableData3=document.createElement('td')
            seconedRow.appendChild(tableData3)
            tableData3.textContent=GraderTraks.all[i].course

            let tableData4=document.createElement('td')
            seconedRow.appendChild(tableData4)
            if(GraderTraks.all[i].status){

                tableData4.textContent='Succses'
            }if(!(GraderTraks.all[i].status)){
                tableData4.textContent='Fails' 
            }
    }
// headerRow()


}

// render()







form.addEventListener('submit',submitForm)
function submitForm(event){
    event.preventDefault()
    // console.log(event.target);

    const user=event.target.userName.value
    console.log(user);
    const course=event.target.course.value
    //  console.log(course);

    let student=new GraderTraks(user,course)
    student.getGrade()
    student.getStatus()
    saveData()
    render()

}


function saveData(){
    let students=JSON.stringify(GraderTraks.all)
    localStorage.setItem('Student',students)
}

function getData(){
    // localStorage.getItem('Student')
    let parsaData=JSON.parse(localStorage.getItem('Student'))
      console.log(parsaData);
     if(parsaData){

         for(let i=0;i<GraderTraks.all.length;i++){
            let reData=new GraderTraks(GraderTraks.all[i].userName,GraderTraks.all[i].course)
            console.log(reData);
            reData.getGrade()
            reData.getStatus()
     }
     GraderTraks.all=parsaData
     render()

    }
   
}

getData()