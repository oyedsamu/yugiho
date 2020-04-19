function yugiho(num){
    let arr= [];
    for(i=1; i<=num; i++){
        arr.push(i); 
    } 
    
    for(k=0; k<arr.length; k++){
        if(arr[k]%2==0 && arr[k]%3==0 && arr[k]%5==0){
             arr[k]= 'yu-gi-oh';
        } else
            if (arr[k] % 2 == 0 && arr[k] % 3 == 0 && arr[k] % 5 != 0){
             arr[k]= 'yu-gi';
        } else
            if (arr[k] % 2 != 0 && arr[k] % 3 == 0 && arr[k] % 5 == 0) {
            arr[k] = 'gi-oh';
        } else
            if (arr[k] % 2 == 0 && arr[k] % 3 != 0 && arr[k] % 5 == 0) {
             arr[k] = 'yu-oh';
        } else 
            if (arr[k] % 2 == 0 && arr[k] % 3 != 0 && arr[k] % 5 != 0){
             arr[k] = "yu";
        } else 
            if (arr[k] % 3 == 0){
             arr[k] = "gi";
        } else
            if (arr[k] % 5 == 0){
             arr[k] = "oh";
        } 
    }    return arr;
}

yugiho(100);