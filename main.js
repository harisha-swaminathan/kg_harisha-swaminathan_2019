let output = [];
const inputs = process.argv.slice(2);

const names = {0:'Zero', 1:'One', 2:'Two', 3:'Three', 4:'Four', 5:'Five', 6:'Six', 7:'Seven', 8:'Eight', 9:'Nine'};
inputs.forEach((input)=>{
    if(input<10){
        output.push(names[input]);
    }else{
        let result='';
        while(input>9){
            result = ''.concat(names[input%10], result)
            input = Math.floor(input/10);
        }
        result = ''.concat(names[input], result,);
        output.push(result);
    }
});
console.log(output);