// 사전문제 4
function RockBand(members) {
    this.members = members;
    this.perform = function() {
        setTimeout(function() {
            this.members.forEach(function(member){
                member.perform();
            })
        }, 1000)
    }
}

var theOralCigarettes = new RockBand([
    {
        neme : 'takuya',
        perform : function() {
            console.log('Sing: a e u i a e u i')
        }
    }
]);

theOralCigarettes.perform();
/* 
    => undefined 

    function scope의 문제다.
*/