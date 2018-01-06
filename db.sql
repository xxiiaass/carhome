CREATE TABLE car(
    autokid INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) DEFAULT '' COMMENT "汽车的名字",
    brand INT DEFAULT 0 NOT NULL COMMENT "汽车品牌",
    type INT DEFAULT 0 NOT NULL COMMENT "汽车的型号",
    size VARCHAR(100) DEFAULT '' COMMENT "汽车的配置名称",
    price INT DEFAULT 0 NOT NULL COMMENT "汽车的价格",
    price_hight INT DEFAULT 0 NOT NULL COMMENT "汽车的第二价格",
    is_sale TINYINT DEFAULT 1 NOT NULL COMMENT "汽车是否在售",
    `createdAt` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
    `updatedAt` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '最后修改时间',
    `deletedAt` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '删除时间'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE brand(
    autokid INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) DEFAULT '' COMMENT "汽车品牌的名字",
    logo VARCHAR(1024) DEFAULT '' COMMENT "汽车品牌的LOGO图片",
    `createdAt` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
    `updatedAt` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '最后修改时间',
    `deletedAt` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '删除时间'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='汽车品牌';

CREATE TABLE type(
    autokid INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) DEFAULT '' COMMENT "汽车型号的名字",
    brand int DEFAULT 0 COMMENT "隶属的品牌",
    price_range VARCHAR(100) DEFAULT '' "该型号的价格范围",
    image VARCHAR(1024) DEFAULT '' COMMENT "汽车的示例图",
    `createdAt` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
    `updatedAt` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '最后修改时间',
    `deletedAt` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '删除时间'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='汽车型号';

CREATE TABLE article(
    autokid INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    image VARCHAR(1024) DEFAULT '' COMMENT "文章首图",
    author VARCHAR(100) DEFAULT '' COMMENT "作者的名字",
    text TEXT(204800) COMMENT "文章内容",
    `createdAt` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
    `updatedAt` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '最后修改时间',
    `deletedAt` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '删除时间'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='汽车型号';
