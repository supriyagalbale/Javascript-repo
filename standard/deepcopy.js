const deepcopy = (obj) =>{
    if(typeof obj !== 'object' || obj === null){
        return obj;
    }

    if(Array.isArray(obj)){
        let tempArray = []
        for(let i=0; i<obj.length; i++){
            tempArray.push(deepcopy(obj[i]));
        }
        return tempArray;
    }

    let newObject = {}
    for(key in obj){
        newObject[key] = deepcopy(obj[key]);
    }
    return newObject;
}

let o = {
    name: 'supriya',
    place : ['jbp', 'blr', 'guna'],
    func: function(){
        console.log(this.name);
    },
    family : {
        mother: 'preeti',
        father: 'sandeep',
        ages: [40, 42]
    }
}
let family = deepcopy(o);
family.name = 'debooo';
console.log(family);
console.log(o);
family.func();
o.func();

