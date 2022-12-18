function dividedDiff(n, x, datapx, datapy){
    // eslint-disable-next-line no-debugger
    debugger;
    let arrx = [];


    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            datapy[j][i] = (datapy[j][i - 1] - datapy[j + 1][i - 1]) / (datapx[j] - datapx[i + j]);
        }
    }

    let ans = datapy[0][0];
    arrx[0] = 1;
 
    for (let i = 1; i < n; i++) {
      arrx[i] = proterm(i, x, datapx);
      ans = ans + (proterm(i, x, datapx) * datapy[0][i]);
    }

    let finy = datapy[0];
    return {ans,finy,arrx}
}   

function proterm(i, value, x)
{
    let pro = 1;
    for (var j = 0; j < i; j++) {
        pro = pro * (value - x[j]);
    }
    return pro;
}