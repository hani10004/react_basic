
# https://www.npmjs.com/package/json-server  
## 뉴터미널창입력 --/ npm i json-server
![image](https://github.com/hani10004/react_basic/assets/129706997/4f2c3c3f-aab1-4b73-bdcc-67648fc3acff)

---------------------

# 제이슨폴더(db.json) 만들고 내용 입력
** db.json폴더는 -- root에 만들어야함
![image](https://github.com/hani10004/react_basic/assets/129706997/9ecfbfd0-06b2-4525-80a0-09208c9f39c0)

---------------------

#bd.json 실행하기
![image](https://github.com/hani10004/react_basic/assets/129706997/261b3558-b965-483e-977c-5e64bfd1712c)
## 위와같이 실행하면 port를 3000번을 사용하기때문에 react와 중복이ㅏ 되어버림 
##그래서 port를 변경해 주어야함 
    
Start JSON Server

# json-server --watch db.json--port3004

json-server --watch db.json --port 3004
이것이 실행이 되지 않을 경우에는 
npx json-server --watch db.json --port 3004
를 적용한다
---------------------


# 서버와 통신하기 
        npm i axios
![image](https://github.com/hani10004/react_basic/assets/129706997/159aeea0-0e76-40d5-97a8-b8b42f3c7ee0)

https://www.npmjs.com/package/axios
