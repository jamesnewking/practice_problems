const inString = 'help we have been spotted';


function secret(readable){
    readable = readable.replace(/\s/g,'');
    const loops = (readable.length/6) + 1;
    const outArr = [];
    const output = {0:[],1:[],2:[],3:[]};
    let flip = true;
    let counter = 0;
    for (let index = 0;index < readable.length; index++){
        debugger;


        if(flip){
            output[counter].push(readable[index]);
            counter++;
            if(counter===3){flip=false};
        }else{
            output[counter].push(readable[index])
            counter--;
            if(counter===0){flip=true};
        }
    }
    console.log(output[0].join('')+output[1].join('')+output[2].join('')+output[3].join(''));
}