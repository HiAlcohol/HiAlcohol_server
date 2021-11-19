-- create table
-- drop table material;

create table `user` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`email` varchar(100) NOT NULL UNIQUE,
	`nickname` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

create table `post` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`userId` bigint NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` varchar(3000),
	`createdate` datetime NOT NULL,
	`updatedate` datetime,
	PRIMARY KEY (`id`)
);

create table `like` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`postId` bigint NOT NULL,
	`userId` bigint NOT NULL,
	PRIMARY KEY (`id`)
);

create table `recipe` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`cocktail` varchar(40) NOT NULL UNIQUE,
	`rate` varchar(255),
	`content` varchar(2000)
	PRIMARY KEY (`id`)
);

create table `material` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`material` varchar(50) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

create table `inclusion` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`recipeId` bigint NOT NULL,
	`materialId` bigint NOT NULL,
	PRIMARY KEY (`id`)
);

create table `product` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`name` varchar(40) NOT NULL UNIQUE,
	`alcolType` varchar(20),
	PRIMARY KEY (`id`)
);

-- // insert data
-- insert into `recipe` values(null, 'cocktail', 'content')
-- 재료테이블
-- 재료테이블
INSERT INTO `material`
(1, '보드카');

INSERT INTO `material`
VALUES(2, '커피 리큐어');

INSERT INTO `material`
VALUES(3, '생크림');

INSERT INTO `material`
VALUES(4, '레몬슬라이스');

INSERT INTO `material`
VALUES(5, '파인애플슬라이스');

INSERT INTO `material`
VALUES(6, '라임주스');

INSERT INTO `material`
VALUES(7, '라임슬라이스');

INSERT INTO `material`
VALUES(8, '진저에일');

INSERT INTO `material`
VALUES(9, '파인애플주스');

INSERT INTO `material`
VALUES(10, '코코넛밀크');

INSERT INTO `material`
VALUES(11, '아마레또');

INSERT INTO `material`
VALUES(12, '오렌지주스');

INSERT INTO `material`
VALUES(13, '크랜베리주스');

INSERT INTO `material`
VALUES(14, '자몽주스');

INSERT INTO `material`
VALUES(15, '토마토 주스');

INSERT INTO `material`
VALUES(16, '트리폴섹');

INSERT INTO `material`
VALUES(17, '그레나딘 시럽');

INSERT INTO `material`
VALUES(18, '구앵트로');

INSERT INTO `material`
VALUES(19, '메론 주스');

INSERT INTO `material`
VALUES(20, '멜론 쥬스');

INSERT INTO `material`
VALUES(21, '메론 리큐어');

INSERT INTO `material`
VALUES(22, '멜론 리큐어');

INSERT INTO `material`
VALUES(23, '크림 드 카카오화이트');

INSERT INTO `material`
VALUES(24, '데킬라');

INSERT INTO `material`
VALUES(25, '데낄라');

INSERT INTO `material`
VALUES(26, '화이트 럼');

INSERT INTO `material`
VALUES(27, '라임');

INSERT INTO `material`
VALUES(28, '콜라');

INSERT INTO `material`
VALUES(29, '마라스키노체리');

INSERT INTO `material`
VALUES(30, '블루 큐라소');

INSERT INTO `material`
VALUES(31, '스카치 위스키');

INSERT INTO `material`
VALUES(32, '드람부이');

INSERT INTO `material`
VALUES(33, '위스키');

INSERT INTO `material`
VALUES(34, '아이리시 위스키');

INSERT INTO `material`
VALUES(35, '커피');

INSERT INTO `material`
VALUES(36, '민트 잎');

INSERT INTO `material`
VALUES(37, '소다수');

INSERT INTO `material`
VALUES(38, '설탕');

INSERT INTO `material`
VALUES(39, '드라이진');

INSERT INTO `material`
VALUES(40, '체리브랜디');

INSERT INTO `material`
VALUES(41, '드라이 베르무트');

INSERT INTO `material`
VALUES(42, '계란흰자');

INSERT INTO `material`
VALUES(43, '스위트 앤 사워 믹스');

INSERT INTO `material`
VALUES(44, '말리부 럼');

INSERT INTO `material`
VALUES(45, '크렘 드 바나나');

INSERT INTO `material`
VALUES(46, '탄산수');

INSERT INTO `material`
VALUES(47, '레몬주스');