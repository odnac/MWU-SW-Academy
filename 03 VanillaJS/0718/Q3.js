// 사전문제 3
var idiots = {
    name : 'idiots',
    genre : 'punk rock',
    members : {
        roto : {
            memberName : 'roto',
            play : function() {
                console.log(`band ${this.name} ${this.memberName} play start`)
            }
        }
    }
}

idiots.members.roto.play();

// 관련 예시
var thisTest = {
    whoAmI : function () {
        console.log(this)
    },
    testInTest : {
        whoAmI : function() {
            console.log(this)
        }
    }
}

thisTest.whoAmI()
thisTest.testInTest.whoAmI();