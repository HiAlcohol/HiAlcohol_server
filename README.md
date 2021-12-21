# HiAlcohol_server

1. 서비스를 실행하기 위해 필요한 것

- mysql 설치

- nodejs 설치

2. 실행 전 준비사항

- 코드 git clone 으로 다운받기 

- mysql 에서 데이터베이스 생성, 테이블 생성 후 데이터 추가

- 터미널에서 코드 압축 파일이 포함된 위치로 이동

- mysql 접속하기 (mysql -u root -p) 비밀번호 입력

- 실행
```
create database hialcohol;
use hialcohol;
source config/query.sql;
source config/product.sql;
source config/material.sql;
source config/recipe.sql;
source config/inclusion.sql;
```
- mysql 종료

- 터미널에서 코드 압출 파일을 푼 위치에서 npm install 실행

- config/env.js 파일을 열어서 데이터베이스 비밀번호와 user, 실행할 포트 번호를 지정, 수정한 후 저장

- node main.js 실행

3. 실행 후 게시글 조회

- 최초 실행 시 데이터베이스에 꿀조합 게시글은 없는 상태입니다.

- 로그인 한 후 글 작성하여 확인              
      
- - -

## HiAlcohol 데모 영상

https://youtu.be/k2yI1_-XQVw

[![HiAlcohol 데모 영상]()](https://youtu.be/k2yI1_-XQVw)

- - - 

## HiAlcohol 소개

<img width="1920" alt="KakaoTalk_Photo_2021-12-21-12-00-56" src="https://user-images.githubusercontent.com/35442832/146863737-b6429980-ab88-42f8-ba12-494c485005c6.png">

<img width="1920" alt="KakaoTalk_Photo_2021-12-21-12-01-03" src="https://user-images.githubusercontent.com/35442832/146863742-d2bf8657-6de1-4854-9e9b-1ddff1a94e7d.png">

<img width="1920" alt="KakaoTalk_Photo_2021-12-21-12-01-08" src="https://user-images.githubusercontent.com/35442832/146863748-1667854e-e7e2-4063-9121-41edf6ff2361.png">

<img width="1920" alt="KakaoTalk_Photo_2021-12-21-12-01-13" src="https://user-images.githubusercontent.com/35442832/146863759-9bc980be-d928-4c5e-adcf-5e08211be4ce.png">
