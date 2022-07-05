/* 선택 과제
    
    1)http가 이미 있음에도 불구하고 https가 왜 탄생했는지, 왜 필요한지 조사해보세요.     
        http 통신은 클라이언트와 서버간의 통신에 있어서 별다른 보안 조치가 없기 때문에 HTTPS가 등장했다.
        기존의 http 프로토콜은 전송계층의 TCP 위에서 동작합니다.
        HTTPS는 SSL 위에 HTTP를 얹어서 보안이 보장된 통신을 하는 프로토콜입니다. 
        이 통신 방식을 SSL 암호화 통신이라고도 합니다. 공개키 암호화 방식이라는 알고리즘을 통해 구현됩니다.
    
    2)https가 생김으로 인해 기존 과정에서 무엇이 추가되었는지 조사해보세요.
        SSL 인증서를 통해 클라이언트와 서버 간의 통신을 보증하는 과정이 추가되었다.
*/

/*  1 네트워크 기초 */

/*  2 컴퓨터 시간 원리 

    Date 객체를 사용한다.
    date-fns,luxon을 사용한다.
*/

/*  3 암호화 

    1)Salt
        평문에 임의의 문자열을 추가하여 암호화하는 방법을 말한다.
        128bit 이상으로 만들 것을 권장한다.
    2)Key stretching
        해시를 여러번 반복하여 원문을 알기 힘들게 만드는 방법
    PBKDF2
    bcrypt
    
    양방향 암호화
        1) AES
            같은 키를 이용하여 암호화, 복호화가 가능
        2) RSA
            공개키와 개인키 두가지 키가 존재한다.
            소인수 분해를 기반으로 만들어진 알고리즘
*/

/*  4 함수형 프로그래밍 

    장점
        상태가 없기 때문에 사이드 이펙트가 없다.
        재사용성이 높다.
        코드가 짧고 간결하다.
*/

/*  5 객체지향과 프로토타입 

    객체란?
        현실에 있는 것을 추상화한 것
        추상 : 사물이 지니고 있는 여러 측면 중 특정한 부분만 있는 것
    
        객체지향이란?
        객체 위주로 설계하고 프로그래밍하는 패러다임
        추상화의 최소 단위가 각체다.
        각각의 객체는 메시지를 주고 받을 수 있다.

    프로토타입
*/

/*  6 이벤트 루프

    동기 vs 비동기 
        https://velog.io/@daybreak/%EB%8F%99%EA%B8%B0-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC
        https://www.youtube.com/watch?v=QFHyPInNhbo

    Microtask Queue와 Animation frames가 무엇인지 조사해보세요.
        https://www.youtube.com/watch?v=QFHyPInNhbo 
            Promise는 동기다. 그러나 then을 만나면 비동기 동작을 한다

    js는 싱글 쓰레드인데(because 이벤트 루프가 싱글쓰레드라서) 왜 비동기가 가능할까?
*/

