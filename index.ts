// var a:number=10;
// console.log(a);
type memberType={
    name:string,age?:number
}

const members:memberType[] = [
    {name: 'Rakesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];


//  1 . Get array of first names of everyone
let firstName=[];
members.map(item=>{
     var firstname=item.name.split(" ")[0];
     firstName.push(firstname);    
});

console.log(firstName);


// 2 Make everyone's last names in UPPERCASE in given array of objects

members.map(item=>{
    var firstname=item.name.split(" ")[0];
    var lastname=item.name.split(" ")[1].toUpperCase();
    item.name=firstname+" "+lastname;   
});
console.log(members);

  //approach 1
//   members.map(item=>{
//     let name=item.name.split(" ");
//     console.log(name[name.length-1]);
//   })

  //approach 2
//   members.map(item=>{
//     let name=item.name.split(" ");
//     console.log(name.pop());
//   })

// 3. Get entries where age is between 41-60
let newMembers:memberType[]=[];

members.map(item=>{
     if(item.age>41 && item.age<60){
        newMembers.push(item);
     }     
});
console.log(newMembers);

// 4. Get average age
var sum=0;
var count=0;
members.map(item=>{
    if(item.age){
        count+=1;
        sum += item.age;   
    }
});

const avg=sum/count;
console.log("avg of Age : ",avg.toPrecision(3));

// 5. Get Person with maximum age
let maxAge=0;
members.map(item=>{
    if(item.age && maxAge<item.age){
        maxAge=item.age;
    }
});
console.log(maxAge);

// 6. Divide persons in three groups, result should look like
//     {
//       'young': [],
//       'old': [],
//       'noage': []
//     }
//     Less than 35yrs is young, above 35 is old

type groupsType={
    young:memberType[],
    old:memberType[],
    noage:memberType[]
}

let groups : groupsType={
    young:[],
    old:[],
    noage:[]
}

members.map(item=>{
    if(item.age && item.age<35){
       groups.young.push(item);
    }
    else if(item.age && item.age>35){
        groups.old.push(item)
    }
    else{
        groups.noage.push(item);
    }
});

console.log(groups);

// 7. add a new member to same members array instance at index 2
members[2]={
    name:"pankaj pandey",
    age:22
}
console.log(members);

// 8. extract first and second element using destructing
let [first,last]=members[0].name.split(" ");
console.log(first,last);

// 9. Create a new array instance adding a new member at index 0,
//    and keeping existing afterwards
const NewMember:memberType={
    name:"Neeraj pandey",
    age:20
}
members.unshift(NewMember);
console.log(members);

// 10. Extract properties of object using destructuring
// const {name,age}=members[0];
// console.log(name,age);

// 11. Rename extracted property of object while destructing
const {name :fullName,age:Age}=members[0];
console.log(fullName,Age);       

// 12. Destructure any property of an object and use spread operator
//     to get remaining properties in an object
const {age,...rest}=members[0];
console.log(age);
console.log(rest);

// 13. Create a new object by copying using spread operator, override
//     one of the properties to assign a new value in the same step
const Member:memberType=members[0];
const copiedMember:memberType={...Member,age:21};
console.log(copiedMember);

// 14. Use reduce function on array and object
const sampleArray:number[]=[23,234,1,32,323];

const sumSampleArray=sampleArray.reduce((total,num)=>{
    return total+num;
});

console.log(sumSampleArray);



type sampleObjectType={
    name:string,
    value:number,
    count:number,
}

const sampleObject:sampleObjectType={
    name:"pankaj",   
    value:30,
    count:5
}








