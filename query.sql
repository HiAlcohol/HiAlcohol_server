// create table
create table `user` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`email` varchar(100) NOT NULL UNIQUE,
	`nickname` varchar(50) NOT NULL
);

create table `post` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`userId` bigint NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` varchar(3000),
	`createdate` datetime NOT NULL,
	`updatedate` datetime
);

create table `like` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`postId` bigint NOT NULL,
	`userId` bigint NOT NULL
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
	`material` varchar(50) NOT NULL UNIQUE
);

create table `inclusion` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`recipeId` bigint NOT NULL,
	`materialId` bigint NOT NULL
);

create table `product` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`name` varchar(40) NOT NULL UNIQUE,
	`alcolType` varchar(20)
);

// insert data
insert into `recipe` values(null, 'cocktail', 'content')