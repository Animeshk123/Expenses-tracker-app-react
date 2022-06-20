function func(){
    return(((1+Math.random()) * 0x10000) | 0 ).toString(16).substring(1);
}

function uuid(){
    return (func() + func() + "-" + func() + "-3" + func().substr(0,2) + "-" + func() + "-" + func() + func() + func() ).toLowerCase();
}



export default uuid;
