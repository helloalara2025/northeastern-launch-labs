CREATE TABLE `projects` (
	`id` int AUTO_INCREMENT NOT NULL,
	`projectId` varchar(16) NOT NULL,
	`name` varchar(255) NOT NULL,
	`subtitle` varchar(500) NOT NULL,
	`domain` varchar(100) NOT NULL,
	`timeline` varchar(255) NOT NULL,
	`tech` json NOT NULL,
	`description` text NOT NULL,
	`mvpScope` text NOT NULL,
	`endGoal` text NOT NULL,
	`sortOrder` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `projects_id` PRIMARY KEY(`id`),
	CONSTRAINT `projects_projectId_unique` UNIQUE(`projectId`)
);
