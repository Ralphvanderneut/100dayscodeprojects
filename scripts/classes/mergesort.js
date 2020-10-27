Merge = (left, right) => {
    const res = []; 
    
    while (left.length > 0 || right.length > 0) {
        if (left.length > 0 && right.length > 0) {
            if (left[0] <= right[0])  //Comparing First two elements to see which is smaller
            {
                res.push(left[0]);
                left.splice(0,1);      //Rest of the list minus the first element
            }
            else
            {
                res.push(right[0]);
                right.splice(0,1);   
            }
            
        } else if (left.length > 0) {
            res.push(left[0]);
            left.splice(0, 1);
        } else {
            res.push(right[0]);
            right.splice(0, 1);
        }
    }

    return res;

}

MergeSort = (unsort) => {
    if (unsort.length <= 1)
        return unsort;
    
    const mid = unsort.length / 2;

    const left = unsort.slice(0, mid);
    const right = unsort.slice(mid, unsort.length);
    const leftsort = MergeSort(left);
    const rightsort = MergeSort(right);
    return Merge(leftsort, rightsort);
};


const sort = MergeSort([9, 23, 423, 141, 41, 1]);

console.log(sort);