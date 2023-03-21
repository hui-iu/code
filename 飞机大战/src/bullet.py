#! /usr/bin/env python
# -*- coding: utf-8 -*-

"""
    子弹的实现
"""

import pygame


class Bullet(pygame.sprite.Sprite):

    def __init__(self, position):
        super(Bullet, self).__init__()
        self.image = pygame.image.load("material/image/bullet2.png")
        self.rect = self.image.get_rect()
        self.rect.left, self.rect.top = position
        self.speed = 35
        self.active = True
        self.mask = pygame.mask.from_surface(self.image)

    def move(self):
        """
        子弹移动, 超出屏幕范围, 则设置死亡
        :return:
        """
        if self.rect.top < 0:
            self.active = False
        else:
            self.rect.top -= self.speed

    def reset(self, position):
        """
        复位函数
        :param position:
        :return:
        """
        self.rect.left, self.rect.top = position
        self.active = True


class Bullet2(pygame.sprite.Sprite):
    def __init__(self, position):
        pygame.sprite.Sprite.__init__(self)

        self.image = pygame.image.load("material/images/bullet1.png").convert_alpha()
        self.rect = self.image.get_rect()
        self.rect.left, self.rect.top = position
        self.speed = 35
        self.active = False
        self.mask = pygame.mask.from_surface(self.image)

    def move(self):
        self.rect.top -= self.speed

        if self.rect.top < 0:
            self.active = False

    def reset(self, position):
        self.rect.left, self.rect.top = position
        self.active = True
