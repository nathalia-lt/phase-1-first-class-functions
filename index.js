
function receivesAFunction(cake){
    return cake();
}

function returnsANamedFunction(){
    return receivesAFunction;
}

function returnsAnAnonymousFunction(){
    return function (){}
}