// 털 색이 까만색이 포함되어 있으면서
// 귀가 접혀있지 않은 고양이들을 뽑기

// 명령형 프로그래밍
function filterCats(cats) {
    let results = []

    for(let i = 0; i < cats.length; i++){
        const cat = cats[i]
        if(cat && cat.colors.includes('black') && cat.ear === 'unfolded'){
            results.push(cat.name)
        }
    }
    return results
}

const filterCats = filterCats(data)
console.log(filterCatsName)
document.querySelector('body').innerHTML = filterCatsName

// 선언형 프로그래밍
function filterCats(cats) {
    return cats.filter(
        cat => 
            cat && 
            cat.colors.includes('black') && 
            cat.ear === 'unfolded'
            ).map(cat => cat.name)
}

const filterCats = filterCats(data)
console.log(filterCatsName)
document.querySelector('body').innerHTML = filterCatsName