var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var members = [
    { name: 'Rakesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
];
//  1 . Get array of first names of everyone
var firstName = [];
members.map(function (item) {
    var firstname = item.name.split(" ")[0];
    firstName.push(firstname);
});
console.log(firstName);
// 2 Make everyone's last names in UPPERCASE in given array of objects
members.map(function (item) {
    var firstname = item.name.split(" ")[0];
    var lastname = item.name.split(" ")[1].toUpperCase();
    item.name = firstname + " " + lastname;
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
var newMembers = [];
members.map(function (item) {
    if (item.age > 41 && item.age < 60) {
        newMembers.push(item);
    }
});
console.log(newMembers);
// 4. Get average age
var sum = 0;
var count = 0;
members.map(function (item) {
    if (item.age) {
        count += 1;
        sum += item.age;
    }
});
var avg = sum / count;
console.log("avg of Age : ", avg.toPrecision(3));
// 5. Get Person with maximum age
var maxAge = 0;
members.map(function (item) {
    if (item.age && maxAge < item.age) {
        maxAge = item.age;
    }
});
console.log(maxAge);
var groups = {
    young: [],
    old: [],
    noage: []
};
members.map(function (item) {
    if (item.age && item.age < 35) {
        groups.young.push(item);
    }
    else if (item.age && item.age > 35) {
        groups.old.push(item);
    }
    else {
        groups.noage.push(item);
    }
});
console.log(groups);
// 7. add a new member to same members array instance at index 2
members[2] = {
    name: "pankaj pandey",
    age: 22
};
console.log(members);
// 8. extract first and second element using destructing
var _a = members[0].name.split(" "), first = _a[0], last = _a[1];
console.log(first, last);
// 9. Create a new array instance adding a new member at index 0,
//    and keeping existing afterwards
var NewMember = {
    name: "Neeraj pandey",
    age: 20
};
members.unshift(NewMember);
console.log(members);
// 10. Extract properties of object using destructuring
// const {name,age}=members[0];
// console.log(name,age);
// 11. Rename extracted property of object while destructing
var _b = members[0], fullName = _b.name, Age = _b.age;
console.log(fullName, Age);
// 12. Destructure any property of an object and use spread operator
//     to get remaining properties in an object
var _c = members[0], age = _c.age, rest = __rest(_c, ["age"]);
console.log(age);
console.log(rest);
// 13. Create a new object by copying using spread operator, override
//     one of the properties to assign a new value in the same step
var Member = members[0];
var copiedMember = __assign(__assign({}, Member), { age: 21 });
console.log(copiedMember);
// 14. Use reduce function on array and object
var sampleArray = [23, 234, 1, 32, 323];
var sumSampleArray = sampleArray.reduce(function (total, num) {
    return total + num;
});
console.log(sumSampleArray);
var sampleObject = {
    name: "pankaj",
    value: 30,
    count: 5
};
Object.keys(sampleObject).reduce(function (item) {
    console.log(sampleObject[item]);
    return item;
});
