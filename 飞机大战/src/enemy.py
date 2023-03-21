#! /usr/bin/env python
# -*- coding: utf-8 -*-

"""
    定义敌机
"""

import pygame
from random import *


class SmallEnemy(pygame.sprite.Sprite):
    """
    定义小飞机敌人
    """
    energy = 1

    def __init__(self, bg_size):
        super(SmallEnemy, self).__init__()
        self.image = pygame.image.load("material/image/enemy1.png")
        self.rect = self.image.get_rect()
        self.width, self.height = bg_size[0], bg_size[1]
        self.mask = pygame.mask.from_surface(self.image)  # 获取飞机图像的掩膜用以更加精确的碰撞检测
        self.speed = 2
        self.energy = SmallEnemy.energy
        # 定义敌机出现的位置, 保证敌机不会在程序已开始就立即出现
        self.rect.left, self.rect.top = (
            randint(0, self.width - self.rect.width), randint(-5 * self.rect.height, -5),
        )
        self.active = True
        # 加载飞机损毁图片
        self.destroy_images = []
        self.destroy_images.extend(
            [
                pygame.image.load("material/image/enemy1_down1.png"),
                pygame.image.load("material/image/enemy1_down2.png"),
                pygame.image.load("material/image/enemy1_down3.png"),
                pygame.image.load("material/image/enemy1_down4.png")
            ]
        )

    def move(self):
        """
        定义敌机的移动函数
        :return:
        """
        if self.rect.top < self.height:
            self.rect.top += self.speed
        else:
            self.reset()

    def reset(self):
        """
        当敌机向下移动出屏幕且飞机是需要进行随机出现的, 以及敌机死亡
        :return:
        """
        self.rect.left, self.rect.top = (randint(0, self.width - self.rect.width), randint(-5 * self.rect.height, 0))
        self.active = True


class MidEnemy(pygame.sprite.Sprite):
    energy = 8

    def __init__(self, bg_size):
        super(MidEnemy, self).__init__()
        self.image = pygame.image.load("material/image/enemy2.png")
        self.image_hit = pygame.image.load("material/image/enemy2_hit.png")
        self.destroy_images = []
        self.destroy_images.extend([
            pygame.image.load("material/image/enemy2_down1.png"),
            pygame.image.load("material/image/enemy2_down2.png"),
            pygame.image.load("material/image/enemy2_down3.png"),
            pygame.image.load("material/image/enemy2_down4.png")
        ])
        self.rect = self.image.get_rect()
        self.width, self.height = bg_size[0], bg_size[1]
        self.speed = 1
        self.active = True
        self.rect.left, self.rect.top = randint(0, self.width - self.rect.width),\
                                        randint(-10 * self.height, -self.height)
        self.mask = pygame.mask.from_surface(self.image)
        self.energy = MidEnemy.energy
        self.hit = False

    def move(self):
        if self.rect.top < self.height:
            self.rect.top += self.speed
        else:
            self.reset()

    def reset(self):
        self.active = True
        self.energy = MidEnemy.energy
        self.rect.left, self.rect.top = randint(0, self.width - self.rect.width), \
                                        randint(-10 * self.height, -self.height)


class BigEnemy(pygame.sprite.Sprite):
    energy = 20

    def __init__(self, bg_size):
        super(BigEnemy, self).__init__()
        self.image = pygame.image.load("material/image/enemy3_n1.png")
        self.image = pygame.image.load("material/image/enemy3_n2.png")
        self.image = pygame.image.load("material/image/enemy3_hit.png")
        self.destroy_images = []
        self.destroy_images.extend([
            pygame.image.load("material/image/enemy3_down1.png"),
            pygame.image.load("material/image/enemy3_down2.png"),
            pygame.image.load("material/image/enemy3_down3.png"),
            pygame.image.load("material/image/enemy3_down4.png"),
            pygame.image.load("material/image/enemy3_down5.png"),
            pygame.image.load("material/image/enemy3_down6.png")
            ])
        self.rect = self.image.get_rect()
        self.width, self.height = bg_size[0], bg_size[1]
        self.speed = 1
        self.active = True
        self.rect.left, self.rect.top = \
            randint(0, self.width - self.rect.width), \
            randint(-15 * self.height, -5 * self.height)
        self.mask = pygame.mask.from_surface(self.image)
        self.energy = BigEnemy.energy
        self.hit = False

    def move(self):
        if self.rect.top < self.height:
            self.rect.top += self.speed
        else:
            self.reset()

    def reset(self):
        self.active = True
        self.energy = BigEnemy.energy
        self.rect.left, self.rect.top = \
            randint(0, self.width - self.rect.width), \
            randint(-15 * self.height, -5 * self.height)
