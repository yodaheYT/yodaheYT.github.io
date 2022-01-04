import pygame

pygame.init()
pygame.display.init()

display = pygame.display.set_mode((300, 300))
class rect:
    def __init__(self, x = 100, y = 100):
        self.rect = pygame.draw.rect(display, (255, 0, 0), (x, y, 100, 100))
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            quit()
    rectObj = rect()
    pygame.display.update()
    