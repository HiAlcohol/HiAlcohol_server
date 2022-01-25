-- create table
-- drop table material;

create table `user` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`kakaoid` bigint NOT NULL UNIQUE,
	`profile_image` TEXT,
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

create table `liked` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`postId` bigint NOT NULL,
	`userId` bigint NOT NULL,
	PRIMARY KEY (`id`)
);

create table `recipe` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`cocktail` varchar(40) NOT NULL UNIQUE,
	`rate` varchar(255),
	`content` varchar(2000),
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
	`alcolType` varchar(20),
	`name` varchar(40) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

create table `comment` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`userId` bigint NOT NULL,
	`postId` bigint NOT NULL,
	`content` varchar(500) NOT NULL,
	`createdate` datetime NOT NULL,
	PRIMARY KEY (`id`)
);